import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  image: string;
}

const BlogCard = ({ id, title, excerpt, author, image }: BlogCardProps) => (
  <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
    <div className="h-60 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
    <div className="space-y-3 p-5">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-sky-600">{author}</div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{excerpt}</p>
      <Link to={`/blog/${id}`} className="inline-flex text-sm font-semibold text-sky-600 hover:text-sky-700">
        Read More
      </Link>
    </div>
  </article>
);

export default BlogCard;
