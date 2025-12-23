// src/pages/admin/lecturerQuotaTypes.ts

export type LecturerStatus = 'aman' | 'mendekati' | 'penuh';

export interface LecturerRow {
  id: number;
  nama: string;
  nidn: string;
  prodi: string;
  kuotaMaks: number;
  terpakai: number;
  sisa: number;
  persen: number;
  status: LecturerStatus;
}

export interface LecturerSummary {
  totalDosen: number;
  rataRataPemakaian: number;
  diAtas50: number;
  diBawah50: number;
  totalSisaKapasitas: number;
}

export interface StudentBimbinganRow {
  nama: string;
  nim: string;
  prodi: string;
  topik: string;
  statusLabel: string;
  statusVariant: 'aktif' | 'draft';
}
