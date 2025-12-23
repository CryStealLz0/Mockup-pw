const mockSummary = {
  pending: 5,
  revisi: 2,
  disetujui: 18,
};

export const RegistrationSummaryCards: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Pending
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-900">
          {mockSummary.pending}
        </p>
        <p className="mt-1 text-xs text-slate-500">Menunggu validasi admin.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Perlu Revisi
        </p>
        <p className="mt-2 text-3xl font-semibold text-amber-600">
          {mockSummary.revisi}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Dokumen tidak lengkap / salah.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Disetujui
        </p>
        <p className="mt-2 text-3xl font-semibold text-emerald-700">
          {mockSummary.disetujui}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Siap dibuatkan akun pengguna.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-900 px-5 py-4 shadow-sm text-white">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-200">
          Aksi Cepat
        </p>
        <div className="mt-3 flex flex-col gap-2 text-xs">
          <button className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white hover:bg-white/20">
            Buat Akun Manual (Mock)
          </button>
          <button className="rounded-full bg-white/0 border border-white/20 px-4 py-1.5 text-xs font-medium text-slate-100 hover:bg-white/10">
            Export Data Registrasi (Mock)
          </button>
          <p className="text-[11px] text-slate-300 mt-1">
            Tombol di atas hanya tampilan, belum ada fungsi.
          </p>
        </div>
      </div>
    </div>
  );
};
