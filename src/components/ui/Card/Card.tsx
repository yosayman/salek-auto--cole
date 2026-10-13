/**
 * @file Card.tsx
 * @description Generic surface card atom — used by LicenseCard, Journey steps, etc.
 *
 * @example
 * <Card className={styles.licenseCard}>...</Card>
 */
import React from 'react';
import { cn } from '@/lib/utils/cn';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Elevation level for box-shadow intensity. Defaults to "base". */
  elevation?: 'flat' | 'base' | 'raised';
  /** Adds interactive hover effect when true. */
  interactive?: boolean;
}

/**
 * @param children - Card body content.
 * @param elevation - Shadow depth preset.
 * @param interactive - Enables hover lift animation.
 */
export function Card({
  children,
  className,
  elevation = 'base',
  interactive = false,
}: CardProps): React.ReactElement {
  return (
    <div
      className={cn(
        styles.card,
        styles[elevation],
        interactive && styles.interactive,
        className
      )}
    >
      {children}
    </div>
  );
}
