import { HandoverRequest } from "../types/Handover";

type Props = {
  handoverRequests: HandoverRequest[];
  onEdit: (handover: HandoverRequest) => void;
  onDelete: (handoverId: number) => void;
};

const HandoverTable = ({ handoverRequests, onEdit, onDelete }: Props) => (
  <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
    <table className="min-w-full table-auto">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            No.
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Request ID
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            User
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Assign To
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {handoverRequests.map((handover, index) => (
          <tr key={handover.id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
            <td className="px-4 py-2 text-sm text-gray-800">
              {handover.requestId}
            </td>
            <td className="px-4 py-2 text-sm text-gray-800">{handover.user}</td>
            <td className="px-4 py-2 text-sm text-gray-800">
              {handover.assignTo}
            </td>
            <td className="px-4 py-2 text-sm text-gray-800">
              <button
                onClick={() => onEdit(handover)}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-yellow-600 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(handover.id)}
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

export default HandoverTable;
