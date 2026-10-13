/**
 * @file school.types.ts
 * @description Core domain types for Salek Driving School's identity,
 * contact information, and operating hours.
 */

/** Operating hours for a single day or day range. */
export interface DayHours {
  readonly day: string;
  readonly open: string;
  readonly close: string;
  readonly closed: boolean;
}

/** Social media profile links. */
export interface SocialLinks {
  readonly facebook: string;
  readonly instagram: string;
}

/** Full contact and address block. */
export interface ContactInfo {
  /** Primary phone in E.164 format, e.g. "+212612345678" */
  readonly phone: string;
  /** WhatsApp-ready number without + prefix, e.g. "212612345678" */
  readonly whatsapp: string;
  readonly email: string | null;
  /** Full Arabic address string */
  readonly address: string;
  readonly googleMapsUrl: string;
  /** Embeddable Google Maps iframe src URL */
  readonly mapEmbedSrc: string;
}

/**
 * Aggregated model for all static school data.
 * @example
 * const school: SchoolInfo = SCHOOL_DATA;
 */
export interface SchoolInfo {
  readonly name: string;
  readonly tagline: string;
  readonly contact: ContactInfo;
  readonly workingHours: readonly DayHours[];
  readonly socialLinks: Partial<SocialLinks>;
}
