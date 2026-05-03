import { Link } from 'react-router-dom';
import { navLinks } from '../data/content';

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">RealEstatePro</h3>
        <p className="mt-4 max-w-sm text-sm text-slate-600 dark:text-slate-400">
          A marketplace designed to connect buyers, renters, and agents in one modern dashboard experience.
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">Quick Links</p>
        <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.path} className="block hover:text-slate-900 dark:hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">Social</p>
        <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
