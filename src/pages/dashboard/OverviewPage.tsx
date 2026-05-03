import StatsCard from '../../components/StatsCard';
import { dashboardOverview } from '../../data/content';

const OverviewPage = () => (
  <div className="space-y-8">
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardOverview.stats.map((stat) => (
        <StatsCard key={stat.title} title={stat.title} value={stat.value} />
      ))}
    </div>
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Performance</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Monthly chart</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[75, 52, 88, 64].map((value, index) => (
          <div key={index} className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
            <p className="text-sm text-slate-500 dark:text-slate-400">Month {index + 1}</p>
            <div className="mt-4 h-28 rounded-3xl bg-slate-100 dark:bg-slate-800">
              <div className="h-full rounded-3xl bg-sky-600" style={{ width: `${value}%` }} />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{value}%</p>
          </div>
        ))}
      </div>
    </div>
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Recent activity</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Activity log</h2>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {dashboardOverview.activities.map((activity) => (
          <div key={activity.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <p className="font-semibold text-slate-900 dark:text-white">{activity.title}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{activity.detail}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OverviewPage;
