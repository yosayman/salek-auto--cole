/**
 * @file LicenseCard.tsx
 * @description Molecule — a single license category card.
 * Reuses the Card atom. Displays price, features, and a CTA link.
 */
import React from 'react';
import { Card } from '@/components/ui/Card/Card';
import { Badge } from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import { LicenseCategory } from '@/types/license.types';
import styles from './LicenseCard.module.css';

interface LicenseCardProps {
  category: LicenseCategory;
  whatsapp: string;
}

/**
 * @param category - Full license category data object.
 * @param whatsapp - School WhatsApp number for CTA link.
 */
export function LicenseCard({
  category,
  whatsapp,
}: LicenseCardProps): React.ReactElement {
  const waUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    `مرحباً، أريد التسجيل في رخصة ${category.label} - ${category.title}`
  )}`;

  return (
    <Card
      interactive
      className={`${styles.card} ${category.isPopular ? styles.popular : ''}`}
    >
      

      {/* Header */}
      <div className={styles.cardHeader}>
        <span className={styles.categoryLabel} aria-label={`رخصة ${category.label}`}>
          {category.label}
        </span>
        <div>
          <h3 className={styles.cardTitle}>{category.title}</h3>
          <p className={styles.cardDescription}>{category.description}</p>
        </div>
      </div>

      {/* Meta */}
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <span aria-hidden="true">⏱</span> {category.duration}
        </span>
        <span className={styles.price}>{category.price}</span>
      </div>

      {/* Features */}
      <ul className={styles.features} aria-label={`مميزات رخصة ${category.label}`}>
        {category.features.map((feature) => (
          <li key={feature} className={styles.featureItem}>
            <span className={styles.check} aria-hidden="true">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant="whatsapp"
        href={waUrl}
        target="_blank"
        className={styles.cta}
        aria-label={`سجّل في رخصة ${category.label} عبر واتساب`}
      >
        سجّل الآن عبر واتساب
      </Button>
    </Card>
  );
}
