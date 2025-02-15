import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar for Desktop */}
      <div className="hidden md:block fixed inset-0 w-64 bg-gray-800 text-white p-6">
        {/* Adding <h1> title above the navigation */}
        <h1 className="text-3xl font-bold text-gray-100 mb-8">
          Service Desk Dashboard
        </h1>

        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/" className="hover:text-green-400">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/approval" className="hover:text-green-400">
                Approval
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/akses" className="hover:text-green-400">
                Akses Karyawan
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/handover" className="hover:text-green-400">
                Handover
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
