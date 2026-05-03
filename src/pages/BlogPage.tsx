import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/content';

const BlogPage = () => (
  <main className="px-4 py-14 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Blog</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Latest insights and tips</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">Stay informed on market trends, staging advice, and property news.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  </main>
);

export default BlogPage;
