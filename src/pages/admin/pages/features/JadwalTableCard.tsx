// src/pages/admin/features/JadwalTableCard.tsx
import React from 'react';
import type { JadwalRow } from '../data/types';

interface JadwalTableCardProps {
  rows: JadwalRow[];
}

export const JadwalTableCard: React.FC<JadwalTableCardProps> = ({ rows }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-900">
          Jadwal (Sempro &amp; Sidang)
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/60 text-left text-xs font-medium text-slate-500">
              <th className="px-5 py-3">Tanggal</th>
              <th className="px-3 py-3">Waktu</th>
              <th className="px-3 py-3">Agenda</th>
              <th className="px-3 py-3">Ruangan</th>
              <th className="px-3 py-3">Ketua</th>
              <th className="px-3 py-3">Anggota</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-slate-100 last:border-0">
                <td className="px-5 py-3 text-slate-900">{row.tanggal}</td>
                <td className="px-3 py-3 text-slate-700">{row.waktu}</td>
                <td className="px-3 py-3 text-slate-700">{row.agenda}</td>
                <td className="px-3 py-3 text-slate-700">{row.ruangan}</td>
                <td className="px-3 py-3 text-slate-700">{row.ketua}</td>
                <td className="px-3 py-3 text-slate-700">{row.anggota}</td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      row.statusVariant === 'primary'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
