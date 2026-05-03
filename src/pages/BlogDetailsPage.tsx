import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { blogDetails } from '../data/content';

const BlogDetailsPage = () => {
  const { id } = useParams();
  const post = useMemo(() => blogDetails[id ?? '1'] ?? blogDetails['1'], [id]);

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <img src={post.image} alt={post.title} className="h-72 w-full object-cover" />
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>By {post.author}</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-slate-900 dark:text-white">{post.title}</h1>
            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">{post.content}</p>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">Learn more about planning, investing, and styling properties to maximize value in today’s market.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetailsPage;
