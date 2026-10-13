/**
 * @file school.constants.ts
 * @description Static school identity and contact data for Salek Driving School in Laâyoune.
 * All phone numbers and location metadata stored here — never hardcoded in JSX.
 */
import { SchoolInfo } from '@/types/school.types';

export const SCHOOL_DATA: SchoolInfo = {
  name: 'سيارات تعليم سالك',
  tagline: 'رواد تعليم السياقة بالعيون — من رمال الصحراء إلى كل طرقات المملكة بثقة وأمان',
  contact: {
    phone: '+212 627-249159',
    whatsapp: '+212 627-249159',
    email: 'contact@salek-layoune.ma',
    address: 'شارع حبوها، عمارة 42 (قرب بيم)، العيون',
    googleMapsUrl: 'https://maps.google.com/?q=27.1536,-13.2033',
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.839659344275!2d-13.2125927!3d27.1536098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc37a4e69b008d51%3A0xb249f8b42ec2fa61!2sLaayoune!5e0!3m2!1sar!2sma!4v1710000000000!5m2!1sar!2sma',
  },
  workingHours: [
    { day: 'الإثنين — الجمعة (صباحاً)', open: '08:30', close: '13:00', closed: false },
    { day: 'الإثنين — الجمعة (مساءً)', open: '16:00', close: '20:30', closed: false },
    { day: 'السبت', open: '09:00', close: '14:00', closed: false },
    { day: 'الأحد', open: '', close: '', closed: true },
  ],
  socialLinks: {
    facebook: 'https://facebook.com/autoecolesalek.laayoune',
    instagram: 'https://instagram.com/salek_driving_laayoune',
  },
};
