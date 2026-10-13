/**
 * @file license.types.ts
 * @description Types for driving license categories offered by Salek Driving School.
 */

/** Supported license category identifiers. */
export type LicenseCategoryId = 'B' | 'A' | 'C' | 'D' | 'C_D';

/**
 * A single driving license category card data model.
 * @example
 * const licenseB: LicenseCategory = LICENSE_CATEGORIES[0];
 */
export interface LicenseCategory {
  readonly id: LicenseCategoryId;
  /** Short label displayed on badge, e.g. "B" */
  readonly label: string;
  /** Human-readable category title in Arabic */
  readonly title: string;
  readonly description: string;
  /** Training duration string, e.g. "20 ساعة تدريب" */
  readonly duration: string;
  /** Price range string, e.g. "من 1800 درهم" */
  readonly price: string;
  /** Bullet-point features list */
  readonly features: readonly string[];
  /** Highlight this card as the most popular choice */
  readonly isPopular: boolean;
}
