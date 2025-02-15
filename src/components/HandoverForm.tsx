import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handoverSchema, HandoverRequest } from "../types/Handover";

type Props = {
  isEditing: boolean;
  handoverData: HandoverRequest | null;
  onClose: () => void;
  onSubmit: (data: HandoverRequest) => void;
};

const HandoverForm = ({
  isEditing,
  handoverData,
  onClose,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HandoverRequest>({
    resolver: zodResolver(handoverSchema),
  });

  useEffect(() => {
    if (isEditing && handoverData) {
      setValue("requestId", handoverData.requestId);
      setValue("user", handoverData.user);
      setValue("assignTo", handoverData.assignTo);
    }
  }, [isEditing, handoverData, setValue]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">
          {isEditing ? "Edit Handover Request" : "Add New Handover"}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Request ID</label>
            <input
              type="text"
              {...register("requestId")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Request ID"
            />
            {errors.requestId && (
              <p className="text-red-500 text-sm">{errors.requestId.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">User</label>
            <input
              type="text"
              {...register("user")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter User Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Assign To</label>
            <input
              type="text"
              {...register("assignTo")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Assign To"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {isEditing ? "Save Changes" : "Add Handover"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HandoverForm;
