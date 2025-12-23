// src/pages/admin/features/LecturerQuotaTable.tsx
import React from 'react';
import type { LecturerRow } from '../data/lecturerQuotaTypes';

interface LecturerQuotaTableProps {
  lecturers: LecturerRow[];
}

export const LecturerQuotaTable: React.FC<LecturerQuotaTableProps> = ({
  lecturers,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-900">
          Daftar Dosen &amp; Kuota Bimbingan
        </h2>
        <span className="text-xs text-slate-500">Mock data • UI only</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/60 text-left text-xs font-medium text-slate-500">
              <th className="px-5 py-3">Dosen</th>
              <th className="px-3 py-3">Prodi</th>
              <th className="px-3 py-3 text-right">Kuota Maks</th>
              <th className="px-3 py-3 text-right">Terpakai</th>
              <th className="px-3 py-3 text-right">Sisa</th>
              <th className="px-3 py-3 text-right">% Pakai</th>
              <th className="px-3 py-3 text-center">Status</th>
              <th className="px-5 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {lecturers.map((lec) => (
              <tr
                key={lec.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60"
              >
                <td className="px-5 py-3">
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-medium">
                      {lec.nama}
                    </span>
                    <span className="text-xs text-slate-500">
                      NIDN {lec.nidn}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3 text-slate-700">{lec.prodi}</td>
                <td className="px-3 py-3 text-right text-slate-700">
                  {lec.kuotaMaks}
                </td>
                <td className="px-3 py-3 text-right text-slate-700">
                  {lec.terpakai}
                </td>
                <td className="px-3 py-3 text-right text-slate-700">
                  {lec.sisa}
                </td>
                <td className="px-3 py-3 text-right text-slate-700">
                  {lec.persen}%
                </td>
                <td className="px-3 py-3 text-center">
                  <span
                    className={
                      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ' +
                      (lec.status === 'aman'
                        ? 'bg-emerald-50 text-emerald-700'
                        : lec.status === 'mendekati'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-rose-50 text-rose-700')
                    }
                  >
                    {lec.status === 'aman'
                      ? 'Aman'
                      : lec.status === 'mendekati'
                      ? 'Mendekati'
                      : 'Penuh'}
                  </span>
                </td>
                <td className="px-5 py-3 text-center text-xs">
                  <button className="mr-2 rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50">
                    Atur Kuota
                  </button>
                  <button className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-white hover:bg-slate-800">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
