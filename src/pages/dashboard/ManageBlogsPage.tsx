import { dashboardBlogs } from '../../data/content';

const ManageBlogsPage = () => (
  <div className="space-y-8">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Manage Blogs</p>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Blog management</h2>
    </div>
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Create or manage blog posts for the marketplace.</p>
      </div>
      <button className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Add New Blog</button>
    </div>
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm text-slate-600 dark:text-slate-300">
        <thead className="bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
          <tr>
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Author</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dashboardBlogs.map((blog) => (
            <tr key={blog.id} className="border-t border-slate-200 dark:border-slate-800">
              <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{blog.title}</td>
              <td className="px-6 py-4">{blog.author}</td>
              <td className="px-6 py-4">{blog.status}</td>
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

export default ManageBlogsPage;
