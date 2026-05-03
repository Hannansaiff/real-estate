import { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput = ({ label, className = '', ...props }: FormInputProps) => (
  <label className="block text-sm text-slate-700 dark:text-slate-300">
    <span className="mb-2 block font-medium">{label}</span>
    <input className={`w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-sky-500 dark:focus:ring-slate-800 ${className}`} {...props} />
  </label>
);

export default FormInput;
