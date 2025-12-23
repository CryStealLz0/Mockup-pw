import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/Dashboard';
import PembimbingDashboard from './pages/pembimbing/Dashboard';
import MahasiswaDashboard from './pages/mahasiswa/Dashboard';
import Protected from './routes/Protected';
import RoleRedirect from './routes/RoleRedirect';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Role home routes */}
        <Route element={<Protected allow={['admin']} />}>
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Route>
        <Route element={<Protected allow={['pembimbing']} />}>
          <Route path="/pembimbing/*" element={<PembimbingDashboard />} />
        </Route>
        <Route element={<Protected allow={['mahasiswa']} />}>
          <Route path="/mahasiswa/*" element={<MahasiswaDashboard />} />
        </Route>

        {/* kalau sudah login dan nyasar ke /me arahkan berdasar role */}
        <Route path="/me" element={<RoleRedirect />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}
