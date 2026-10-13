/**
 * @file JourneyStep.tsx
 * @description Molecule — a single step card in the learning journey roadmap.
 * Renders a professional SVG icon, step number, title, description, and connector line.
 */
import React from 'react';
import { JourneyStep as JourneyStepType } from '@/types/journey.types';
import styles from './JourneyStep.module.css';

interface JourneyStepProps {
  step: JourneyStepType;
  isLast: boolean;
}

function StepIcon({ name }: { name: string }): React.ReactElement {
  switch (name) {
    case 'ClipboardList':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      );
    case 'BookOpen':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case 'Car':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.6 0-1.1.4-1.4.9l-1.5 3c-.3.5-.5 1.1-.5 1.7v2.4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case 'Award':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34" />
          <path d="M18 4H6v7a6 6 0 0 0 12 0V4Z" />
        </svg>
      );
    default:
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

/**
 * @param step - Step data from JOURNEY_STEPS constant.
 * @param isLast - When true, suppresses the connector line after this step.
 */
export function JourneyStep({ step, isLast }: JourneyStepProps): React.ReactElement {
  return (
    <li className={styles.stepWrapper} aria-label={`الخطوة ${step.id}: ${step.title}`}>
      {/* Connector */}
      {!isLast && <span className={styles.connector} aria-hidden="true" />}

      <div className={styles.step}>
        {/* Icon circle */}
        <div className={styles.iconCircle} aria-hidden="true">
          <span className={styles.icon}>
            <StepIcon name={step.icon} />
          </span>
          <span className={styles.stepNumber}>{step.id}</span>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.description}>{step.description}</p>
        </div>
      </div>
    </li>
  );
}
