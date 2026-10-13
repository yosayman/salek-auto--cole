/**
 * @file ContactForm.tsx
 * @description Contact form organism — wires FormField atoms to the useContactForm hook.
 * No validation logic here; all state lives in the hook.
 */
'use client';

import React from 'react';
import { FormField } from '@/components/ui/FormField/FormField';
import { Button } from '@/components/ui/Button/Button';
import { useContactForm } from '@/hooks/useContactForm';
import { LicenseCategoryId } from '@/types/license.types';
import styles from './Contact.module.css';

const LICENSE_OPTIONS: Array<{ value: LicenseCategoryId; label: string }> = [
  { value: 'B', label: 'رخصة B — سيارة خاصة' },
];

export function ContactForm(): React.ReactElement {
  const { fields, errors, status, handleChange, handleSubmit } =
    useContactForm();

  if (status === 'success') {
    return (
      <div className={styles.successState} role="alert" aria-live="assertive">
        <span className={styles.successIcon}>✅</span>
        <h3 className={styles.successTitle}>تم الإرسال بنجاح!</h3>
        <p className={styles.successText}>
          شكراً لاهتمامك — سنتواصل معك في أقرب وقت ممكن.
        </p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="نموذج التواصل"
    >
      <FormField
        id="fullName"
        label="الاسم الكامل"
        required
        error={errors.fullName}
        inputProps={{
          type: 'text',
          value: fields.fullName ?? '',
          onChange: (e) => handleChange('fullName', e.target.value),
          placeholder: 'أدخل اسمك الكامل',
          maxLength: 60,
          autoComplete: 'name',
        }}
      />

      <FormField
        id="phone"
        label="رقم الهاتف"
        required
        error={errors.phone}
        inputProps={{
          type: 'tel',
          value: fields.phone ?? '',
          onChange: (e) => handleChange('phone', e.target.value),
          placeholder: 'مثال: 0612345678',
          maxLength: 15,
          autoComplete: 'tel',
          dir: 'ltr',
        }}
      />

      <FormField
        id="licenseCategory"
        label="نوع الرخصة المطلوبة"
        as="select"
        required
        error={errors.licenseCategory}
        options={LICENSE_OPTIONS}
        inputProps={{
          value: fields.licenseCategory ?? '',
          onChange: (e) =>
            handleChange(
              'licenseCategory',
              e.target.value as LicenseCategoryId
            ),
        }}
      />

      <FormField
        id="message"
        label="رسالة إضافية (اختياري)"
        error={errors.message}
        inputProps={{
          value: fields.message ?? '',
          onChange: (e) => handleChange('message', e.target.value),
          placeholder: 'هل لديك سؤال أو ملاحظة؟',
          maxLength: 500,
          // @ts-expect-error — textarea not natively typed here; still renders correctly
          as: 'textarea',
        }}
      />

      {status === 'error' && (
        <p className={styles.submitError} role="alert">
          ⚠ حدث خطأ أثناء الإرسال — يرجى المحاولة مجدداً.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === 'submitting'}
        className={styles.submitBtn}
        aria-label="إرسال نموذج التواصل"
      >
        {status === 'submitting' ? 'جارٍ الإرسال…' : 'إرسال الطلب ✓'}
      </Button>
    </form>
  );
}
