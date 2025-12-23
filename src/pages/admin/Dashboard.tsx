import Layout from '../../components/Layout';
import { Route, Routes } from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import AdminLecturerQuota from './pages/AdminLecturerQuota';
import AdminRegistrationValidation from './pages/AdminRegistrationValidation';

export default function AdminDashboard() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<AdminHome />} />
        <Route path="lecturer-quota" element={<AdminLecturerQuota />} />
        <Route
          path="regis-validation"
          element={<AdminRegistrationValidation />}
        />
        <Route path="users" element={<div>Kelola Users</div>} />
        <Route path="settings" element={<div>Pengaturan</div>} />
      </Route>
    </Routes>
  );
}
