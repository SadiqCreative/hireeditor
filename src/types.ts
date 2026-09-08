export type ThemeMode = 'light' | 'dark';

export type ClientCategory = 
  | 'Agencies'
  | 'Businesses'
  | 'Creators'
  | 'Startups'
  | 'Brands'
  | 'Podcasts';

export interface ClientTypeInfo {
  id: string;
  name: ClientCategory;
  description: string;
  typicalNeed: string;
  matchedEditorIds: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  impact?: string;
}

export interface Editor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  experienceYears: number;
  location: string;
  rating: number;
  completedProjects: number;
  availability: 'Immediate' | 'Available this week' | '1 slot remaining' | 'Taking selective projects';
  availabilityType: 'Full-time' | 'Freelance' | 'Both';
  shortDescription: string;
  fullBio: string;
  categories: string[];
  tools: string[];
  notableClients: string[];
  showreel: {
    title: string;
    duration: string;
    videoUrl: string;
    aspectRatio: string;
    viewsCount?: string;
  };
  portfolio: PortfolioItem[];
  hourlyRateEstimate?: string;
  monthlyRateEstimate?: string;
}

export interface MatchingRequirement {
  clientType: ClientCategory | '';
  projectType: string;
  urgency: string;
  commitment: 'Freelance / Project' | 'Dedicated Full-time' | 'Ongoing Part-time';
  budgetRange: string;
  styleKeywords: string[];
  description: string;
  contactEmail: string;
  companyName: string;
}
