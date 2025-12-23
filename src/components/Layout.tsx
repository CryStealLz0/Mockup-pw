import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { getMenuByRole } from '../data/menus';
import { useAuth } from '../auth/AuthContext';

export default function Layout() {
  const { user } = useAuth();
  const menu = getMenuByRole(user?.role ?? 'mahasiswa');
  return (
    <div className="flex min-h-dvh bg-slate-50">
      <Sidebar menu={menu} />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
