// src/pages/admin/types.ts

export interface QueueStats {
  registrasi: number;
  sempro: number;
  sidang: number;
  dokumen: number;
}

export interface UserStats {
  mhsAktif: number;
  dosen: number;
  koordinator: number;
  admin: number;
  penguji: number;
}

export interface KuotaData {
  percent: number;
  nearLimitLecturers: number;
  totalLecturers: number;
  above50: number;
  below50: number;
  totalRemainingStudents: number;
}

export type DokumenStatus = 'ok' | 'kurang';

export interface RegistrasiRow {
  nama: string;
  nim: string;
  prodi: string;
  dokumen: string;
  dokumenStatus: DokumenStatus;
  catatan: string;
}

export type StatusVariant = 'primary' | 'muted';

export interface JadwalRow {
  tanggal: string;
  waktu: string;
  agenda: string;
  ruangan: string;
  ketua: string;
  anggota: string;
  status: string;
  statusVariant: StatusVariant;
}
