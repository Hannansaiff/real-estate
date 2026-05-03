interface PaginationProps {
  currentPage: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({ currentPage, onPageChange }: PaginationProps) => (
  <div className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-white px-4 py-3 shadow-soft dark:bg-slate-900">
    <button onClick={() => onPageChange?.(currentPage - 1)} disabled={currentPage <= 1} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800">
      Prev
    </button>
    {[1, 2].map((page) => (
      <button key={page} onClick={() => onPageChange?.(page)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${currentPage === page ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800'}`}>
        {page}
      </button>
    ))}
    <button onClick={() => onPageChange?.(currentPage + 1)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800">
      Next
    </button>
  </div>
);

export default Pagination;
