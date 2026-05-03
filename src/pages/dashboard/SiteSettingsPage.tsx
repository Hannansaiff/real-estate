import { settingsData } from '../../data/content';
import FormInput from '../../components/FormInput';

const SiteSettingsPage = () => (
  <div className="space-y-8">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Site Settings</p>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Brand and contact settings</h2>
    </div>
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm text-slate-500 dark:text-slate-400">Logo upload</p>
            <div className="mt-4 h-24 rounded-3xl bg-white p-4 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-400">Currently: {settingsData.logo}</div>
            <button className="mt-4 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">Upload logo</button>
          </div>
          <FormInput label="Site title" placeholder={settingsData.title} />
          <FormInput label="Contact email" placeholder={settingsData.contact} type="email" />
          <FormInput label="Phone" placeholder={settingsData.phone} type="tel" />
          <button className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Save changes</button>
        </div>
      </div>
    </div>
  </div>
);

export default SiteSettingsPage;
