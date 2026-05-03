import { Link } from 'react-router-dom';

interface AgentCardProps {
  id: string;
  name: string;
  rating: number;
  listings: number;
  image: string;
}

const AgentCard = ({ id, name, rating, listings, image }: AgentCardProps) => (
  <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
    <div className="h-72 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img src={image} alt={name} className="h-full w-full object-cover" />
    </div>
    <div className="space-y-3 p-5">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>Rating {rating.toFixed(1)}</span>
        <span>{listings} Listings</span>
      </div>
      <Link to={`/agents/${id}`} className="inline-flex w-full justify-center rounded-full bg-sky-600 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
        View Profile
      </Link>
    </div>
  </article>
);

export default AgentCard;
