import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { MenuItem } from '../data/menus';

export default function Sidebar({ menu }: { menu: MenuItem[] }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        ${collapsed ? 'w-14' : 'w-60'}
        h-screen
        bg-gradient-to-b from-[#0c7cc4] to-[#2bb5be]
        text-white shadow-lg transition-all duration-300
        p-3 sticky top-0 z-20
  `}
    >
      {/* HEADER + TOGGLE BUTTON */}
      <div
        className={`
    flex items-center 
    ${collapsed ? 'justify-center' : 'justify-between'}
    p-4
  `}
      >
        {!collapsed && (
          <div className="space-y-2">
            <div className="w-full  p-5 bg-white overflow-hidden rounded-full border border-white/20">
              <img
                src="./ubp-k.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-[10px] uppercase tracking-widest text-center text-white/70">
              Menu
            </div>
          </div>
        )}

        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
      absolute right-[-0.5rem] top-10 
      p-2 
      rounded-full 
      bg-white/10 
      text-white 
      backdrop-blur-sm
      border border-white/20
      hover:bg-white/20 
      transition-all duration-200
      shadow-md
      text-center
    "
        >
          {collapsed ? '›' : '‹'}
        </button>
      </div>

      {/* NAV MENU */}
      <nav className={`space-y-1 ${collapsed ? ' px-0 pt-10' : ' pt-0'}`}>
        {menu.map((m) => (
          <NavLink
            key={m.to}
            to={m.to}
            end
            className={({ isActive }) =>
              `
              flex items-center gap-1 rounded-md  text-sm font-normal transition
              hover:bg-white/15 hover:text-white
              ${
                isActive
                  ? 'bg-white/25 text-white shadow-inner'
                  : 'text-white/90'
              }
            `
            }
          >
            <div
              className="
                w-8 h-8 px-3 grid place-items-center rounded-md 
                bg-white/20 text-white font-bold text-sm
              "
            >
              {m.title.charAt(0).toUpperCase()}
            </div>

            {!collapsed && <span>{m.title}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
