import { Link, NavLink, Outlet } from 'react-router-dom';
import { FiChevronDown, FiSettings, FiHome, FiHeart, FiMessageCircle, FiUser, FiUsers, FiFileText, FiList, FiPlusCircle } from 'react-icons/fi';
import { useAppStore } from '../store/useStore';

const DashboardLayout = () => {
  const isSidebarOpen = useAppStore((state) => state.isSidebarOpen);
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  const closeSidebar = useAppStore((state) => state.closeSidebar);
  const isAdmin = useAppStore((state) => state.isAdmin);

  const menu = [
    { label: 'Overview', path: '/dashboard/overview', icon: FiHome },
    { label: 'My Listings', path: '/dashboard/my-listings', icon: FiList },
    { label: 'Add Property', path: '/dashboard/add-property', icon: FiPlusCircle },
    { label: 'Saved Properties', path: '/dashboard/saved-properties', icon: FiHeart },
    { label: 'Messages', path: '/dashboard/messages', icon: FiMessageCircle },
    { label: 'Profile Settings', path: '/dashboard/profile-settings', icon: FiUser },
  ];

  const adminMenu = [
    { label: 'Manage Properties', path: '/dashboard/manage-properties', icon: FiFileText },
    { label: 'Manage Users', path: '/dashboard/manage-users', icon: FiUsers },
    { label: 'Manage Blogs', path: '/dashboard/manage-blogs', icon: FiList },
    { label: 'Site Settings', path: '/dashboard/site-settings', icon: FiSettings },
  ];

  return (
    <div className="relative">
      <div className="border-b border-slate-200 bg-white py-4 px-4 dark:border-slate-800 dark:bg-slate-950 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Dashboard</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Welcome back.</h1>
          </div>
          <button onClick={toggleSidebar} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
            <FiChevronDown /> Menu
          </button>
        </div>
      </div>
      <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className={`fixed inset-y-0 left-0 z-40 w-full overflow-y-auto bg-white p-6 shadow-soft transition-transform duration-300 dark:bg-slate-950 lg:static lg:translate-x-0 lg:shadow-none ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:block`}>
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">Menu</p>
            <button onClick={closeSidebar} className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">Close</button>
          </div>
          <div className="mt-6 space-y-6">
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              {menu.map((item) => (
                <NavLink key={item.label} to={item.path} onClick={closeSidebar} className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-sky-600 text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>
                  <item.icon /> {item.label}
                </NavLink>
              ))}
            </div>
            {isAdmin && (
              <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Admin</p>
                {adminMenu.map((item) => (
                  <NavLink key={item.label} to={item.path} onClick={closeSidebar} className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-sky-600 text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>
                    <item.icon /> {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </aside>
        <main className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
