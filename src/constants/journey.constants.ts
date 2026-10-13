/**
 * @file journey.constants.ts
 * @description Static data for the 4-step learning roadmap at Salek Driving School, Laâyoune.
 */
import { JourneyStep } from '@/types/journey.types';

export const JOURNEY_STEPS: readonly JourneyStep[] = [
  {
    id: 1,
    icon: 'ClipboardList',
    title: 'التسجيل والاستقبال',
    description:
      'نرحب بك في مقرنا بشارع حبوها قرب ، نساعدك في إعداد ملفك الإداري واختيار الصنف المناسب لطموحاتك بكل سهولة.',
    duration: 'يوم واحد فقط',
  },
  {
    id: 2,
    icon: 'BookOpen',
    title: 'الكود النظري وقانون السير',
    description:
      'قاعات مجهزة ومكيفة بأحدث شاشات الاختبار وبنك أسئلة NARSA التفاعلي الجديد، تحت إشراف أساتذة قانون سير أكفاء.',
    duration: '2 — 4 أسابيع',
  },
  {
    id: 3,
    icon: 'Car',
    title: 'التدريب الميداني المتقن',
    description:
      'سياقة تطبيقية في شوارع العيون الفسيحة، الحلبة المغلقة، والطريق الوطنية، لتمكينك من قيادة احترافية وواثقة.',
    duration: '3 — 5 أسابيع',
  },
  {
    id: 4,
    icon: 'Award',
    title: 'الامتحان ونيل الرخصة الرسمية',
    description:
      'نرافقك في يوم الامتحان حتى اجتيازه بنجاح، لتتسلم رخصة سياقتك وتنضم لقائمة أكثر من 250 خريج معتمد بالصحراء المغربية.',
    duration: 'الهدف النهائي',
  },
] as const;
