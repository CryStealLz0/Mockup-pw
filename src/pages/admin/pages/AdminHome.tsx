// src/pages/admin/AdminHome.tsx
import React from 'react';
import type {
  QueueStats,
  UserStats,
  KuotaData,
  RegistrasiRow,
  JadwalRow,
} from './data/types';
import { QueueSummaryCard } from './features/QueueSummaryCard';
import { UserStatsCard } from './features/UserStatsCard';
import { KuotaPembimbingCard } from './features/KuotaPembimbingCard';
import { RegistrasiTableCard } from './features/RegistrasiTableCard';
import { JadwalTableCard } from './features/JadwalTableCard';

export default function AdminHome() {
  const queueStats: QueueStats = {
    registrasi: 5,
    sempro: 3,
    sidang: 2,
    dokumen: 11,
  };

  const userStats: UserStats = {
    mhsAktif: 1204,
    dosen: 68,
    koordinator: 3,
    admin: 4,
    penguji: 4,
  };

  const kuota: KuotaData = {
    percent: 63,
    nearLimitLecturers: 4,
    totalLecturers: 12,
    above50: 7,
    below50: 5,
    totalRemainingStudents: 38,
  };

  const registrasiRows: RegistrasiRow[] = [
    {
      nama: 'Alya Putri',
      nim: '221011400212',
      prodi: 'Farmasi',
      dokumen: 'Lengkap',
      dokumenStatus: 'ok',
      catatan: '—',
    },
    {
      nama: 'Bima Santoso',
      nim: '221011400198',
      prodi: 'Farmasi',
      dokumen: 'Kurang',
      dokumenStatus: 'kurang',
      catatan: 'Transkrip belum ada',
    },
  ];

  const jadwalRows: JadwalRow[] = [
    {
      tanggal: '12 Okt 2025',
      waktu: '09:00',
      agenda: 'Sempro',
      ruangan: 'R201',
      ketua: 'Dr. Budi',
      anggota: 'Dr. Rina',
      status: 'Terjadwal',
      statusVariant: 'primary',
    },
    {
      tanggal: '28 Okt 2025',
      waktu: '13:30',
      agenda: 'Sidang',
      ruangan: 'Aula 2',
      ketua: 'Dr. Sari',
      anggota: 'Dr. Tono',
      status: 'Draft',
      statusVariant: 'muted',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-slate-900">
          Dashboard Admin
        </h1>
        <p className="text-sm text-slate-500">
          Ringkasan antrian validasi, pengguna, dan jadwal sempro / sidang.
        </p>
      </div>

      {/* Kartu ringkasan atas */}
      <div className="grid gap-4 md:grid-cols-3">
        <QueueSummaryCard stats={queueStats} />
        <UserStatsCard stats={userStats} />
        <KuotaPembimbingCard kuota={kuota} />
      </div>

      {/* Bagian bawah */}
      <div className="grid gap-4 grid-cols-1">
        <RegistrasiTableCard rows={registrasiRows} />
        <JadwalTableCard rows={jadwalRows} />
      </div>
    </div>
  );
}
