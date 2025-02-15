import { EmployeeAccessRequest } from "../types/EmployeeAccess";

type Props = {
  employeeAccessRequests: EmployeeAccessRequest[];
  onEdit: (employee: EmployeeAccessRequest) => void;
  onDelete: (employeeId: number) => void;
};

const EmployeeAccessTable = ({
  employeeAccessRequests,
  onEdit,
  onDelete,
}: Props) => (
  <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
    <table className="min-w-full table-auto">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            No.
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Nama User
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
            Nama Unit
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
        {employeeAccessRequests.map((employee, index) => (
          <tr key={employee.id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
            <td className="px-4 py-2 text-sm text-gray-800">
              {employee.employeeName}
            </td>
            <td className="px-4 py-2 text-sm text-gray-800">{employee.unit}</td>
            <td className="px-4 py-2 text-sm text-gray-800">{employee.site}</td>
            <td className="px-4 py-2 text-sm text-gray-800">
              <button
                onClick={() => onEdit(employee)}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-yellow-600 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(employee.id)}
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

export default EmployeeAccessTable;
