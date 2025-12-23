import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

type Props = { allow: Array<'admin' | 'pembimbing' | 'mahasiswa'> };
export default function Protected({ allow }: Props) {
  const { user } = useAuth();
  const loc = useLocation();
  if (!user) return <Navigate to="/login" state={{ from: loc }} replace />;
  if (!allow.includes(user.role)) return <Navigate to="/login" replace />;
  return <Outlet />;
}
