import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

interface RootState {
  userData: {
    accessToken?: string;
    user?: {
      role?: string;
    };
    isAdminLoggedIn: boolean;
  };
}

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles = [],
}) => {
  const { isAdminLoggedIn, accessToken } = useSelector(
    (state: RootState) => state.adminData,
  );

  // If admin is not logged in
  if (!isAdminLoggedIn && !accessToken) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
