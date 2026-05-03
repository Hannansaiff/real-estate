import { dashboardUsers } from '../../data/content';

const ManageUsersPage = () => (
  <div className="space-y-8">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Manage Users</p>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">User administration</h2>
    </div>
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm text-slate-600 dark:text-slate-300">
        <thead className="bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dashboardUsers.map((user) => (
            <tr key={user.id} className="border-t border-slate-200 dark:border-slate-800">
              <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                <select className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
                  <option>{user.role}</option>
                  <option>{user.role === 'Admin' ? 'User' : 'Admin'}</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <button className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 dark:border-red-800 dark:bg-slate-950 dark:text-red-400 dark:hover:bg-slate-800">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ManageUsersPage;
