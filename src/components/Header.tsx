import { useAuth } from '../auth/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0  z-10 bg-white/80 backdrop-blur border-b border-zinc-200 w-full">
      <div className=" px-4 py-3 flex items-center justify-between">
        {/* Logo + App Name */}
        <div className="flex items-center gap-3">
          <img src="/ubp_2.png" className="h-10" alt="Logo" />
          <h1 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-[#0c7cc4] to-[#2bb5be] bg-clip-text text-transparent">
            PharmSITA
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* User Info */}
          {user && (
            <div className="flex items-center gap-5">
              <div className="text-right leading-tight">
                <div className="font-semibold">{user.role}</div>
                <div className="text-xs text-zinc-500">{user.email}</div>
              </div>

              {/* Avatar (Inisial user) */}
              <div
                aria-hidden
                className="size-9 grid place-items-center rounded-full bg-zinc-900 text-white text-sm font-bold"
              >
                {user.username?.slice(0, 2).toUpperCase() || 'US'}
              </div>

              {/* Logout Button */}
              <button
                onClick={logout}
                className="px-3 py-1.5 text-sm rounded-md bg-gradient-to-r from-[#0c7cc4] to-[#2bb5be] text-white hover:bg-primary/90 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
