// src/pages/admin/features/GlobalQuotaSettingsMock.tsx
import React from 'react';

export const GlobalQuotaSettingsMock: React.FC = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-900 mb-2">
        Pengaturan Kuota Global (Mock)
      </h2>
      <p className="text-xs text-slate-600 mb-3">
        Pengaturan ini hanya tampilan. Di implementasi nyata, bisa digunakan
        untuk menentukan batas kuota default per dosen.
      </p>
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="space-y-1">
          <label className="block font-medium text-slate-600">
            Kuota Default per Dosen
          </label>
          <input
            type="number"
            className="h-8 w-full rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none"
            placeholder="contoh: 10"
          />
        </div>
        <div className="space-y-1">
          <label className="block font-medium text-slate-600">
            Batas Peringatan (%)
          </label>
          <input
            type="number"
            className="h-8 w-full rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none"
            placeholder="contoh: 80"
          />
        </div>
      </div>
      <div className="flex justify-center pt-5 w-full">
        <button className="rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-medium text-white hover:bg-slate-800">
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};
