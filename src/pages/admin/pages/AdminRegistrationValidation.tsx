import type {
  RegistrationRequest,
  NewUserMock,
} from './data/registrationTypes';
import { RegistrationSummaryCards } from './features/RegistrationSummaryCards';
import { RegistrationFilterBar } from './features/RegistrationFilterBar';
import { RegistrationTable } from './features/RegistrationTable';
import { RegistrationDetailPreview } from './features/RegistrationDetailPreview';
import { UserAccountFormMock } from './features/UserAccountFormMock';
import { RecentAccountsMock } from './features/RecentAccountsMock';

// ⬇️ INI ISI YANG TADI DI registrationMocks.ts, SEKARANG DITARUH DI SINI

const mockRequests: RegistrationRequest[] = [
  {
    id: 1,
    nama: 'Alya Putri',
    nim: '221011400212',
    prodi: 'Farmasi',
    gelombang: 'Gelombang 1',
    tanggalDaftar: '12 Okt 2025',
    status: 'pending',
  },
  {
    id: 2,
    nama: 'Bima Santoso',
    nim: '221011400198',
    prodi: 'Farmasi',
    gelombang: 'Gelombang 1',
    tanggalDaftar: '13 Okt 2025',
    status: 'revisi',
  },
  {
    id: 3,
    nama: 'Citra Lestari',
    nim: '221011400145',
    prodi: 'Farmasi',
    gelombang: 'Gelombang 2',
    tanggalDaftar: '15 Okt 2025',
    status: 'disetujui',
  },
];

const mockNewUser: NewUserMock = {
  namaLengkap: 'Contoh Nama Pengguna',
  username: 'contoh.user',
  email: 'contoh.user@kampus.ac.id',
  role: 'mahasiswa',
  prodi: 'Farmasi',
};

export default function AdminRegistrationValidation() {
  const selectedRequest = mockRequests[0];

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-slate-900">
          Validasi Registrasi &amp; Pembuatan Akun
        </h1>
        <p className="text-sm text-slate-500">
          Kelola permohonan registrasi mahasiswa dan pembuatan akun pengguna
          (mahasiswa, dosen, koordinator, admin). Halaman ini masih mockup UI.
        </p>
      </div>

      {/* RINGKASAN ATAS */}
      <RegistrationSummaryCards />

      {/* MAIN GRID: VALIDASI & FORM AKUN */}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.6fr)]">
        {/* KOLOM KIRI: VALIDASI REGISTRASI */}
        <div className="space-y-4">
          <RegistrationFilterBar />
          <RegistrationTable rows={mockRequests} />
        </div>

        {/* KOLOM KANAN: DETAIL & PEMBUATAN AKUN */}
        <div className="space-y-4">
          <RegistrationDetailPreview request={selectedRequest} />
          <UserAccountFormMock
            request={selectedRequest}
            newUser={mockNewUser}
          />
          <RecentAccountsMock />
        </div>
      </div>
    </div>
  );
}
