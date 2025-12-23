// src/pages/admin/features/LecturerQuotaFormMock.tsx
import React from 'react';

export const LecturerQuotaFormMock: React.FC = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-900">
          Atur Kuota Bimbingan (Mock)
        </h2>
        <span className="text-[11px] text-slate-500">
          Hanya tampilan, belum aktif.
        </span>
      </div>

      <div className="space-y-3 text-xs">
        {/* === Kuota & Prioritas === */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block font-medium text-slate-600">
              Kuota Maksimal
            </label>
            <input
              type="number"
              className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
              placeholder="contoh: 12"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-medium text-slate-600">
              Prioritas Bimbingan
            </label>
            <select className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white">
              <option>Normal</option>
              <option>Diutamakan</option>
              <option>Non-aktif</option>
            </select>
          </div>
        </div>

        {/* === Catatan === */}
        <div className="space-y-1">
          <label className="block font-medium text-slate-600">
            Catatan Khusus (Opsional)
          </label>
          <textarea
            rows={3}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
            placeholder="Contoh: hanya menerima topik farmasi klinik."
          />
        </div>

        {/* === Aksi === */}
        <div className="flex justify-end gap-2 pt-2">
          <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-medium text-slate-600 hover:bg-slate-50">
            Batal
          </button>
          <button className="rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-medium text-white hover:bg-slate-800">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
