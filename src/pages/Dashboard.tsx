const Dashboard = () => {
  return (
    <div className=" p-6">
      <h2 className="text-2xl font-semibold mb-6">Welcome to the Dashboard!</h2>
      <p className="text-gray-700 mb-8">
        This is where you can view your dashboard data. Below are the quick
        views of your current tasks and status.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Card 1 - Approvals */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Approval Status
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-700">Pending Approvals</p>
            <div className="text-3xl text-yellow-500">5</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            You have 5 pending approvals to review.
          </p>
        </div>

        {/* Dashboard Card 2 - Akses Karyawan */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Employee Access
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-700">Access Requests</p>
            <div className="text-3xl text-blue-500">8</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            You have 8 new employee access requests.
          </p>
        </div>

        {/* Dashboard Card 3 - Handover */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Handover Tasks
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-700">Pending Handover Tasks</p>
            <div className="text-3xl text-red-500">3</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            You have 3 pending handover tasks to complete.
          </p>
        </div>

        {/* Dashboard Card 4 - Service Desk Logs */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Service Desk Logs
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-700">Open Tickets</p>
            <div className="text-3xl text-green-500">12</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            You have 12 open service desk tickets awaiting response.
          </p>
        </div>
      </div>

      {/* Additional Section (Optional) - Overall Stats or Charts */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Overall Stats</h3>
        {/* Example for a simple stats section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Performance Overview
          </h4>
          <div className="flex items-center justify-between">
            <div className="text-lg text-gray-700">Total Tasks Completed</div>
            <div className="text-3xl text-purple-500">75</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Total of 75 tasks completed this week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
