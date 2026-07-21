export interface Vehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  capacity: number;
  ac: boolean;
  seating: string;
  features: string[];
  priceDesc: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of Lucide icon to render dynamically
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  image: string;
  description: string;
  priceDesc: string;
  highlights: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}
