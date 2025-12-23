import { useState } from 'react';
import type { FormEvent } from 'react';
import { useAuth } from '../auth/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username);
  };

  return (
    <div className="min-h-dvh bg-gradient-to-br from-[#e7f5fc] via-white to-[#e5faf8] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-center">
        {/* Panel kiri: branding */}
        <div className="hidden md:block rounded-2xl bg-gradient-to-br from-[#0c7cc4] to-[#2bb5be] text-white p-8 shadow-lg relative overflow-hidden">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-lg font-bold">
                PS
              </div>
              <div>
                <p className="text-sm text-white/80">Sistem Manajemen TA</p>
                <h1 className="text-2xl font-bold tracking-tight">
                  PharmSITA Portal
                </h1>
              </div>
            </div>

            <p className="text-white/90 text-sm leading-relaxed mt-4">
              Halaman ini hanya{' '}
              <span className="font-semibold">mockup login</span> untuk simulasi
              peran:
              <br />
              <span className="font-semibold">admin</span>,{' '}
              <span className="font-semibold">pembimbing</span>,{' '}
              <span className="font-semibold">mahasiswa</span>.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl bg-white/10 px-3 py-3">
                <p className="font-semibold text-xs">Admin TA</p>
                <p className="text-white/80 mt-1">Monitoring & approval</p>
              </div>
              <div className="rounded-xl bg-white/10 px-3 py-3">
                <p className="font-semibold text-xs">Dosen</p>
                <p className="text-white/80 mt-1">Bimbingan & progres</p>
              </div>
              <div className="rounded-xl bg-white/10 px-3 py-3">
                <p className="font-semibold text-xs">Mahasiswa</p>
                <p className="text-white/80 mt-1">Upload & revisi TA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel kanan: form login */}
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-[#0c7cc4]/20 px-6 py-7 space-y-6"
        >
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-[#0c7cc4]">
              Login Mockup
            </h2>

            <p className="text-sm text-zinc-500">
              Masukkan <span className="font-semibold">username</span> berikut:
            </p>

            <ul className="text-xs text-zinc-500 flex flex-wrap gap-2 mt-1">
              <li className="px-2 py-1 rounded-full bg-[#0c7cc4]/10 text-[#0c7cc4]">
                admin
              </li>
              <li className="px-2 py-1 rounded-full bg-[#0c7cc4]/10 text-[#0c7cc4]">
                pembimbing
              </li>
              <li className="px-2 py-1 rounded-full bg-[#0c7cc4]/10 text-[#0c7cc4]">
                mahasiswa
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            {/* Username */}
            <label className="block text-sm font-medium text-zinc-700">
              Username
              <input
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none
                           focus:ring-2 focus:ring-[#0c7cc4] focus:border-[#0c7cc4] transition bg-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                autoFocus
              />
            </label>

            {/* Password dummy */}
            <label className="block text-sm font-medium text-zinc-700">
              Password
              <input
                type="password"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none
                           focus:ring-2 focus:ring-[#0c7cc4] focus:border-[#0c7cc4] transition bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <p className="mt-1 text-[11px] text-zinc-400">
                Password tidak digunakan, sistem hanya mengecek username.
              </p>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-white text-sm font-medium transition shadow-md
                       bg-gradient-to-r from-[#0c7cc4] to-[#2bb5be] hover:opacity-90 active:opacity-80"
          >
            Masuk ke Dashboard
          </button>

          <p className="text-[11px] text-zinc-400 text-center">
            Login mockup — tidak terhubung ke autentikasi asli.
          </p>
        </form>
      </div>
    </div>
  );
}
