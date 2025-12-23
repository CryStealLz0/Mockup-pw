import Layout from '../../components/Layout';
import { Route, Routes } from 'react-router-dom';

export default function MahasiswaDashboard() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <div className="text-2xl font-semibold">Mahasiswa Dashboard</div>
          }
        />
        <Route path="matkul" element={<div>List Mata Kuliah (mock)</div>} />
      </Route>
    </Routes>
  );
}
