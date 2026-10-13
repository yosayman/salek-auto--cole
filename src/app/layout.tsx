/**
 * @file layout.tsx
 * @description Root application layout.
 * Sets RTL direction, Arabic language, Google Fonts, and Laâyoune regional SEO metadata.
 */
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://votredomaine.ma'),
  title: 'سيارات تعليم سالك بالعيون — مدرسة تعليم السياقة المعتمدة بالصحراء المغربية',
  description:
    'مدرسة سالك لتعليم السياقة بشارع مكة بمدينة العيون — رخص B، A، C/D بأحدث أسطول مكيف وتدريب متخصص على امتحانات نارسا (NARSA) وطرقات الصحراء.',
  keywords: [
    'مدرسة تعليم السياقة العيون',
    'سيارات تعليم سالك',
    'رخصة السياقة العيون',
    'جهة العيون الساقية الحمراء',
    'تعليم السياقة الصحراء المغربية',
    'رخصة B العيون',
    'شارع حبوها العيون',
    'امتحانات نارسا NARSA',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'سيارات تعليم سالك بالعيون — رواد تعليم السياقة بالصحراء المغربية',
    description: 'احصل على رخصتك بثقة وأمان مع أفضل المدربين المعتمدين بمدينة العيون بشارع مكة.',
    locale: 'ar_MA',
    type: 'website',
    images: [
    {
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'مدرسة سالك لتعليم السياقة بالعيون',
    },
  ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C67D34',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * @param children - Page content injected by Next.js App Router.
 */
export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
