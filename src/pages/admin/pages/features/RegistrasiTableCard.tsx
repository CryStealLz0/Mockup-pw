// src/pages/admin/features/RegistrasiTableCard.tsx
import React from 'react';
import type { RegistrasiRow } from '../data/types';

interface RegistrasiTableCardProps {
  rows: RegistrasiRow[];
}

export const RegistrasiTableCard: React.FC<RegistrasiTableCardProps> = ({
  rows,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-900">
          Validasi Registrasi
        </h2>
        <span className="text-xs text-slate-500">Antrian terbaru</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/60 text-left text-xs font-medium text-slate-500">
              <th className="px-5 py-3">Nama</th>
              <th className="px-3 py-3">NIM</th>
              <th className="px-3 py-3">Program Studi</th>
              <th className="px-3 py-3">Dokumen</th>
              <th className="px-3 py-3">Catatan</th>
              <th className="px-5 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.nim}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-5 py-3 text-slate-900">{row.nama}</td>
                <td className="px-3 py-3 text-slate-700">{row.nim}</td>
                <td className="px-3 py-3 text-slate-700">{row.prodi}</td>
                <td className="px-3 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      row.dokumenStatus === 'ok'
                        ? 'bg-slate-100 text-slate-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    {row.dokumen}
                  </span>
                </td>
                <td className="px-3 py-3 text-slate-500">{row.catatan}</td>
                <td className="px-5 py-3 text-center text-xs">
                  <button className="mr-2 text-emerald-600 hover:underline">
                    Setujui
                  </button>
                  <button className="text-rose-600 hover:underline">
                    Tolak
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
