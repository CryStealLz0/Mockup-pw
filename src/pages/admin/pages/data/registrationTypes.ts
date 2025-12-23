// src/pages/admin/registration/registrationTypes.ts

export type RegistrationStatus = 'pending' | 'revisi' | 'disetujui';

export interface RegistrationRequest {
  id: number;
  nama: string;
  nim: string;
  prodi: string;
  gelombang: string;
  tanggalDaftar: string;
  status: RegistrationStatus;
}

export type UserRole = 'mahasiswa' | 'dosen' | 'koordinator' | 'admin';

export interface NewUserMock {
  namaLengkap: string;
  username: string;
  email: string;
  role: UserRole;
  prodi: string;
}
