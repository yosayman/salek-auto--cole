/**
 * @file license.constants.ts
 * @description Static data for all driving license categories offered in Laâyoune.
 */
import { LicenseCategory } from '@/types/license.types';

export const LICENSE_CATEGORIES: readonly LicenseCategory[] = [
  {
    id: 'B',
    label: 'B',
    title: 'رخصة السيارة (الصنف B)',
    description:
      ' تدريب عملي ذو جودة عالية ',
    duration: ' ساعات تطبيقية + كود غير محدود',
    price: 'من 2000 درهم',
    features: [
      ' سيارات حديثة ومكيفة  ',
      'تدريب ذو جودة عالية',
      'توقيت مرن (مسائي) مريح وملائم',
    ],
    isPopular: true,
  },
  
] as const;
