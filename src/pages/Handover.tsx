const Handover = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Handover Page</h2>
      <p className="text-gray-700 mb-6">
        This is where you can manage handovers. Below is a table showing the
        handover requests.
      </p>

      {/* Table Section */}
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
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800">1</td>
              <td className="px-4 py-2 text-sm text-gray-800">REQ12345</td>
              <td className="px-4 py-2 text-sm text-gray-800">John Doe</td>
              <td className="px-4 py-2 text-sm text-gray-800">Jane Smith</td>
            </tr>
            {/* Row 2 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800">2</td>
              <td className="px-4 py-2 text-sm text-gray-800">REQ12346</td>
              <td className="px-4 py-2 text-sm text-gray-800">Jane Smith</td>
              <td className="px-4 py-2 text-sm text-gray-800">Robert Brown</td>
            </tr>
            {/* Row 3 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800">3</td>
              <td className="px-4 py-2 text-sm text-gray-800">REQ12347</td>
              <td className="px-4 py-2 text-sm text-gray-800">Robert Brown</td>
              <td className="px-4 py-2 text-sm text-gray-800">Emily White</td>
            </tr>
            {/* Row 4 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800">4</td>
              <td className="px-4 py-2 text-sm text-gray-800">REQ12348</td>
              <td className="px-4 py-2 text-sm text-gray-800">Emily White</td>
              <td className="px-4 py-2 text-sm text-gray-800">John Doe</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Handover;
