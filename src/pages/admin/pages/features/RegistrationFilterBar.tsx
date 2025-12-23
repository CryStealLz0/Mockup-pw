export const RegistrationFilterBar: React.FC = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-slate-500">Cari</label>
          <input
            type="text"
            placeholder="Nama / NIM"
            className="h-8 rounded-full border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-slate-500">Prodi</label>
          <select className="h-8 rounded-full border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white">
            <option>Semua</option>
            <option>Farmasi</option>
            <option>Teknik Informatika</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-slate-500">Status</label>
          <select className="h-8 rounded-full border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white">
            <option>Semua</option>
            <option>Pending</option>
            <option>Perlu Revisi</option>
            <option>Disetujui</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <button className="h-8 rounded-full border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 hover:bg-slate-50">
          Reset Filter
        </button>
        <button className="h-8 rounded-full bg-slate-900 px-4 text-xs font-medium text-white hover:bg-slate-800">
          Terapkan (Mock)
        </button>
      </div>
    </div>
  );
};
