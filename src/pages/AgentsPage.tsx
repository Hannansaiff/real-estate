import AgentCard from '../components/AgentCard';
import { agents } from '../data/content';

const AgentsPage = () => (
  <main className="px-4 py-14 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Agents</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Meet our expert team</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">Connect with top agents and discover properties tailored to your needs.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.id} {...agent} />
        ))}
      </div>
    </div>
  </main>
);

export default AgentsPage;
