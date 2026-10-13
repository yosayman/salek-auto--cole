/**
 * @file FormField.tsx
 * @description Accessible form field atom: label + input/select + error message.
 * Handles aria-describedby for screen-reader error association.
 *
 * @example
 * <FormField
 *   id="phone"
 *   label="رقم الهاتف"
 *   error={errors.phone}
 *   inputProps={{ type: 'tel', value: fields.phone, onChange: ... }}
 * />
 */
import React from 'react';
import { cn } from '@/lib/utils/cn';
import styles from './FormField.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface BaseFieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  required?: boolean;
}

interface InputFieldProps extends BaseFieldProps {
  as?: 'input';
  options?: never;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

interface SelectFieldProps extends BaseFieldProps {
  as: 'select';
  options: SelectOption[];
  inputProps: React.SelectHTMLAttributes<HTMLSelectElement>;
}

type FormFieldProps = InputFieldProps | SelectFieldProps;

/**
 * @param id - Used to wire label `htmlFor` and `aria-describedby`.
 * @param label - Visible field label in Arabic.
 * @param error - Validation error message string.
 * @param as - Renders `<input>` (default) or `<select>`.
 * @param options - Required when `as="select"`.
 * @param inputProps - Native element attributes passed through.
 */
export function FormField(props: FormFieldProps): React.ReactElement {
  const { id, label, error, className, required, as = 'input' } = props;
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  return (
    <div className={cn(styles.field, hasError && styles.hasError, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-label="مطلوب">
            *
          </span>
        )}
      </label>

      {as === 'select' ? (
        <select
          id={id}
          className={styles.input}
          aria-describedby={hasError ? errorId : undefined}
          aria-invalid={hasError}
          {...(props as SelectFieldProps).inputProps}
        >
          <option value="">— اختر نوع الرخصة —</option>
          {(props as SelectFieldProps).options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          className={styles.input}
          aria-describedby={hasError ? errorId : undefined}
          aria-invalid={hasError}
          {...(props as InputFieldProps).inputProps}
        />
      )}

      {hasError && (
        <p id={errorId} className={styles.error} role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}
