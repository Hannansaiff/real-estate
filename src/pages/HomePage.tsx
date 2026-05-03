import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { categories, featuredProperties, blogPosts } from '../data/content';
import PropertyCard from '../components/PropertyCard';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => (
  <main className="space-y-16">
    <section className="relative overflow-hidden bg-hero-pattern bg-cover bg-center py-28">
      <div className="absolute inset-0 bg-slate-950/50"></div>
      <div className="relative mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Real estate made simple</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl">Find the perfect property for your next move.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">Discover homes, apartments, villas, and commercial spaces in one modern marketplace with tools for buyers, renters, and admins.</p>
      </div>
    </section>

    <section className="-mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-soft dark:bg-slate-900">
        <SearchBar />
      </div>
    </section>

    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Featured Properties</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Discover popular listings</h2>
          </div>
          <Link to="/properties" className="text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">View all properties</Link>
        </div>
        <Swiper modules={[Navigation]} spaceBetween={24} navigation slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          {featuredProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard {...property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Categories</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Explore by property type</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <Link key={item.title} to="/properties" className="group rounded-3xl border border-slate-200 bg-white p-8 text-center transition hover:border-sky-300 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-600 dark:hover:bg-slate-950">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-3xl group-hover:bg-sky-600 group-hover:text-white dark:bg-slate-800 dark:text-slate-900 dark:group-hover:bg-sky-600 dark:group-hover:text-white">{item.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Latest Blog Posts</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Insights for buyers and sellers</h2>
          </div>
          <Link to="/blog" className="text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Read the blog</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default HomePage;
