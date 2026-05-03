import FormInput from '../../components/FormInput';

const ProfileSettingsPage = () => (
  <div className="space-y-8">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Profile Settings</p>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Update your account details</h2>
    </div>
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
        <div className="space-y-4">
          <div className="h-40 w-40 overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-950">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80" alt="Profile" className="h-full w-full object-cover" />
          </div>
          <button className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">Upload profile image</button>
        </div>
        <div className="space-y-6">
          <FormInput label="Name" placeholder="Your name" />
          <FormInput label="Email" placeholder="you@example.com" type="email" />
          <FormInput label="Phone" placeholder="(555) 123-4567" type="tel" />
          <button className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Save changes</button>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileSettingsPage;
