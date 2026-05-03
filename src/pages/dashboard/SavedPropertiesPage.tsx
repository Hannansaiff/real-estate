import { savedProperties } from '../../data/content';

const SavedPropertiesPage = () => (
  <div className="space-y-8">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Saved Properties</p>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Saved favorites</h2>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {savedProperties.map((property) => (
        <div key={property.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <img src={property.image} alt={property.title} className="h-56 w-full object-cover" />
          <div className="space-y-3 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{property.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{property.location}</p>
              </div>
              <p className="text-sm font-semibold text-sky-600">{property.price}</p>
            </div>
            <button className="w-full rounded-full bg-red-100 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-200 dark:bg-red-950 dark:text-red-400 dark:hover:bg-slate-800">Remove from Saved</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SavedPropertiesPage;
