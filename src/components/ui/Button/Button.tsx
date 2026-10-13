/**
 * @file Button.tsx
 * @description Reusable button atom supporting multiple variants and an anchor mode.
 * All external links get rel="noopener noreferrer" automatically.
 *
 * @example
 * <Button variant="primary" href="tel:+212600000000">اتصل بنا</Button>
 * <Button variant="whatsapp" onClick={handleClick}>واتساب</Button>
 */
import React from 'react';
import { cn } from '@/lib/utils/cn';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'outline' | 'whatsapp' | 'ghost';

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

interface ButtonAsButton extends BaseProps {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

interface ButtonAsAnchor extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
  target?: '_blank' | '_self';
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * @param variant - Visual style variant. Defaults to "primary".
 * @param href - If provided, renders an `<a>` tag instead of `<button>`.
 * @param children - Button label content.
 */
export function Button({
  variant = 'primary',
  className,
  children,
  'aria-label': ariaLabel,
  ...rest
}: ButtonProps): React.ReactElement {
  const classes = cn(styles.button, styles[variant], className);

  if ('href' in rest && rest.href) {
    const { href, target = '_self', ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const { onClick, type = 'button', disabled, ...btnRest } = rest as ButtonAsButton;
  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      {...btnRest}
    >
      {children}
    </button>
  );
}
