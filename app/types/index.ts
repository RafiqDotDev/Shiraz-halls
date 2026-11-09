export interface Venue {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  capacityMin: number;
  capacityMax: number;
  baseHallRent: number;
  image: string;
  gallery: string[];
  features: string[];
  dimensions: string;
  ceilingHeight: string;
  location: string;
  rating: number;
  reviewsCount: number;
  suitableEvents: string[];
  badges: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: "starter" | "main_roast" | "main_curry" | "rice" | "bread_salads" | "dessert" | "beverage";
  description: string;
  isSignature?: boolean;
  spiceLevel?: "mild" | "medium" | "spicy";
  extraPerHead?: number;
}

export interface MenuPackage {
  id: string;
  name: string;
  tier: "Silver" | "Gold" | "Imperial Diamond" | "Royal Nizam Heritage";
  pricePerHead: number;
  description: string;
  badge?: string;
  popular?: boolean;
  highlights: string[];
  includedCourseCount: {
    starters: number;
    mains: number;
    rice: number;
    breads: number;
    desserts: number;
    beverages: number;
  };
}

export interface EventAddon {
  id: string;
  name: string;
  category: "decor" | "tech" | "entertainment" | "hospitality";
  price: number;
  description: string;
  badge?: string;
  iconName: string;
}

export interface DiscussionReply {
  id: string;
  author: string;
  authorRole: "Bride" | "Groom" | "Event Planner" | "Guest" | "Shiraz Concierge";
  isOfficialPlanner?: boolean;
  content: string;
  createdAt: string;
  likes: number;
}

export interface DiscussionPost {
  id: string;
  author: string;
  authorRole: "Bride" | "Groom" | "Event Planner" | "Guest" | "Shiraz Concierge";
  authorAvatar?: string;
  title: string;
  content: string;
  category: "Mehndi & Sangeet" | "Barat & Stage Decor" | "Walima & Catering" | "Hall Booking Q&A" | "Vendor Reviews";
  tags: string[];
  likes: number;
  userLiked?: boolean;
  replies: DiscussionReply[];
  createdAt: string;
  isPinned?: boolean;
}

export interface BookingFormData {
  venueId: string;
  eventType: string;
  date: string;
  slot: "afternoon" | "evening";
  guestCount: number;
  menuPackageId: string;
  customMenuAddons: string[];
  selectedAddons: string[];
  fullName: string;
  phone: string;
  email: string;
  city: string;
  specialRequests: string;
}

export type HallStageTheme = "mughal_royal" | "modern_crystal" | "emerald_garden" | "vintage_rose";
export type SeatingLayout = "round_tables" | "banquet_runway" | "royal_sofas";
export type LightingMood = "warm_gold" | "royal_purple" | "rose_blush" | "crystal_white";
