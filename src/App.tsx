import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppStore } from './store/useStore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import AgentsPage from './pages/AgentsPage';
import AgentDetailsPage from './pages/AgentDetailsPage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import DashboardLayout from './components/DashboardLayout';
import OverviewPage from './pages/dashboard/OverviewPage';
import MyListingsPage from './pages/dashboard/MyListingsPage';
import AddPropertyPage from './pages/dashboard/AddPropertyPage';
import SavedPropertiesPage from './pages/dashboard/SavedPropertiesPage';
import MessagesPage from './pages/dashboard/MessagesPage';
import ProfileSettingsPage from './pages/dashboard/ProfileSettingsPage';
import ManagePropertiesPage from './pages/dashboard/ManagePropertiesPage';
import ManageUsersPage from './pages/dashboard/ManageUsersPage';
import ManageBlogsPage from './pages/dashboard/ManageBlogsPage';
import SiteSettingsPage from './pages/dashboard/SiteSettingsPage';

function App() {
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/agents/:id" element={<AgentDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="my-listings" element={<MyListingsPage />} />
          <Route path="add-property" element={<AddPropertyPage />} />
          <Route path="saved-properties" element={<SavedPropertiesPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="profile-settings" element={<ProfileSettingsPage />} />
          <Route path="manage-properties" element={<ManagePropertiesPage />} />
          <Route path="manage-users" element={<ManageUsersPage />} />
          <Route path="manage-blogs" element={<ManageBlogsPage />} />
          <Route path="site-settings" element={<SiteSettingsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
