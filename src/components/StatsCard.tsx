interface StatsCardProps {
  title: string;
  value: string;
}

const StatsCard = ({ title, value }: StatsCardProps) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">{title}</p>
    <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
  </div>
);

export default StatsCard;
