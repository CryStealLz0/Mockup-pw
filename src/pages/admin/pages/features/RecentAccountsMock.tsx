export const RecentAccountsMock: React.FC = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-slate-900">
          Akun Terbaru Dibuat (Mock)
        </h2>
        <span className="text-[11px] text-slate-500">Contoh log singkat.</span>
      </div>
      <ul className="space-y-2 text-xs">
        <li className="flex items-center justify-between">
          <div>
            <p className="font-medium text-slate-800">alya.putri • Mahasiswa</p>
            <p className="text-slate-500">
              Dibuat oleh admin pada 12 Okt 2025, 10:15
            </p>
          </div>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-white">
            Contoh
          </span>
        </li>
        <li className="flex items-center justify-between">
          <div>
            <p className="font-medium text-slate-800">budi.santoso • Dosen</p>
            <p className="text-slate-500">
              Dibuat oleh admin pada 11 Okt 2025, 09:40
            </p>
          </div>
          <span className="rounded-full bg-slate-200 px-3 py-1 text-[11px] font-medium text-slate-700">
            Dummy
          </span>
        </li>
      </ul>
    </div>
  );
};
