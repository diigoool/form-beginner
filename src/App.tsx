import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FormRegister from "./pages/FormRegister";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute"; // Protect routes
import Approval from "./pages/Approval";

import Handover from "./pages/Handover";
import "./App.css";
import EmployeeAccess from "./pages/EmployeeAccess";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for login and register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<FormRegister />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          {/* Sidebar will be included in all pages that require login */}
          <Route element={<Sidebar />}>
            {/* Routes with Sidebar visible */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/approval" element={<Approval />} />
            <Route path="/akses" element={<EmployeeAccess />} />
            <Route path="/handover" element={<Handover />} />
          </Route>
        </Route>

        {/* Redirect to login if not authenticated */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
