/**
 * @file contact.validator.ts
 * @description Re-exports the Zod contact schema as the single validation
 * source of truth. Keeps all validation logic in lib — never in components.
 */
export {
  ContactFormSchema,
  type ContactFormData,
  type ContactFormErrors,
  type FormStatus,
} from '@/types/contact.types';
