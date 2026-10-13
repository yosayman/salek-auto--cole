/**
 * @file carousel.constants.ts
 * @description Static data for the photo carousel showcasing the school's fleet,
 * reception office, simulator, and driving training sessions in Laâyoune.
 */

export interface CarouselSlide {
  readonly id: string;
  readonly image: string;
  readonly alt: string;
  readonly badge: string;
  readonly title: string;
  readonly description: string;
}

export const CAROUSEL_SLIDES: readonly CarouselSlide[] = [
  {
    id: 'slide-1',
    image: '/images/carousel/I1.jpeg',
    alt: 'مكتب الاستقبال والتسجيل بمقر مدرسة سالك بشارع حبوها بالعيون',
    badge: '',
    title: 'مكتب الاستقبال والتوجيه',
    description: 'فريق متخصص يرحب بكم بشارع حبوها (قرب بيم) لتقديم الاستشارة وتسهيل كافة إجراءات إيداع الملف الإداري.',
  },
  {
    id: 'slide-2',
    image: '/images/carousel/I2.jpeg',
    alt: 'مكتب الاستقبال والتسجيل بمقر مدرسة سالك بشارع حبوها بالعيون',
    badge: '',
    title: 'أسطول سيارات حديث ومكيف',
    description: 'مرافقة شخصية وتوجيه دقيق في حلبة التدريب وعلى الطريق، باش تضبط المناورات وقواعد السياقة بثقة وأمان تام.',
  },
  {
    id: 'slide-3',
    image: '/images/carousel/I3.jpeg',
    alt: 'مكتب الاستقبال والتسجيل بمقر مدرسة سالك بشارع حبوها بالعيون',
    badge: '',
    title: '',
    description: '',
  },
  {
    id: 'slide-4',
    image: '/images/carousel/I4.jpeg',
    alt: 'مكتب الاستقبال والتسجيل بمقر مدرسة سالك بشارع حبوها بالعيون',
    badge: '',
    title: '',
    description: '',
  },
 
  
] as const;
