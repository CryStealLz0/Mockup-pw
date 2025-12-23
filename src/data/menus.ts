export type MenuItem = { title: string; to: string };

const adminMenu: MenuItem[] = [
  { title: 'Dashboard', to: '/admin' },
  { title: 'Pembimbing & Kuota', to: '/admin/lecturer-quota' },
  { title: 'Registrasi & Validasi', to: '/admin/regis-validation' },
  { title: 'Users', to: '/admin/users' },
  { title: 'Settings', to: '/admin/settings' },
];

const pembimbingMenu: MenuItem[] = [
  { title: 'Dashboard', to: '/pembimbing' },
  { title: 'Bimbingan', to: '/pembimbing/bimbingan' },
];

const mahasiswaMenu: MenuItem[] = [
  { title: 'Dashboard', to: '/mahasiswa' },
  { title: 'Mata Kuliah', to: '/mahasiswa/matkul' },
];

export function getMenuByRole(role: 'admin' | 'pembimbing' | 'mahasiswa') {
  if (role === 'admin') return adminMenu;
  if (role === 'pembimbing') return pembimbingMenu;
  return mahasiswaMenu;
}
