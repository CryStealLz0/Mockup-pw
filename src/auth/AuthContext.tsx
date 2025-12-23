import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type Role = 'admin' | 'pembimbing' | 'mahasiswa';

export type User = {
  username: string;
  role: Role;
  email: string;
} | null;

type AuthCtx = {
  user: User;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthCtx | undefined>(undefined);

/**
 * Dummy “database”
 * username -> { role, email }
 */
const USERS: Record<string, { role: Role; email: string }> = {
  admin: {
    role: 'admin',
    email: 'admin@example.com',
  },
  pembimbing: {
    role: 'pembimbing',
    email: 'pembimbing@example.com',
  },
  mahasiswa: {
    role: 'mahasiswa',
    email: 'mahasiswa@example.com',
  },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(null);
  const navigate = useNavigate();

  const login = (username: string) => {
    const uname = username.trim().toLowerCase();
    const found = USERS[uname];

    if (!found) {
      alert('User tidak dikenali. Coba: admin, pembimbing, atau mahasiswa.');
      return;
    }

    const nextUser = {
      username: uname,
      role: found.role,
      email: found.email,
    } as NonNullable<User>;

    setUser(nextUser);
    navigate(`/${found.role}`, { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate('/login', { replace: true });
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
