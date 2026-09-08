import { ClientTypeInfo, Editor } from '../types';

export const CLIENT_TYPES: ClientTypeInfo[] = [
  {
    id: 'agencies',
    name: 'Agencies',
    description: 'High-volume ad creative, multi-format campaigns & commercial post-production',
    typicalNeed: 'Rapid turnaround ad variations, color grading & broadcast specs',
    matchedEditorIds: ['editor-1', 'editor-4']
  },
  {
    id: 'businesses',
    name: 'Businesses',
    description: 'Corporate brand narratives, product launch keynotes & investor presentations',
    typicalNeed: 'Polished brand storytelling & executive-ready post-production',
    matchedEditorIds: ['editor-2', 'editor-5']
  },
  {
    id: 'creators',
    name: 'Creators',
    description: 'High-retention YouTube storytelling, dynamic pacing & audience retention hooks',
    typicalNeed: 'Algorithm-optimized editing, kinetic typography & sound design',
    matchedEditorIds: ['editor-3', 'editor-6']
  },
  {
    id: 'startups',
    name: 'Startups',
    description: 'SaaS product walkthroughs, demo videos & viral social feature releases',
    typicalNeed: 'UI screen recording polish, smooth 3D mockups & crisp motion UI',
    matchedEditorIds: ['editor-2', 'editor-4']
  },
  {
    id: 'brands',
    name: 'Brands',
    description: 'E-commerce lifestyle reels, DTC performance ads & global campaign spots',
    typicalNeed: 'Direct-response hooks, aesthetic color grading & rhythmic pacing',
    matchedEditorIds: ['editor-1', 'editor-5']
  },
  {
    id: 'podcasts',
    name: 'Podcasts',
    description: 'Multi-cam studio syncing, vertical short-form clips & dynamic captions',
    typicalNeed: 'Multi-angle switching, automated audio cleanup & viral hook cutting',
    matchedEditorIds: ['editor-3', 'editor-5']
  }
];

export const EDITORS_DATA: Editor[] = [
  {
    id: 'editor-1',
    name: 'Marcus Vance',
    title: 'Commercial & Brand Narrative Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    experienceYears: 9,
    location: 'London, UK (GMT)',
    rating: 4.98,
    completedProjects: 142,
    availability: 'Available this week',
    availabilityType: 'Both',
    shortDescription: 'Ex-Ogilvy lead post-editor specializing in high-impact TV spots, DTC performance ads, and luxury brand films.',
    fullBio: 'With 9 years commanding post-production for premier global brands, Marcus crafts visual rhythm that commands immediate audience attention. Trained in London with a masterclass background in color science and sound scoring, his edits have generated over $40M in attributable DTC revenue.',
    categories: ['Commercial & Ads', 'Brand Films', 'Color Grading'],
    tools: ['DaVinci Resolve Studio', 'Premiere Pro', 'After Effects', 'FabFilter Suite'],
    notableClients: ['Gymshark', 'Volvo', 'Rimowa', 'Huel', 'Aston Martin'],
    showreel: {
      title: 'Commercial & Global Brand Showreel 2025/2026',
      duration: '01:45',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      aspectRatio: '16:9',
      viewsCount: '18.4k'
    },
    portfolio: [
      {
        id: 'p1',
        title: 'Rimowa — The Fluid Odyssey',
        client: 'Rimowa Luxury Goods',
        category: 'Commercial & Ads',
        duration: '0:60',
        thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        description: 'Kinetic pacing and hyper-refined sound engineering showcasing aerospace-grade aluminum luggage.',
        impact: '+34% conversions on hero landing page'
      },
      {
        id: 'p2',
        title: 'Huel Black Edition Anthem',
        client: 'Huel Global',
        category: 'Brand Films',
        duration: '0:30',
        thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        description: 'Fast-paced macro food cinematography edit synchronized to bespoke organic percussion.',
        impact: '3.2M YouTube views'
      },
      {
        id: 'p3',
        title: 'Nordic Alpine Expedition',
        client: 'Volvo Cars',
        category: 'Color Grading',
        duration: '0:90',
        thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        description: 'ACES color managed workflow with film emulation print profiles and atmospheric sound design.',
        impact: 'Cannes Lion Shortlist'
      }
    ],
    hourlyRateEstimate: '$110/hr',
    monthlyRateEstimate: '$7,200/mo dedicated'
  },
  {
    id: 'editor-2',
    name: 'Elena Rostova',
    title: 'SaaS Product & Motion UI Specialist',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
    experienceYears: 7,
    location: 'Berlin, Germany (CET)',
    rating: 5.0,
    completedProjects: 98,
    availability: '1 slot remaining',
    availabilityType: 'Both',
    shortDescription: 'Transforms complex software, AI tools, and enterprise interfaces into seductive, crystal-clear launch videos.',
    fullBio: 'Elena bridges the gap between high-end 3D motion design and intuitive product UX. Having helped 20+ Y Combinator and Seed/Series A startups launch on Product Hunt and TechCrunch, her videos focus on making software feel tactile, fast, and irresistible.',
    categories: ['SaaS & Tech', 'Motion & VFX', 'Product Walkthroughs'],
    tools: ['After Effects', 'Cinema 4D', 'Premiere Pro', 'Figma', 'Redshift'],
    notableClients: ['Linear', 'Raycast', 'Notion', 'Supabase', 'Vercel Ecosystem'],
    showreel: {
      title: 'Motion UI & Product Reel 2026',
      duration: '01:20',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
      aspectRatio: '16:9',
      viewsCount: '24.1k'
    },
    portfolio: [
      {
        id: 'p4',
        title: 'Velocity AI — Next-Gen IDE Reveal',
        client: 'Developer Tooling Series A',
        category: 'SaaS & Tech',
        duration: '0:45',
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
        description: 'Isometric 3D screen choreography with custom glass shaders highlighting code velocity.',
        impact: '#1 Product of the Day'
      },
      {
        id: 'p5',
        title: 'Autonomous Workspace Launch',
        client: 'Enterprise SaaS',
        category: 'Motion & VFX',
        duration: '0:60',
        thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        description: 'Seamless Figma-to-After Effects vector animations with UI depth and realistic lighting.',
        impact: '400k+ organic views on X'
      }
    ],
    hourlyRateEstimate: '$125/hr',
    monthlyRateEstimate: '$8,000/mo dedicated'
  },
  {
    id: 'editor-3',
    name: 'Devon Takahashi',
    title: 'High-Retention YouTube & Creator Editor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    experienceYears: 6,
    location: 'Toronto, Canada (EST)',
    rating: 4.96,
    completedProjects: 230,
    availability: 'Immediate',
    availabilityType: 'Both',
    shortDescription: 'Master of audience retention, pacing curves, micro-hooks, and documentary-style long-form YouTube edits.',
    fullBio: 'Devon has edited for top-tier creators with over 15M combined subscribers. He specializes in turning 6 hours of raw footage into magnetic, emotionally compelling 15-to-25 minute stories with an average 68% retention rate past the 5-minute mark.',
    categories: ['YouTube & Creators', 'Documentary', 'Short-form & TikTok'],
    tools: ['Premiere Pro', 'After Effects', 'Soundly', 'DaVinci Resolve'],
    notableClients: ['Ali Abdaal Team', 'Veritasium Guest Spot', 'Modern Creative Co', 'Fintech Explained'],
    showreel: {
      title: 'Long-form Storytelling & Retention Reel',
      duration: '02:10',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      aspectRatio: '16:9',
      viewsCount: '41.8k'
    },
    portfolio: [
      {
        id: 'p6',
        title: 'The Psychology of Extreme Focus',
        client: 'Top 1% Creator',
        category: 'YouTube & Creators',
        duration: '18:40',
        thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        description: 'Documentary style edit combining archival footage, custom kinetic 3D typography, and psychological pacing.',
        impact: '2.4M views, 71% average retention'
      },
      {
        id: 'p7',
        title: 'Inside Silicon Valley’s Robotics Vault',
        client: 'Deep Tech Channel',
        category: 'Documentary',
        duration: '14:20',
        thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        description: 'Multi-camera cutting with bespoke sound fx layer and tension-building narrative curves.',
        impact: '980k views, 4.8k comments'
      }
    ],
    hourlyRateEstimate: '$95/hr',
    monthlyRateEstimate: '$6,400/mo dedicated'
  },
  {
    id: 'editor-4',
    name: 'Siddharth Rao',
    title: 'Kinetic Motion Designer & 3D VFX Artist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    experienceYears: 8,
    location: 'Austin, TX, USA (CST)',
    rating: 4.99,
    completedProjects: 115,
    availability: 'Available this week',
    availabilityType: 'Freelance',
    shortDescription: 'High-octane commercial motion graphics, futuristic visual effects, and 3D product simulations.',
    fullBio: 'Siddharth specializes in blending live-action footage with cutting-edge 3D motion graphics. From neon cyber aesthetics to sleek industrial mechanical breakdowns, he brings cinematic production value to startup launches and major brand campaigns.',
    categories: ['Motion & VFX', 'Commercial & Ads', 'SaaS & Tech'],
    tools: ['Blender 4.2', 'After Effects', 'Cinema 4D', 'Octane Render', 'Premiere Pro'],
    notableClients: ['Nothing Tech', 'Razer', 'Solana Labs', 'Kith', 'Red Bull Esports'],
    showreel: {
      title: '3D VFX & High-Octane Motion Reel',
      duration: '01:15',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      aspectRatio: '16:9',
      viewsCount: '32.6k'
    },
    portfolio: [
      {
        id: 'p8',
        title: 'Nothing Ear (Open) Launch Film',
        client: 'Consumer Electronics Brand',
        category: 'Motion & VFX',
        duration: '0:45',
        thumbnail: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        description: 'Transparent casing exploded views with photorealistic lighting and acoustic resonance graphics.',
        impact: '1.8M impressions globally'
      }
    ],
    hourlyRateEstimate: '$135/hr',
    monthlyRateEstimate: '$8,800/mo dedicated'
  },
  {
    id: 'editor-5',
    name: 'Amara Ndiaye',
    title: 'Brand Storyteller & Narrative Documentary Editor',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    experienceYears: 10,
    location: 'Paris, France (CET)',
    rating: 4.97,
    completedProjects: 160,
    availability: 'Taking selective projects',
    availabilityType: 'Both',
    shortDescription: 'Documentary filmmaker and narrative editor crafting emotionally resonant brand anthems and founder stories.',
    fullBio: 'With credits on Netflix and BBC docuseries, Amara brings profound human depth to corporate and brand storytelling. She extracts authentic emotional arcs from unscripted founder interviews and transforms them into unforgettable cinematic experiences.',
    categories: ['Brand Films', 'Documentary', 'Podcasts'],
    tools: ['DaVinci Resolve Studio', 'Avid Media Composer', 'Premiere Pro', 'Izotope RX10'],
    notableClients: ['Patagonia', 'BBC StoryWorks', 'Airbnb', 'LVMH Group', 'Founders Fund'],
    showreel: {
      title: 'Cinematic Narrative & Documentary Anthology',
      duration: '02:00',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4',
      aspectRatio: '16:9',
      viewsCount: '15.9k'
    },
    portfolio: [
      {
        id: 'p9',
        title: 'Patagonia: Custodians of the Deep',
        client: 'Patagonia Films',
        category: 'Documentary',
        duration: '08:30',
        thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4',
        description: 'Breathtaking maritime cinematography woven into an urgent conservation narrative.',
        impact: 'Tribeca X Official Selection'
      }
    ],
    hourlyRateEstimate: '$120/hr',
    monthlyRateEstimate: '$7,800/mo dedicated'
  },
  {
    id: 'editor-6',
    name: 'Leo Cassel',
    title: 'Short-Form Viral Director & TikTok/Reels Architect',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80',
    experienceYears: 5,
    location: 'Los Angeles, CA, USA (PST)',
    rating: 4.95,
    completedProjects: 310,
    availability: 'Available this week',
    availabilityType: 'Both',
    shortDescription: 'Architect behind 100M+ organic views across TikTok, IG Reels, and YouTube Shorts for high-growth brands.',
    fullBio: 'Leo understands the first 1.5 seconds of human attention better than anyone. He engineers hypnotic micro-cuts, dynamic captioning styling, sound punchlines, and algorithmic hooks that turn passive scrollers into passionate brand advocates.',
    categories: ['Short-form & TikTok', 'Podcasts', 'Commercial & Ads'],
    tools: ['Premiere Pro', 'After Effects', 'CapCut Pro Desktop', 'Audition'],
    notableClients: ['All-In Podcast Highlights', 'Duolingo Social', 'Liquid Death', 'Hulu Social'],
    showreel: {
      title: 'Viral Short-Form Reels & Hook Engineering 2026',
      duration: '01:00',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      aspectRatio: '9:16',
      viewsCount: '65.2k'
    },
    portfolio: [
      {
        id: 'p10',
        title: 'Liquid Death x Heavy Metal Hydration',
        client: 'Liquid Death Mountain Water',
        category: 'Short-form & TikTok',
        duration: '0:22',
        thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        description: 'Rapid-fire visual gags, 2D motion stickers, and high-energy sound design.',
        impact: '8.4M organic TikTok views'
      }
    ],
    hourlyRateEstimate: '$90/hr',
    monthlyRateEstimate: '$5,900/mo dedicated'
  }
];

export const TRUST_METRICS = [
  { value: '450+', label: 'Vetted Elite Editors', sub: 'Top 3% acceptance rate' },
  { value: '48h', label: 'Average Match Time', sub: 'From brief to first interview' },
  { value: '98.4%', label: 'Match Retention', sub: 'Clients who stay 6+ months' },
  { value: '$45M+', label: 'Client Revenue Generated', sub: 'Through high-converting video' }
];

export const TRUSTED_BRANDS = [
  { name: 'Linear', symbol: 'LN' },
  { name: 'Notion', symbol: 'NT' },
  { name: 'Huel', symbol: 'HL' },
  { name: 'Rimowa', symbol: 'RM' },
  { name: 'Duolingo', symbol: 'DL' },
  { name: 'Supabase', symbol: 'SB' },
  { name: 'All-In Pod', symbol: 'AI' }
];

export const PROBLEM_POINTS = [
  {
    icon: 'Users',
    title: 'Too many applications',
    detail: 'Posting on job boards brings 300+ generic applicants with inflated resumes. Sifting through noisy inboxes drains days of productive leadership time.'
  },
  {
    icon: 'FileQuestion',
    title: 'Difficult portfolio evaluation',
    detail: 'Flashy showreels often hide team credits or plagiarized templates. It is nearly impossible to tell whether the applicant actually cut the footage or just added a title.'
  },
  {
    icon: 'Sliders',
    title: 'Technical skills are hard to judge',
    detail: 'Color grading, raw audio dynamics, codec conformities, and timeline discipline require seasoned post-supervisors to properly audit.'
  },
  {
    icon: 'AlertTriangle',
    title: 'Hiring the wrong editor is expensive',
    detail: 'Missed launch dates, endless revision rounds, and restarting projects from scratch burn thousands in payroll and delayed momentum.'
  },
  {
    icon: 'Clock',
    title: 'Finding the right fit takes time',
    detail: 'Every week spent searching without an editor is a week of paused YouTube uploads, stale ad accounts, or delayed product releases.'
  }
];

export const SOLUTION_STEPS = [
  {
    step: '01',
    title: 'You tell us your requirements',
    description: 'Share your niche, video formats, target turnaround speed, software stack, and whether you need dedicated full-time or project-based capacity.'
  },
  {
    step: '02',
    title: 'We understand your project',
    description: 'Our senior post-production directors analyze your creative brief, reference inspirations, and workflow constraints.'
  },
  {
    step: '03',
    title: 'We search our editor network',
    description: 'We cross-reference our private talent roster of 450+ pre-vetted video editors with verified client credits and technical proficiency.'
  },
  {
    step: '04',
    title: 'We shortlist suitable editors',
    description: 'Within 48 hours, you receive a curated dossier of 2-3 matched editors whose specific style directly aligns with your project.'
  },
  {
    step: '05',
    title: 'You choose the right match',
    description: 'Review their custom reels, interview them directly, and immediately commence work with zero hiring overhead.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '1',
    title: 'Tell us what you need',
    desc: 'Fill out our 2-minute matching brief detailing your video genre, expected volume, and brand aesthetic.'
  },
  {
    number: '2',
    title: 'We find suitable editors',
    desc: 'Our creative directors evaluate portfolio authenticity, technical discipline, and immediate availability.'
  },
  {
    number: '3',
    title: 'Review and connect',
    desc: 'Examine personalized video introductions and relevant work samples. Meet your matches over video.'
  },
  {
    number: '4',
    title: 'Hire or start your project',
    desc: 'Begin working with full contractual flexibility — either on flexible freelance milestones or dedicated full-time talent.'
  }
];
