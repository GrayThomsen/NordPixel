export type LocalizedText = {
  da: string;
  en: string;
};

export type TimelineStep = {
  module: LocalizedText;
  duration: LocalizedText;
  focus: LocalizedText;
  workload: LocalizedText;
  format: LocalizedText;
};

export type PricingInfo = {
  basePrice: number;
  isByPlanning?: boolean;
};

export type DiscountTier = {
  minCourses: number;
  discountPercentage: number;
};

export type ProgramTrack = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  subjectKey: string;
  targetKeys: string[];
  targetGroup: LocalizedText;
  duration: LocalizedText;
  subjects: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  timeline: TimelineStep[];
  pricing: PricingInfo;
};

export type FocusCourse = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  targetKeys: string[];
  duration: LocalizedText;
  audience: LocalizedText;
  bookingHint: LocalizedText;
  pricing: PricingInfo;
};

export type BookableOption = {
  id: string;
  title: LocalizedText;
  kind: 'track' | 'focus';
  pricing: PricingInfo;
};
