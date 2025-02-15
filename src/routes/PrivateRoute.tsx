import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Simulating an authentication check. Replace this with actual logic.
  const isAuthenticated = true; // Change this to true if the user is authenticated

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
