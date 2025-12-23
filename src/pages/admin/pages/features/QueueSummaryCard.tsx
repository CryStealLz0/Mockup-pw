// src/pages/admin/features/QueueSummaryCard.tsx
import React from 'react';
import type { QueueStats } from '../data/types';

interface QueueSummaryCardProps {
  stats: QueueStats;
}

export const QueueSummaryCard: React.FC<QueueSummaryCardProps> = ({
  stats,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <h2 className="text-sm font-medium text-slate-500 mb-3">
        Antrian Validasi
      </h2>
      <dl className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-slate-500">Registrasi Pending</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.registrasi}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Sempro Pending</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.sempro}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Sidang Pending</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.sidang}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Dokumen Pending</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.dokumen}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Pembimbing Pending</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.dokumen}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Pembimbing Penguji</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.dokumen}
          </dd>
        </div>
      </dl>
    </div>
  );
};
