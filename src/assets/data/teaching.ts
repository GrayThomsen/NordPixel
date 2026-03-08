/**
 * Teaching-related data: topics and pricing logic
 */

// topics aimed at 5th-10th grade level
export const teachingTopics = [
  'Basic Web Development (HTML, CSS, JavaScript)',
  'A.I. in Web Development',
  'SEO Fundamentals',
  'Full-stack concepts for beginners',
  'Game development basics',
  '3D workflow overview',
  'Digital integration techniques',
];

// pricing tiers by region
export type Region = 'nordsjaelland' | 'rest-sjaelland' | 'fyn' | 'jylland-bornholm';

export const regionPrices: Record<Region, number> = {
  nordsjaelland: 1500,
  'rest-sjaelland': 2000,
  fyn: 2300,
  'jylland-bornholm': 2500,
};

/**
 * Calculate price given a region key. Defaults to highest tier if unknown.
 */
export function calculateTeachingPrice(region: Region): number {
  return regionPrices[region] ?? regionPrices['jylland-bornholm'];
}
