import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { navLinks } from '../data/content';
import { useAppStore } from '../store/useStore';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const theme = useAppStore((state) => state.theme);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          RealEstatePro
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.path} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-sky-600' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/dashboard/add-property" className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700">
            Add Property
          </Link>
          <button onClick={toggleTheme} className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white">
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleTheme} className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white">
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          <button onClick={() => setOpen((prev) => !prev)} className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white">
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.path} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                {link.label}
              </NavLink>
            ))}
            <Link to="/dashboard/add-property" onClick={() => setOpen(false)} className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white text-center">
              Add Property
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
