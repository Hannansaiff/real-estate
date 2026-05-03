export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(180deg, rgba(15,23,42,0.45), rgba(15,23,42,0.45)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80')",
      },
    },
  },
  plugins: [],
};