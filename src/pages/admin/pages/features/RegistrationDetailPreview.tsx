import type { RegistrationRequest } from '../data/registrationTypes';

export const RegistrationDetailPreview: React.FC<{
  request: RegistrationRequest;
}> = ({ request }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-900">
          Detail Registrasi (Preview Mock)
        </h2>
        <span className="text-[11px] text-slate-500">
          Contoh tampilan detail.
        </span>
      </div>
      <div className="space-y-2 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-slate-500">Nama Mahasiswa</p>
            <p className="text-sm font-semibold text-slate-900">
              {request.nama}
            </p>
          </div>
          <div>
            <p className="text-slate-500">NIM</p>
            <p className="text-sm font-semibold text-slate-900">
              {request.nim}
            </p>
          </div>
          <div>
            <p className="text-slate-500">Program Studi</p>
            <p className="text-sm font-semibold text-slate-900">
              {request.prodi}
            </p>
          </div>
          <div>
            <p className="text-slate-500">Gelombang</p>
            <p className="text-sm font-semibold text-slate-900">
              {request.gelombang}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-slate-500">Tanggal Registrasi</p>
            <p className="text-sm font-semibold text-slate-900">
              {request.tanggalDaftar}
            </p>
          </div>
          <div>
            <p className="text-slate-500">Status</p>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700">
              Pending
            </span>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-slate-500 mb-1">Catatan Admin</p>
          <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            Contoh catatan: pastikan transkrip, KRS, dan bukti pembayaran sudah
            lengkap sebelum menyetujui registrasi.
          </p>
        </div>
      </div>
    </div>
  );
};
