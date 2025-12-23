// src/pages/admin/features/LecturerDetailCard.tsx
import React from 'react';
import type { LecturerRow } from '../data/lecturerQuotaTypes';

interface LecturerDetailCardProps {
  lecturer: LecturerRow;
}

export const LecturerDetailCard: React.FC<LecturerDetailCardProps> = ({
  lecturer,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
        Preview Detail Dosen
      </p>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {lecturer.nama}
          </p>
          <p className="text-xs text-slate-500">
            NIDN {lecturer.nidn} • {lecturer.prodi}
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
          contoh dipilih
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-xs text-slate-600">
          <span>Penggunaan Kuota</span>
          <span className="font-semibold">{lecturer.persen}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-slate-900"
            style={{ width: `${lecturer.persen}%` }}
          />
        </div>
        <div className="mt-1 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
          <div className="rounded-xl bg-slate-50 px-3 py-2">
            <p className="text-slate-500">Kuota Maks</p>
            <p className="text-sm font-semibold text-slate-900">
              {lecturer.kuotaMaks}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 px-3 py-2">
            <p className="text-slate-500">Terpakai</p>
            <p className="text-sm font-semibold text-slate-900">
              {lecturer.terpakai}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 px-3 py-2">
            <p className="text-slate-500">Sisa</p>
            <p className="text-sm font-semibold text-slate-900">
              {lecturer.sisa}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
