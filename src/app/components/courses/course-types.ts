// Bilingual copy container used across all course and booking entities.
export type LocalizedText = {
  da: string;
  en: string;
};

// One timeline row shown inside an expanded program track card.
export type TimelineStep = {
  module: LocalizedText;
  duration: LocalizedText;
  focus: LocalizedText;
  workload: LocalizedText;
  format: LocalizedText;
};

// Pricing metadata supports fixed prices and planning-based estimates.
export type PricingInfo = {
  basePrice: number;
  isByPlanning?: boolean;
};

// Discount rules are currently informative and can be surfaced in booking copy.
export type DiscountTier = {
  minCourses: number;
  discountPercentage: number;
};

// Main curriculum-oriented offer shown in the "forløb" section.
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

// Shorter standalone add-on offer shown as a focus course.
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

// Normalized booking option shape derived from tracks and focus courses.
export type BookableOption = {
  id: string;
  title: LocalizedText;
  kind: 'track' | 'focus';
  pricing: PricingInfo;
};
