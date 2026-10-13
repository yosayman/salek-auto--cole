/**
 * @file Journey.tsx
 * @description 4-step learning roadmap section.
 * Maps JOURNEY_STEPS constant to JourneyStep molecules.
 */
import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { JourneyStep } from './JourneyStep';
import { JOURNEY_STEPS } from '@/constants/journey.constants';
import styles from './Journey.module.css';

export function Journey(): React.ReactElement {
  return (
    <section
      id="journey"
      className={styles.section}
      aria-labelledby="journey-heading"
    >
      <div className={styles.container}>
        <SectionTitle
          title="مسار تكوينك خطوة بخطوة "
          subtitle="من زيارة مقرنا بشارع حبوها إلى نيل رخصة السياقة الرسمية — خطة محكمة وتأطير دائم لضمان تفوقك"
        />

        <ol className={styles.stepsGrid} aria-label="مراحل التعلم الأربعة بمدرسة سالك">
          {JOURNEY_STEPS.map((step, index) => (
            <JourneyStep
              key={step.id}
              step={step}
              isLast={index === JOURNEY_STEPS.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
