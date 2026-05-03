import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition';
  const styles = {
    primary: 'bg-sky-600 text-white hover:bg-sky-700',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200',
    ghost: 'bg-white text-slate-900 shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
