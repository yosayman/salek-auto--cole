/**
 * @file journey.types.ts
 * @description Types for the 4-step learning journey roadmap component.
 */

/** Valid step identifiers — strictly 1 through 4. */
export type StepId = 1 | 2 | 3 | 4;

/**
 * A single step in the Salek learning journey.
 * @example
 * const step: JourneyStep = JOURNEY_STEPS[0];
 */
export interface JourneyStep {
  readonly id: StepId;
  /** Lucide React icon name string */
  readonly icon: string;
  /** Step title in Arabic */
  readonly title: string;
  readonly description: string;
  /** Optional hint displayed below the description, e.g. "~2 أسابيع" */
  readonly duration: string | null;
}
