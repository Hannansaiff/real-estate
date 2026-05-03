import { useState } from 'react';
import FormInput from '../../components/FormInput';

const AddPropertyPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Add Property</p>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Add a new listing</h2>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 flex items-center gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className={`min-w-[150px] rounded-3xl border px-4 py-3 text-center ${step === index ? 'border-sky-600 bg-sky-50 text-slate-900' : 'border-slate-200 bg-white text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300'}`}>
              <span className="block text-xs uppercase tracking-[0.25em]">Step {index}</span>
              <strong className="mt-2 block text-sm">{index === 1 ? 'Basic' : index === 2 ? 'Details' : index === 3 ? 'Pricing' : 'Images'}</strong>
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="grid gap-6 md:grid-cols-2">
            <FormInput label="Title" placeholder="Enter property title" />
            <FormInput label="Description" placeholder="Enter short description" />
            <label className="block text-sm text-slate-700 dark:text-slate-300">
              Category
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
                <option>Rent</option>
                <option>Sale</option>
              </select>
            </label>
            <label className="block text-sm text-slate-700 dark:text-slate-300">
              Type
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-6 md:grid-cols-3">
            <FormInput label="Bedrooms" placeholder="3" type="number" />
            <FormInput label="Bathrooms" placeholder="2" type="number" />
            <FormInput label="Area" placeholder="1,800 sqft" />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-6 md:grid-cols-2">
            <FormInput label="Price" placeholder="$1,200" />
            <FormInput label="Additional fees" placeholder="Optional" />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">Upload property images (UI only)</p>
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-slate-700 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Drag and drop images here or click to browse.</p>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {step > 1 && (
            <button type="button" onClick={() => setStep((prev) => prev - 1)} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800">
              Back
            </button>
          )}
          {step < 4 ? (
            <button type="button" onClick={() => setStep((prev) => prev + 1)} className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
              Next Step
            </button>
          ) : (
            <button type="button" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">
              Submit Listing
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPropertyPage;
