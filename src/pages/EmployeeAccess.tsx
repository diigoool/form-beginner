import { useState, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import EmployeeAccessTable from "../components/EmployeeAccessTable";
import EmployeeAccessForm from "../components/EmployeeAccessForm";

// Define Zod schema for validation
export const employeeAccessSchema = z.object({
  id: z.number(),
  unit: z.string().min(3, "Unit must be at least 3 characters").max(100),
  employeeName: z
    .string()
    .min(3, "Employee name must be at least 3 characters")
    .max(100),
  site: z.enum(["Bintaro", "Puri", "Pondok Indah"]),
});

// Type inferred from Zod schema
export type EmployeeAccessRequest = z.infer<typeof employeeAccessSchema>;

const EmployeeAccess = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] =
    useState<EmployeeAccessRequest | null>(null);

  // Placeholder data for employee access requests
  const employeeAccessRequests: EmployeeAccessRequest[] = [
    {
      id: 1,
      unit: "IT Support",
      employeeName: "Andi Saputra",
      site: "Pondok Indah",
    },
    { id: 2, unit: "Marketing", employeeName: "Jane Smith", site: "Bintaro" },
    { id: 3, unit: "HR", employeeName: "Bob Jones", site: "Puri" },
    {
      id: 4,
      unit: "Finance",
      employeeName: "Alice White",
      site: "Pondok Indah",
    },
  ];

  // Toggle modal visibility
  const handleModalToggle = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  const handleEdit = (employee: EmployeeAccessRequest): void => {
    setSelectedEmployee(employee);
    handleModalToggle();
  };

  const handleDelete = (employeeId: number): void => {
    alert(`Delete employee access request with ID: ${employeeId}`);
  };

  // Handle form submission for adding or editing employee access
  const handleSubmitEmployee: SubmitHandler<EmployeeAccessRequest> = (data) => {
    if (selectedEmployee) {
      console.log("Editing employee access:", data);
    } else {
      console.log("Adding new employee access:", data);
    }
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Employee Access</h2>
      <p className="text-gray-700 mb-6">
        Manage and track employee access requests below.
      </p>

      {/* Add Employee Access Button */}
      <button
        onClick={() => handleModalToggle()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 cursor-pointer"
      >
        Add Employee Access
      </button>

      {/* Table Section */}
      <EmployeeAccessTable
        employeeAccessRequests={employeeAccessRequests}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal for adding/editing employee access */}
      {showModal && (
        <EmployeeAccessForm
          isEditing={selectedEmployee !== null}
          employeeData={selectedEmployee}
          onClose={handleModalToggle}
          onSubmit={handleSubmitEmployee}
        />
      )}
    </div>
  );
};

export default EmployeeAccess;
