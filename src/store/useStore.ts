import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  isSidebarOpen: boolean;
  isAdmin: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  isSidebarOpen: false,
  isAdmin: true,
  setTheme: (theme) => set(() => ({ theme })),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set(() => ({ isSidebarOpen: false })),
}));