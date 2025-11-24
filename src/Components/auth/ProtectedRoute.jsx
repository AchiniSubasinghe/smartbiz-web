import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Not logged in → redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // Role not allowed → redirect to profile
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}

