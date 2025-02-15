import { ApprovalRequest } from "../pages/Approval";

type Props = {
  approvalRequests: ApprovalRequest[];
  onEdit: (approval: ApprovalRequest) => void;
  onDelete: (approvalId: number) => void;
};

const ApprovalTable = ({ approvalRequests, onEdit, onDelete }: Props) => (
  <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
    <table className="min-w-full table-auto">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            No.
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Unit
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Approval Name
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Email
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Site
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {approvalRequests.map((approval, index) => (
          <tr key={approval.id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
            <td className="px-4 py-2 text-sm text-gray-800">{approval.unit}</td>
            <td className="px-4 py-2 text-sm text-gray-800">
              {approval.approvalName}
            </td>
            <td className="px-4 py-2 text-sm text-gray-800">
              {approval.email}
            </td>
            <td className="px-4 py-2 text-sm text-gray-800">{approval.site}</td>
            <td className="px-4 py-2 text-sm text-gray-800">
              <button
                onClick={() => onEdit(approval)}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-yellow-600 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(approval.id)}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ApprovalTable;
