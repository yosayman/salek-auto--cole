/**
 * @file Services.tsx
 * @description Driving license categories section for Laâyoune.
 * Maps over LICENSE_CATEGORIES constant to render LicenseCard molecules.
 */
import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { LicenseCard } from './LicenseCard';
import { LICENSE_CATEGORIES } from '@/constants/license.constants';
import { SchoolInfo } from '@/types/school.types';
import styles from './Services.module.css';

interface ServicesProps {
  schoolInfo: SchoolInfo;
}

/**
 * @param schoolInfo - Provides WhatsApp number for card CTAs.
 */
export function Services({ schoolInfo }: ServicesProps): React.ReactElement {
  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className={styles.container}>
        <SectionTitle
          title="رخص القيادة المعتمدة المتوفرة"
          subtitle=" تدريب ميداني ونظري متميز "
        />

        <div
          className={styles.grid}
          role="list"
          aria-label="قائمة رخص القيادة المتوفرة بالعيون"
        >
          {LICENSE_CATEGORIES.map((category) => (
            <div key={category.id} role="listitem">
              <LicenseCard
                category={category}
                whatsapp={schoolInfo.contact.whatsapp}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
