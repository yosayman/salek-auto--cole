/**
 * @file Badge.tsx
 * @description Trust badge / tag atom used across the Hero and License sections.
 *
 * @example
 * <Badge label="✓ مرخص رسمياً" variant="success" />
 */
import React from 'react';
import { cn } from '@/lib/utils/cn';
import styles from './Badge.module.css';

export type BadgeVariant = 'primary' | 'success' | 'neutral' | 'popular';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

/**
 * @param label - Text displayed inside the badge.
 * @param variant - Color style. Defaults to "primary".
 */
export function Badge({
  label,
  variant = 'primary',
  className,
}: BadgeProps): React.ReactElement {
  return (
    <span className={cn(styles.badge, styles[variant], className)}>
      {label}
    </span>
  );
}
