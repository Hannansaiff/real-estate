import { useState } from 'react';

const PriceRangeSlider = () => {
  const [value, setValue] = useState(50);

  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Price Range</h2>
        <span className="text-sm text-slate-500 dark:text-slate-400">${value * 100}</span>
      </div>
      <input type="range" min="10" max="100" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full accent-sky-600" />
    </div>
  );
};

export default PriceRangeSlider;
