export interface ProtocolStep {
  number: string;
  timeRange: string;
  title: string;
  description: string;
  keyAction: string;
  avoidTip: string;
}

export interface ProductDeliverable {
  iconName: string;
  title: string;
  description: string;
  badge?: string;
}

export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  value: string;
  image: string;
  highlights: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  city: string;
  rating: number;
  quote: string;
  highlight: string;
  avatarText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
