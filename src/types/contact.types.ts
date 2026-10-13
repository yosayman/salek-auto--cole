/**
 * @file contact.types.ts
 * @description Zod schema and derived TypeScript types for the contact form.
 * Enforces Moroccan mobile number validation at runtime.
 */
import { z } from 'zod';
import { LicenseCategoryId } from './license.types';

/**
 * Moroccan mobile number regex.
 * Matches: +212 6x xxxxxxxx | +212 7x xxxxxxxx | 06xxxxxxxx | 07xxxxxxxx
 */
const MOROCCAN_PHONE_REGEX = /^(?:\+212|0)(6|7)\d{8}$/;

/** Exhaustive tuple of valid license category IDs for Zod enum. */
const LICENSE_CATEGORY_VALUES: [LicenseCategoryId, ...LicenseCategoryId[]] = [
  'B',
  'A',
  'C',
  'D',
  'C_D',
];

/**
 * Zod schema for the contact form.
 * Use `safeParse()` — never `parse()` — to handle errors gracefully.
 *
 * @example
 * const result = ContactFormSchema.safeParse(formData);
 * if (!result.success) { handle(result.error.flatten()); }
 */
export const ContactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'الاسم الكامل يجب أن يكون 3 أحرف على الأقل' })
    .max(60, { message: 'الاسم طويل جداً (60 حرفاً كحد أقصى)' }),

  phone: z
    .string()
    .regex(MOROCCAN_PHONE_REGEX, {
      message: 'رقم الهاتف غير صحيح — مثال: 0612345678 أو +212612345678',
    }),

  licenseCategory: z.enum(LICENSE_CATEGORY_VALUES, {
    message: 'يرجى اختيار نوع الرخصة المطلوبة',
  }),

  message: z
    .string()
    .max(500, { message: 'الرسالة طويلة جداً (500 حرف كحد أقصى)' })
    .optional(),
});

/** Inferred type from the Zod schema — single source of truth. */
export type ContactFormData = z.infer<typeof ContactFormSchema>;

/** Per-field error messages map. */
export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

/** Possible submission states for the form. */
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
