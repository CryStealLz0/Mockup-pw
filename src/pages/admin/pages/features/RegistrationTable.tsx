import type { RegistrationRequest } from '../data/registrationTypes';

export const RegistrationTable: React.FC<{ rows: RegistrationRequest[] }> = ({
  rows,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-900">
          Permohonan Registrasi Mahasiswa
        </h2>
        <span className="text-xs text-slate-500">
          Data dummy • hanya tampilan
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/60 text-left text-xs font-medium text-slate-500">
              <th className="px-5 py-3">Nama</th>
              <th className="px-3 py-3">NIM</th>
              <th className="px-3 py-3">Prodi</th>
              <th className="px-3 py-3">Gelombang</th>
              <th className="px-3 py-3">Tgl Daftar</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-5 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60"
              >
                <td className="px-5 py-3 text-slate-900">{row.nama}</td>
                <td className="px-3 py-3 text-slate-700">{row.nim}</td>
                <td className="px-3 py-3 text-slate-700">{row.prodi}</td>
                <td className="px-3 py-3 text-slate-700">{row.gelombang}</td>
                <td className="px-3 py-3 text-slate-700">
                  {row.tanggalDaftar}
                </td>
                <td className="px-3 py-3">
                  <span
                    className={
                      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ' +
                      (row.status === 'pending'
                        ? 'bg-slate-100 text-slate-700'
                        : row.status === 'revisi'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-emerald-50 text-emerald-700')
                    }
                  >
                    {row.status === 'pending'
                      ? 'Pending'
                      : row.status === 'revisi'
                      ? 'Perlu Revisi'
                      : 'Disetujui'}
                  </span>
                </td>
                <td className="px-5 py-3 text-center text-xs">
                  <button className="mr-2 text-emerald-600 hover:underline">
                    Setujui
                  </button>
                  <button className="mr-2 text-amber-600 hover:underline">
                    Minta Revisi
                  </button>
                  <button className="text-slate-600 hover:underline">
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
