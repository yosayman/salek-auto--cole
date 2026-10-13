/**
 * @file SectionTitle.tsx
 * @description Reusable section heading atom with optional Arabic subtitle.
 *
 * @example
 * <SectionTitle title="رخص القيادة" subtitle="اختر ما يناسب احتياجاتك" />
 */
import React from 'react';
import { cn } from '@/lib/utils/cn';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
  className?: string;
}

/**
 * @param title - Main heading text (rendered as `<h2>`).
 * @param subtitle - Optional descriptive paragraph below the heading.
 * @param align - Text alignment within the block. Defaults to "center".
 */
export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps): React.ReactElement {
  return (
    <div className={cn(styles.wrapper, styles[align], className)}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <span className={styles.underline} aria-hidden="true" />
    </div>
  );
}
