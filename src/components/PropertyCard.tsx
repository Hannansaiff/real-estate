import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  area: string;
  category?: string;
}

const PropertyCard = ({ id, title, price, location, image, beds, baths, area, category }: PropertyCardProps) => (
  <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
    <div className="relative h-60 overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      {category && <span className="absolute left-4 top-4 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">{category}</span>}
    </div>
    <div className="space-y-3 p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm font-semibold text-sky-600">{price}</p>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">{location}</p>
      <div className="grid grid-cols-3 gap-3 text-sm text-slate-500 dark:text-slate-400">
        <span>{beds} Beds</span>
        <span>{baths} Baths</span>
        <span>{area}</span>
      </div>
      <Link to={`/property/${id}`} className="inline-flex w-full justify-center rounded-full bg-slate-900 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">
        View Details
      </Link>
    </div>
  </article>
);

export default PropertyCard;
