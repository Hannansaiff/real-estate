export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'Agents', path: '/agents' },
  { label: 'Blog', path: '/blog' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Login', path: '/dashboard' },
];

export const categories = [
  { title: 'Houses', icon: '🏠' },
  { title: 'Apartments', icon: '🏢' },
  { title: 'Villas', icon: '🏡' },
  { title: 'Commercial', icon: '🏬' },
];

export const featuredProperties = [
  {
    id: '1',
    title: 'Modern Family Home',
    price: '$1,250/mo',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1560185127-6a0b4ce11b4c?auto=format&fit=crop&w=900&q=80',
    beds: 4,
    baths: 3,
    area: '2,400 sqft',
    category: 'Rent',
  },
  {
    id: '2',
    title: 'Downtown Apartment',
    price: '$980/mo',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    beds: 2,
    baths: 2,
    area: '1,200 sqft',
    category: 'Rent',
  },
  {
    id: '3',
    title: 'Luxury Villa',
    price: '$3,800/mo',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1505693416388-0d4c5b2d47f7?auto=format&fit=crop&w=900&q=80',
    beds: 5,
    baths: 4,
    area: '4,200 sqft',
    category: 'Sale',
  },
];

export const blogPosts = [
  {
    id: '1',
    title: 'How to Find Your Dream Home',
    excerpt: 'Tips and tricks for choosing the right neighborhood and property type.',
    author: 'Ava Roberts',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    date: 'May 3, 2026',
  },
  {
    id: '2',
    title: 'Home Staging Ideas That Work',
    excerpt: 'Create a powerful first impression with these styling techniques.',
    author: 'Noah Brooks',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    date: 'April 28, 2026',
  },
  {
    id: '3',
    title: 'Top Property Investment Trends',
    excerpt: 'What buyers and investors are looking for this year.',
    author: 'Emma Carter',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    date: 'April 20, 2026',
  },
];

export const agents = [
  {
    id: 'a1',
    name: 'Olivia Hayes',
    rating: 4.9,
    listings: 28,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
    phone: '(555) 294-2210',
    bio: 'Friendly agent helping clients find homes with ease and confidence.',
  },
  {
    id: 'a2',
    name: 'Liam Barker',
    rating: 4.8,
    listings: 34,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
    phone: '(555) 892-1173',
    bio: 'Experienced in luxury and waterfront properties.',
  },
  {
    id: 'a3',
    name: 'Sophia Nguyen',
    rating: 4.7,
    listings: 19,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
    phone: '(555) 442-9130',
    bio: 'Focused on modern urban living and stylish apartments.',
  },
];

export const properties = [
  {
    id: '1',
    title: 'Cozy Family Home',
    price: '$1,100/mo',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    type: 'House',
    category: 'Rent',
    beds: 3,
    baths: 2,
    area: '1,800 sqft',
    featured: true,
    description: 'A warm family home near parks, schools, and shopping centers.',
  },
  {
    id: '2',
    title: 'Stylish City Apartment',
    price: '$1,350/mo',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    type: 'Apartment',
    category: 'Rent',
    beds: 2,
    baths: 2,
    area: '1,100 sqft',
    featured: true,
    description: 'Bright apartment with city views and efficient modern design.',
  },
  {
    id: '3',
    title: 'Luxury Coastal Villa',
    price: '$5,600/mo',
    location: 'Malibu, CA',
    image: 'https://images.unsplash.com/photo-1505693416388-0d4c5b2d47f7?auto=format&fit=crop&w=900&q=80',
    type: 'Villa',
    category: 'Sale',
    beds: 5,
    baths: 4,
    area: '4,500 sqft',
    featured: true,
    description: 'Modern villa with ocean-facing terraces and upscale amenities.',
  },
  {
    id: '4',
    title: 'Modern Commercial Office',
    price: '$2,900/mo',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
    type: 'Commercial',
    category: 'Rent',
    beds: 0,
    baths: 2,
    area: '3,200 sqft',
    featured: false,
    description: 'Premium commercial space for startups and creative teams.',
  },
];

export const propertyDetails = [
  {
    id: '1',
    images: [
      'https://images.unsplash.com/photo-1560185127-6a0b4ce11b4c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1425913397330-cf8af2ff23b8?auto=format&fit=crop&w=1200&q=80',
    ],
    title: 'Cozy Family Home',
    price: '$1,100/mo',
    location: 'Seattle, WA',
    beds: 3,
    baths: 2,
    area: '1,800 sqft',
    category: 'Rent',
    description: 'A beautifully maintained property with garden access and modern interiors. Includes a spacious kitchen, dining area, and private backyard patio perfect for family living.',
    features: ['Garden', 'Garage', 'Gym Access', 'Pet Friendly', 'Balcony', 'Air Conditioning', 'Storage', 'High-Speed Internet'],
    agentId: 'a1',
    similar: ['2', '3', '4'],
  },
];

export const dashboardOverview = {
  stats: [
    { title: 'My Listings', value: '8' },
    { title: 'Favorites', value: '12' },
    { title: 'Messages', value: '5' },
    { title: 'Total Users', value: '1,256' },
  ],
  activities: [
    { title: 'New property submitted', detail: 'Luxury villa added to listings', time: '2h ago' },
    { title: 'Message received', detail: 'Inquiry from Sarah on Downtown Apartment', time: '5h ago' },
    { title: 'Agent profile updated', detail: 'Liam Barker added a new photo', time: '1d ago' },
  ],
};

export const dashboardProperties = [
  {
    id: 'P1',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    title: 'Cozy Family Home',
    user: 'Olivia Hayes',
    status: 'Approved',
  },
  {
    id: 'P2',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    title: 'City Apartment',
    user: 'Sophia Nguyen',
    status: 'Pending',
  },
  {
    id: 'P3',
    image: 'https://images.unsplash.com/photo-1505693416388-0d4c5b2d47f7?auto=format&fit=crop&w=900&q=80',
    title: 'Luxury Villa',
    user: 'Liam Barker',
    status: 'Rejected',
  },
];

export const dashboardUsers = [
  { id: 'U1', name: 'Ava Roberts', email: 'ava@example.com', role: 'User' },
  { id: 'U2', name: 'Noah Brooks', email: 'noah@example.com', role: 'Admin' },
  { id: 'U3', name: 'Emma Carter', email: 'emma@example.com', role: 'User' },
];

export const dashboardBlogs = [
  { id: 'B1', title: 'Market Outlook', author: 'Admin', status: 'Published' },
  { id: 'B2', title: 'Staging Tips', author: 'Admin', status: 'Draft' },
  { id: 'B3', title: 'Buyer Guide', author: 'Admin', status: 'Published' },
];

export const messages = [
  { id: 'M1', name: 'Sarah Cooper', lastMessage: 'Is the apartment still available?', unread: true },
  { id: 'M2', name: 'David Lee', lastMessage: 'Can we schedule a visit?', unread: false },
  { id: 'M3', name: 'Nina Patel', lastMessage: 'I liked the villa details.', unread: false },
];

export const conversations = {
  M1: [
    { sender: 'other', text: 'Hi, is the apartment still available?', time: '09:12' },
    { sender: 'me', text: 'Yes! It is available this weekend.', time: '09:15' },
  ],
  M2: [
    { sender: 'other', text: 'Can we schedule a visit for Monday?', time: '08:32' },
    { sender: 'me', text: 'Monday at 11am works well.', time: '08:34' },
  ],
};

export const settingsData = {
  logo: 'RealEstatePro',
  title: 'Real Estate Marketplace',
  contact: 'contact@realestatepro.com',
  phone: '(555) 123-4567',
};

export const savedProperties = [
  {
    id: 'S1',
    title: 'Modern Beach House',
    location: 'Santa Monica, CA',
    price: '$2,900/mo',
    image: 'https://images.unsplash.com/photo-1505693416388-0d4c5b2d47f7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'S2',
    title: 'Upscale Studio',
    location: 'Chicago, IL',
    price: '$1,050/mo',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
  },
];

export const agentProperties = [
  { id: '1', title: 'Modern Family Home', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', price: '$1,100/mo', location: 'Seattle, WA', beds: 3, baths: 2, area: '1,800 sqft' },
  { id: '2', title: 'Downtown Loft', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', price: '$1,900/mo', location: 'New York, NY', beds: 2, baths: 2, area: '1,150 sqft' },
];

export const blogDetails = {
  '1': {
    id: '1',
    title: 'How to Find Your Dream Home',
    author: 'Ava Roberts',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    content: 'Finding the perfect home means balancing needs, budget, and future goals. Start by examining your lifestyle, visiting neighborhoods, and choosing the right property type. Work with trusted professionals and prioritize comfort, convenience, and long-term value for the best result.',
  },
  '2': {
    id: '2',
    title: 'Home Staging Ideas That Work',
    author: 'Noah Brooks',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    content: 'Staging your home can dramatically improve buyer interest. Focus on decluttering, enhancing natural light, and using neutral accents. Small updates like fresh flowers and inviting seating areas help buyers visualize themselves living in the space.',
  },
  '3': {
    id: '3',
    title: 'Top Property Investment Trends',
    author: 'Emma Carter',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    content: 'Investors are looking for smart rentals, mixed-use properties, and sustainable homes. Watch for demand growth in urban fringe areas and value-add opportunities. Stay informed on market shifts, rent projections, and neighborhood revitalization plans.',
  },
};
