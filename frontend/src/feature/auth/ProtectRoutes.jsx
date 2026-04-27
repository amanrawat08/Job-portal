import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children, roles = [] }) => {
  const { user, loading } = useSelector((state) => state.user);

  if (loading) return null; // or Loader

  if (!user) return <Navigate to="/login" replace />;

  if (roles.length && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectRoutes;