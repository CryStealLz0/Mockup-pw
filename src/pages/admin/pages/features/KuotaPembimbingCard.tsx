// src/pages/admin/features/KuotaPembimbingCard.tsx
import React from 'react';
import type { KuotaData } from '../data/types';

interface KuotaPembimbingCardProps {
  kuota: KuotaData;
}

export const KuotaPembimbingCard: React.FC<KuotaPembimbingCardProps> = ({
  kuota,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm flex flex-col justify-between">
      <h2 className="text-sm font-medium text-slate-500 mb-3">
        Kuota Pembimbing
      </h2>

      {/* PROGRESS */}
      <div className="space-y-2 mb-4">
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-slate-900"
            style={{ width: `${kuota.percent}%` }}
          />
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Rata-rata pemakaian kuota:{' '}
          <span className="font-semibold">{kuota.percent}%</span> •{' '}
          <span className="font-semibold">
            {kuota.nearLimitLecturers} dosen
          </span>{' '}
          mendekati kuota.
        </p>
      </div>

      {/* EXTRA STATISTICS SECTION */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        {/* Total Pembimbing */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-slate-500">Total Pembimbing</p>
          <p className="text-lg font-semibold text-slate-800">
            {kuota.totalLecturers}
          </p>
        </div>

        {/* Kuota > 50% */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-slate-500">Kuota lebih dari 50%</p>
          <p className="text-lg font-semibold text-slate-800">
            {kuota.above50}
          </p>
        </div>

        {/* Kuota < 50% */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-slate-500">Kuota kurang dari 50%</p>
          <p className="text-lg font-semibold text-slate-800">
            {kuota.below50}
          </p>
        </div>

        {/* Total Sisa Kapasitas */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-slate-500">Sisa Kapasitas Total</p>
          <p className="text-lg font-semibold text-slate-800">
            {kuota.totalRemainingStudents}
          </p>
        </div>
      </div>
    </div>
  );
};
