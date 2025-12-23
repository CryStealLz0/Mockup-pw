import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function RoleRedirect() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={`/${user.role}`} replace />;
}
