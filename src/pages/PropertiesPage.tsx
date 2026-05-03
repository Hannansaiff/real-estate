import { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import PropertyCard from '../components/PropertyCard';
import Pagination from '../components/Pagination';
import { properties } from '../data/content';

const PropertiesPage = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sort, setSort] = useState('Newest');
  const [page, setPage] = useState(1);
  const sorted = [...properties].sort((a, b) => {
    if (sort === 'Price low→high') return Number(a.price.replace(/[^0-9]/g, '')) - Number(b.price.replace(/[^0-9]/g, ''));
    if (sort === 'Price high→low') return Number(b.price.replace(/[^0-9]/g, '')) - Number(a.price.replace(/[^0-9]/g, ''));
    return 0;
  });

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Property listings</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Browse available homes, villas, apartments, and commercial spaces with flexible filters.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
          <FilterSidebar />
          <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                <span>Sort by</span>
                <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
                  <option>Newest</option>
                  <option>Price low→high</option>
                  <option>Price high→low</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setView('grid')} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${view === 'grid' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800'}`}>
                  Grid
                </button>
                <button onClick={() => setView('list')} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${view === 'list' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800'}`}>
                  List
                </button>
              </div>
            </div>
            <div className={view === 'grid' ? 'grid gap-6 md:grid-cols-2' : 'space-y-6'}>
              {sorted.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
            <Pagination currentPage={page} onPageChange={setPage} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default PropertiesPage;
