import { useState } from 'react';

const FilterSidebar = () => {
  const [category, setCategory] = useState('All');
  const [type, setType] = useState('All');
  const [location, setLocation] = useState('All');
  const [bedrooms, setBedrooms] = useState('Any');
  const [bathrooms, setBathrooms] = useState('Any');

  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Filters</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Refine results by category, type, and price.</p>
        </div>
        <div className="space-y-4">
          <label className="block text-sm text-slate-700 dark:text-slate-300">
            Category
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <option>All</option>
              <option>Rent</option>
              <option>Sale</option>
            </select>
          </label>
          <label className="block text-sm text-slate-700 dark:text-slate-300">
            Property Type
            <select value={type} onChange={(e) => setType(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <option>All</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </label>
          <label className="block text-sm text-slate-700 dark:text-slate-300">
            Location
            <select value={location} onChange={(e) => setLocation(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <option>All</option>
              <option>Seattle</option>
              <option>Miami</option>
              <option>New York</option>
            </select>
          </label>
          <label className="block text-sm text-slate-700 dark:text-slate-300">
            Bedrooms
            <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </label>
          <label className="block text-sm text-slate-700 dark:text-slate-300">
            Bathrooms
            <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <button className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Apply Filters</button>
          <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">Reset</button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
