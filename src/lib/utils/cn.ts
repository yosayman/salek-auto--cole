/**
 * @file cn.ts
 * @description Lightweight CSS class-name composer utility.
 * Filters out falsy values and joins remaining class strings.
 *
 * @example
 * cn(styles.base, isActive && styles.active, className)
 * // → "base active customClass"
 *
 * @param classes - Any mix of strings or falsy values.
 * @returns A single trimmed class string.
 */
export function cn(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(' ');
}
