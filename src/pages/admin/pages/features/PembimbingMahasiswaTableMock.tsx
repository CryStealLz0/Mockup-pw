import React from 'react';

export type PembimbingKe = 1 | 2;

export interface PembimbingMahasiswaRow {
  id: number;
  namaDosen: string;
  namaMahasiswa: string;
  nim: string;
  prodi: string;
  topik: string;
  pembimbingKe: PembimbingKe;
  status: 'aktif' | 'draft' | 'selesai';
}

const mockPembimbingMahasiswa: PembimbingMahasiswaRow[] = [
  {
    id: 1,
    namaDosen: 'Dr. Budi Santoso',
    namaMahasiswa: 'Alya Putri',
    nim: '221011400212',
    prodi: 'Farmasi',
    topik: 'Evaluasi penggunaan antibiotik di IGD',
    pembimbingKe: 1,
    status: 'aktif',
  },
  {
    id: 2,
    namaDosen: 'Dr. Budi Santoso',
    namaMahasiswa: 'Bima Santoso',
    nim: '221011400198',
    prodi: 'Farmasi',
    topik: 'Kajian drug related problems pada pasien geriatrik',
    pembimbingKe: 2,
    status: 'draft',
  },
  {
    id: 3,
    namaDosen: 'Dr. Rina Wijaya',
    namaMahasiswa: 'Citra Lestari',
    nim: '221011400145',
    prodi: 'Farmasi',
    topik: 'Tingkat kepatuhan penggunaan obat antihipertensi',
    pembimbingKe: 1,
    status: 'selesai',
  },
];

export const PembimbingMahasiswaTableMock: React.FC = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* HEADER + KONTROL SEARCH & SORT */}
      <div className="flex flex-col gap-3 px-5 py-4 border-b border-slate-100 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Relasi Pembimbing &amp; Mahasiswa
          </h2>
          <p className="text-xs text-slate-500">
            Daftar pembimbing 1 &amp; 2, hanya tampilan (mock UI).
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          {/* Search */}
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-medium text-slate-500">
              Cari
            </label>
            <input
              type="text"
              placeholder="Nama dosen / mahasiswa"
              className="h-8 rounded-full border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
            />
          </div>

          {/* Filter pembimbing ke- */}
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-medium text-slate-500">
              Pembimbing
            </label>
            <select className="h-8 rounded-full border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white">
              <option>Semua</option>
              <option>Pembimbing 1</option>
              <option>Pembimbing 2</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-medium text-slate-500">
              Urutkan
            </label>
            <select className="h-8 rounded-full border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none focus:border-slate-400 focus:bg-white">
              <option>Nama Dosen (A-Z)</option>
              <option>Nama Mahasiswa (A-Z)</option>
              <option>Pembimbing Ke</option>
              <option>Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* TABEL */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/60 text-left text-xs font-medium text-slate-500">
              <th className="px-5 py-3">Dosen</th>
              <th className="px-3 py-3">Mahasiswa</th>
              <th className="px-3 py-3">Sebagai</th>
              <th className="px-3 py-3">Prodi</th>
              <th className="px-3 py-3">Topik</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-5 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mockPembimbingMahasiswa.map((row) => (
              <tr
                key={row.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60"
              >
                {/* Dosen */}
                <td className="px-5 py-3">
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-medium">
                      {row.namaDosen}
                    </span>
                  </div>
                </td>

                {/* Mahasiswa */}
                <td className="px-3 py-3">
                  <div className="flex flex-col">
                    <span className="text-slate-900">{row.namaMahasiswa}</span>
                    <span className="text-xs text-slate-500">
                      NIM {row.nim}
                    </span>
                  </div>
                </td>

                {/* Pembimbing ke- */}
                <td className="px-3 py-3 text-slate-700">
                  {row.pembimbingKe === 1 ? 'Pembimbing 1' : 'Pembimbing 2'}
                </td>

                {/* Prodi */}
                <td className="px-3 py-3 text-slate-700">{row.prodi}</td>

                {/* Topik */}
                <td className="px-3 py-3 text-slate-700 max-w-xs">
                  <span className="line-clamp-2">{row.topik}</span>
                </td>

                {/* Status */}
                <td className="px-3 py-3">
                  <span
                    className={
                      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ' +
                      (row.status === 'aktif'
                        ? 'bg-emerald-50 text-emerald-700'
                        : row.status === 'draft'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-slate-100 text-slate-700')
                    }
                  >
                    {row.status === 'aktif'
                      ? 'Aktif'
                      : row.status === 'draft'
                      ? 'Draft Proposal'
                      : 'Selesai'}
                  </span>
                </td>

                {/* Aksi */}
                <td className="px-5 py-3 text-center text-xs">
                  <button className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50">
                    Lihat Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
