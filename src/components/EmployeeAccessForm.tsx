import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  employeeAccessSchema,
  EmployeeAccessRequest,
} from "../types/EmployeeAccess";

type Props = {
  isEditing: boolean;
  employeeData: EmployeeAccessRequest | null;
  onClose: () => void;
  onSubmit: (data: EmployeeAccessRequest) => void;
};

const EmployeeAccessForm = ({
  isEditing,
  employeeData,
  onClose,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EmployeeAccessRequest>({
    resolver: zodResolver(employeeAccessSchema),
  });

  useEffect(() => {
    if (isEditing && employeeData) {
      setValue("unit", employeeData.unit);
      setValue("employeeName", employeeData.employeeName);
      setValue("site", employeeData.site);
    }
  }, [isEditing, employeeData, setValue]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">
          {isEditing ? "Edit Employee Access" : "Add New Employee"}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama User</label>
            <input
              type="text"
              {...register("employeeName")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Nama User"
            />
            {errors.employeeName && (
              <p className="text-red-500 text-sm">
                {errors.employeeName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Unit</label>
            <input
              type="text"
              {...register("unit")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Nama Unit"
            />
            {errors.unit && (
              <p className="text-red-500 text-sm">{errors.unit.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {isEditing ? "Save Changes" : "Add Employee"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeAccessForm;
