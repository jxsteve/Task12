import { Navigate, useLocation } from "react-router-dom";
import { useAuth, type Role } from "../context/AuthContext";
import type { ReactElement } from "react";

interface ProtectedRouteProps {
  children: ReactElement;
  permit?: Role[];
}

export default function ProtectedRoute({
  children,
  permit,
}: ProtectedRouteProps) {
  const { account } = useAuth();
  const location = useLocation();

  if (!account) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (permit && !permit.includes(account.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
