import { dashboardProperties } from '../../data/content';

const ManagePropertiesPage = () => (
  <div className="space-y-8">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Manage Properties</p>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Review listings</h2>
    </div>
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm text-slate-600 dark:text-slate-300">
        <thead className="bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
          <tr>
            <th className="px-6 py-4">Image</th>
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">User</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dashboardProperties.map((property) => (
            <tr key={property.id} className="border-t border-slate-200 dark:border-slate-800">
              <td className="px-6 py-4">
                <img src={property.image} alt={property.title} className="h-16 w-24 rounded-2xl object-cover" />
              </td>
              <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{property.title}</td>
              <td className="px-6 py-4">{property.user}</td>
              <td className="px-6 py-4">
                <select className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td className="px-6 py-4 space-x-2">
                <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800">Edit</button>
                <button className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 dark:border-red-800 dark:bg-slate-950 dark:text-red-400 dark:hover:bg-slate-800">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ManagePropertiesPage;
