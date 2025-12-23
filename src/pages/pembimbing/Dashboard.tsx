import Layout from '../../components/Layout';
import { Route, Routes } from 'react-router-dom';

export default function PembimbingDashboard() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <div className="text-2xl font-semibold">Pembimbing Dashboard</div>
          }
        />
        <Route path="bimbingan" element={<div>Daftar Bimbingan (mock)</div>} />
      </Route>
    </Routes>
  );
}
