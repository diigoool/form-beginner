import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { approvalSchema } from "../pages/Approval"; // Assuming approvalSchema is defined here
import { ApprovalRequest } from "../pages/Approval";

type Props = {
  isEditing: boolean;
  approvalData: ApprovalRequest | null;
  onClose: () => void;
  onSubmit: (data: ApprovalRequest) => void;
};

const ApprovalForm = ({
  isEditing,
  approvalData,
  onClose,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ApprovalRequest>({
    resolver: zodResolver(approvalSchema),
  });

  // Set form values for editing
  useEffect(() => {
    if (isEditing && approvalData) {
      setValue("unit", approvalData.unit);
      setValue("approvalName", approvalData.approvalName);
      setValue("email", approvalData.email);
      setValue("site", approvalData.site);
    }
  }, [isEditing, approvalData, setValue]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">
          {isEditing ? "Edit Approval" : "Add New Approval"}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Unit</label>
            <input
              type="text"
              {...register("unit")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Unit"
            />
            {errors.unit && (
              <p className="text-red-500 text-sm">{errors.unit.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Approval Name</label>
            <input
              type="text"
              {...register("approvalName")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Approval Name"
            />
            {errors.approvalName && (
              <p className="text-red-500 text-sm">
                {errors.approvalName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Site</label>
            <select
              {...register("site")}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Bintaro">Bintaro</option>
              <option value="Puri">Puri</option>
              <option value="Pondok Indah">Pondok Indah</option>
            </select>
            {errors.site && (
              <p className="text-red-500 text-sm">{errors.site.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              {isEditing ? "Save Changes" : "Add Approval"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApprovalForm;
