import { useState, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { number, z } from "zod";

import ApprovalTable from "../components/ApprovalTable";
import ApprovalForm from "../components/ApprovalForm";

// Define Zod schema for the approval request data
export const approvalSchema = z.object({
  id: number(),
  unit: z
    .string()
    .min(3, "Unit must be at least 3 characters")
    .max(100, "Unit must be less than 100 characters"),
  approvalName: z
    .string()
    .min(3, "Approval name must be at least 3 characters")
    .max(100, "Approval name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email"),
  site: z.enum(["Bintaro", "Puri", "Pondok Indah"]),
});

// Type derived from Zod schema for easy inference
export type ApprovalRequest = z.infer<typeof approvalSchema>;

const Approval = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedApproval, setSelectedApproval] =
    useState<ApprovalRequest | null>(null);

  // Placeholder for approval data
  const approvalRequests: ApprovalRequest[] = [
    {
      id: 1,
      unit: "IT Manager Operation",
      approvalName: "Hafit Hermawan",
      email: "hafithermawan@rspondokindah.co.id",
      site: "Pondok Indah",
    },
    {
      id: 2,
      unit: "Marketing",
      approvalName: "Jane Smith",
      email: "jane.smith@example.com",
      site: "Bintaro",
    },
    {
      id: 3,
      unit: "HR",
      approvalName: "Bob Jones",
      email: "bob.jones@example.com",
      site: "Puri",
    },
    {
      id: 4,
      unit: "Finance",
      approvalName: "Alice White",
      email: "alice.white@example.com",
      site: "Pondok Indah",
    },
  ];

  // Handle Add/Edit Modal
  const handleModalToggle = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  const handleEdit = (approval: ApprovalRequest): void => {
    setSelectedApproval(approval);
    handleModalToggle();
  };

  const handleDelete = (approvalId: number): void => {
    alert(`Delete approval request with ID: ${approvalId}`);
  };

  // Handle form submission for adding or editing approval
  const handleSubmitApproval: SubmitHandler<ApprovalRequest> = (data) => {
    if (selectedApproval) {
      console.log("Editing approval:", data);
    } else {
      console.log("Adding new approval:", data);
    }
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Approval Page</h2>
      <p className="text-gray-700 mb-6">
        Manage and track approval requests below.
      </p>

      {/* Add Approval Button */}
      <button
        onClick={() => handleModalToggle()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 cursor-pointer"
      >
        Add Approval
      </button>

      {/* Table Section */}
      <ApprovalTable
        approvalRequests={approvalRequests}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal for adding/editing approval */}
      {showModal && (
        <ApprovalForm
          isEditing={selectedApproval !== null}
          approvalData={selectedApproval}
          onClose={handleModalToggle}
          onSubmit={handleSubmitApproval}
        />
      )}
    </div>
  );
};

export default Approval;
