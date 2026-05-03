import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import PropertyCard from '../components/PropertyCard';
import { propertyDetails, properties, agents } from '../data/content';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const detail = useMemo(() => propertyDetails.find((item) => item.id === id) ?? propertyDetails[0], [id]);
  const agent = useMemo(() => agents.find((a) => a.id === detail.agentId) ?? agents[0], [detail.agentId]);
  const similar = useMemo(() => properties.filter((item) => detail.similar.includes(item.id)).slice(0, 3), [detail]);

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <Swiper modules={[Navigation]} navigation spaceBetween={16} slidesPerView={1} className="rounded-3xl overflow-hidden">
              {detail.images.map((src) => (
                <SwiperSlide key={src}>
                  <img src={src} alt={detail.title} className="h-[420px] w-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">{detail.title}</h1>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{detail.location}</p>
                </div>
                <div className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">{detail.category}</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-5 text-center dark:bg-slate-950">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Beds</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{detail.beds}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 text-center dark:bg-slate-950">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Baths</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{detail.baths}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 text-center dark:bg-slate-950">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Area</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{detail.area}</p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Property description</h2>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{detail.description}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Features</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {detail.features.map((feature) => (
                    <div key={feature} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Location</h2>
                <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
                  <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" alt="Map placeholder" className="h-64 w-full object-cover" />
                </div>
              </div>
            </div>
          </section>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Agent information</h2>
              <div className="mt-6 flex items-center gap-4">
                <img src={agent.image} alt={agent.name} className="h-20 w-20 rounded-3xl object-cover" />
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{agent.name}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{agent.phone}</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Message agent</button>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Similar properties</h2>
              <div className="mt-6 space-y-4">
                {similar.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetailsPage;
