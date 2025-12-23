// src/pages/admin/features/LecturerQuotaSummaryCards.tsx
import React from 'react';
import type { LecturerSummary } from '../data/lecturerQuotaTypes';

interface LecturerQuotaSummaryCardsProps {
  summary: LecturerSummary;
}

export const LecturerQuotaSummaryCards: React.FC<
  LecturerQuotaSummaryCardsProps
> = ({ summary }) => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Total Pembimbing
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-900">
          {summary.totalDosen}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Termasuk dosen tetap &amp; luar biasa.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Rata-rata Pemakaian Kuota
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-900">
          {summary.rataRataPemakaian}%
        </p>
        <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-slate-900"
            style={{ width: `${summary.rataRataPemakaian}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Dosen &gt; 50% Kuota
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-900">
          {summary.diAtas50}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Perlu dipantau agar tidak overload.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Total Sisa Kapasitas
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-900">
          {summary.totalSisaKapasitas}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Mahasiswa yang masih bisa ditampung seluruh dosen.
        </p>
      </div>
    </div>
  );
};
