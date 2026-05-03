import { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('All Cities');
  const [type, setType] = useState('Any Type');
  const [price, setPrice] = useState('No Limit');

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-4 lg:grid-cols-4">
        <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <span>Location</span>
          <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <option>All Cities</option>
            <option>London</option>
            <option>New York</option>
            <option>Los Angeles</option>
          </select>
        </label>
        <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <span>Type</span>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <option>Any Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
        </label>
        <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <span>Price</span>
          <select value={price} onChange={(e) => setPrice(e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <option>No Limit</option>
            <option>$500 - $1,500</option>
            <option>$1,500 - $3,000</option>
            <option>$3,000+</option>
          </select>
        </label>
        <button className="rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
