// src/pages/admin/features/UserStatsCard.tsx
import React from 'react';
import type { UserStats } from '../data/types';

interface UserStatsCardProps {
  stats: UserStats;
}

export const UserStatsCard: React.FC<UserStatsCardProps> = ({ stats }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <h2 className="text-sm font-medium text-slate-500 mb-3">Pengguna</h2>
      <dl className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-slate-500">Mahasiswa Aktif</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.mhsAktif.toLocaleString('id-ID')}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Pembimbing</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.dosen}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Koordinator</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.koordinator}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Admin</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.admin}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Penguji</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {stats.penguji}
          </dd>
        </div>
      </dl>
    </div>
  );
};
