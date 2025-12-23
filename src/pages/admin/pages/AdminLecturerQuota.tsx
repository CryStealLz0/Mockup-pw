// src/pages/admin/pages/AdminLecturerQuota.tsx
import type {
  LecturerRow,
  LecturerSummary,
  StudentBimbinganRow,
} from './data/lecturerQuotaTypes';
import { LecturerQuotaSummaryCards } from './features/LecturerQuotaSummaryCards';
import { LecturerQuotaFilterBar } from './features/LecturerQuotaFilterBar';
import { LecturerQuotaTable } from './features/LecturerQuotaTable';
import { LecturerDetailCard } from './features/LecturerDetailCard';
import { LecturerQuotaFormMock } from './features/LecturerQuotaFormMock';
import { GlobalQuotaSettingsMock } from './features/GlobalQuotaSettingsMock';
import { PembimbingMahasiswaTableMock } from './features/PembimbingMahasiswaTableMock';

const mockLecturers: LecturerRow[] = [
  {
    id: 1,
    nama: 'Dr. Budi Santoso',
    nidn: '0123456789',
    prodi: 'Farmasi',
    kuotaMaks: 12,
    terpakai: 9,
    sisa: 3,
    persen: 75,
    status: 'mendekati',
  },
  {
    id: 2,
    nama: 'Dr. Rina Wijaya',
    nidn: '9876543210',
    prodi: 'Farmasi',
    kuotaMaks: 10,
    terpakai: 4,
    sisa: 6,
    persen: 40,
    status: 'aman',
  },
  {
    id: 3,
    nama: 'Dr. Tono Prasetyo',
    nidn: '2211334455',
    prodi: 'Farmasi',
    kuotaMaks: 8,
    terpakai: 8,
    sisa: 0,
    persen: 100,
    status: 'penuh',
  },
];

const mockSummary: LecturerSummary = {
  totalDosen: 24,
  rataRataPemakaian: 63,
  diAtas50: 14,
  diBawah50: 10,
  totalSisaKapasitas: 82,
};

// const mockStudents: StudentBimbinganRow[] = [
//   {
//     nama: 'Alya Putri',
//     nim: '221011400212',
//     prodi: 'Farmasi',
//     topik: 'Evaluasi penggunaan antibiotik',
//     statusLabel: 'Aktif',
//     statusVariant: 'aktif',
//   },
//   {
//     nama: 'Bima Santoso',
//     nim: '221011400198',
//     prodi: 'Farmasi',
//     topik: 'Kajian drug related problems',
//     statusLabel: 'Draft Proposal',
//     statusVariant: 'draft',
//   },
// ];

export default function AdminLecturerQuota() {
  const selected = mockLecturers[0];

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-slate-900">
          Dosen &amp; Kuota Bimbingan
        </h1>
        <p className="text-sm text-slate-500">
          Kelola kuota pembimbing, distribusi mahasiswa, dan pantau dosen yang
          mendekati batas kuota.
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <LecturerQuotaSummaryCards summary={mockSummary} />

      {/* FILTER BAR */}
      <LecturerQuotaFilterBar />

      {/* MAIN GRID: TABLE + DETAIL + FORM + GLOBAL */}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <LecturerQuotaTable lecturers={mockLecturers} />

        <div className="space-y-4">
          <LecturerDetailCard lecturer={selected} />
          <LecturerQuotaFormMock />
          <GlobalQuotaSettingsMock />
        </div>
      </div>

      {/* MAHASISWA BIMBINGAN */}
      <PembimbingMahasiswaTableMock />
    </div>
  );
}
