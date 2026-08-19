export interface Development {
  id: string;
  name: string;
  location: string;
  beds: string;
  price: string;
  badge: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface Award {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  href: string;
  linkText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface Area {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  followers: string;
  href: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  timeline: string;
  title: string;
  description: string;
}