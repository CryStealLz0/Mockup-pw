import type {
  RegistrationRequest,
  NewUserMock,
} from '../data/registrationTypes';

export const UserAccountFormMock: React.FC<{
  request: RegistrationRequest;
  newUser: NewUserMock;
}> = ({ request, newUser }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-900">
          Form Pembuatan Akun Pengguna
        </h2>
        <span className="text-[11px] text-slate-500">
          Hanya mockup UI, belum tersambung.
        </span>
      </div>

      <div className="space-y-3 text-xs">
        {/* Role & Prodi */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block font-medium text-slate-600">
              Peran Pengguna
            </label>
            <select className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white">
              <option>Mahasiswa</option>
              <option>Dosen</option>
              <option>Koordinator</option>
              <option>Admin</option>
            </select>
            <p className="text-[11px] text-slate-500">
              Role menentukan akses di sistem tugas akhir.
            </p>
          </div>
          <div className="space-y-1">
            <label className="block font-medium text-slate-600">
              Program Studi
            </label>
            <select className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white">
              <option>Farmasi</option>
              <option>Teknik Informatika</option>
              <option>Sistem Informasi</option>
            </select>
          </div>
        </div>

        {/* Data dasar */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block font-medium text-slate-600">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
              placeholder="Nama sesuai ijazah"
              defaultValue={newUser.namaLengkap}
            />
          </div>
          <div className="space-y-1">
            <label className="block font-medium text-slate-600">Username</label>
            <input
              type="text"
              className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
              placeholder="tanpa spasi, contoh: alya.putri"
              defaultValue={newUser.username}
            />
          </div>
        </div>

        {/* NIM / NIDN + Email */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block font-medium text-slate-600">
              NIM / NIDN
            </label>
            <input
              type="text"
              className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
              placeholder="Isi NIM untuk mahasiswa, NIDN untuk dosen"
              defaultValue={request.nim}
            />
          </div>
          <div className="space-y-1">
            <label className="block font-medium text-slate-600">
              Email Kampus
            </label>
            <input
              type="email"
              className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
              placeholder="nama@kampus.ac.id"
              defaultValue={newUser.email}
            />
          </div>
        </div>

        {/* Password */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block font-medium text-slate-600">
              Password Awal
            </label>
            <input
              type="password"
              className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
              placeholder="Minimal 8 karakter"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-medium text-slate-600">
              Konfirmasi Password
            </label>
            <input
              type="password"
              className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
              placeholder="Ulangi password"
            />
          </div>
        </div>

        {/* Status Akun */}
        <div className="space-y-1">
          <label className="block font-medium text-slate-600">
            Status Akun
          </label>
          <select className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white">
            <option>Aktif</option>
            <option>Non-aktif</option>
          </select>
        </div>

        {/* Tombol */}
        <div className="flex justify-end gap-2 pt-2">
          <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-medium text-slate-600 hover:bg-slate-50">
            Reset Form
          </button>
          <button className="rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-medium text-white hover:bg-slate-800">
            Buat Akun (Mock)
          </button>
        </div>
      </div>
    </div>
  );
};
