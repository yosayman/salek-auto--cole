/**
 * @file Hero.tsx
 * @description Cinematic full-screen hero section — FourthWall inspired layout
 * with desert architectural background, massive focal typography, bottom-bar
 * elements, and a floating glassmorphism trust card.
 */
import React from 'react';
import { SchoolInfo } from '@/types/school.types';
import styles from './Hero.module.css';

interface HeroProps {
  schoolInfo: SchoolInfo;
}

/**
 * @param schoolInfo - School contact, name, and social data.
 */
export function Hero({ schoolInfo: _schoolInfo }: HeroProps): React.ReactElement {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-heading"
      id="hero"
    >
      {/* Cinematic Background */}
      <div className={styles.bgImage} aria-hidden="true" />
      <div className={styles.bgOverlay} aria-hidden="true" />

      {/* ── CENTER: Massive Focal Title ── */}
      <div className={styles.centerStage}>
        <h1 id="hero-heading" className={styles.mainTitle}>
          مدرسة السالك
        </h1>
        <p className={styles.subTitle}>
          رواد تعليم السياقة في مدينة العيون
          <span className={styles.subTitleDash}> — </span>
          طريقك الأكيد نحو رخصة القيادة بأمان واحتراف
        </p>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={styles.bottomBar} aria-label="معلومات إضافية وروابط التواصل">

        {/* Bottom-Left: Hashtag + Description */}
        <div className={styles.bottomLeft}>
          <p className={styles.hashtag}>#رواد_السياقة_بالعيون</p>
          <p className={styles.bottomDesc}>
            بشارع حبوها — أصالة الاستقبال وأحدث أساليب
            <br />
            التدريب الميداني والنظري المعتمدة وطنياً
          </p>
        </div>

        {/* Bottom-Center: Scroll Arrow */}
        <div className={styles.scrollArrow} aria-label="اسحب للأسفل">
          <a href="#services" className={styles.arrowBtn} aria-label="انتقل إلى الخدمات">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>

        {/* Bottom-Right: Glassmorphism Trust Card */}
        <div className={styles.trustCard} role="complementary" aria-label="بيانات الاعتماد والتواصل">
          <p className={styles.trustCardTitle}>اعتمادات المدرسة</p>
          <ul className={styles.trustList} aria-label="شارات الاعتماد">
            <li className={styles.trustItem}>
              <span className={styles.trustDot} aria-hidden="true" />
              معتمدة بجهة العيون الساقية الحمراء
            </li>
            <li className={styles.trustItem}>
              <span className={styles.trustDot} aria-hidden="true" />
              ترخيص رسمي من وزارة النقل واللوجستيك
            </li>
            <li className={styles.trustItem}>
              <span className={styles.trustDot} aria-hidden="true" />
              أكثر من 500 خريج ناجح
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
