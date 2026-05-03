import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import AgentCard from '../components/AgentCard';
import PropertyCard from '../components/PropertyCard';
import { agents, agentProperties } from '../data/content';

const AgentDetailsPage = () => {
  const { id } = useParams();
  const agent = useMemo(() => agents.find((agentItem) => agentItem.id === id) ?? agents[0], [id]);

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center">
            <img src={agent.image} alt={agent.name} className="h-56 w-full rounded-3xl object-cover" />
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Agent profile</p>
              <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{agent.name}</h1>
              <p className="max-w-2xl text-slate-600 dark:text-slate-300">{agent.bio}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Rating</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{agent.rating.toFixed(1)}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Listings</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{agent.listings}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Agent listings</p>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Properties by {agent.name}</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {agentProperties.map((property) => (
              <PropertyCard key={property.id} {...property} location={property.location || 'Unknown'} category="Rent" />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AgentDetailsPage;
