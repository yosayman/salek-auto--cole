'use client';

/**
 * @file PhotoCarousel.tsx
 * @description Interactive photo carousel showcasing Salek Driving School's
 * modern fleet, reception desk, simulation systems, and training lessons in Laâyoune.
 * Features rounded cards, smooth navigation (arrows, dots, thumbnails), and warm desert aesthetic.
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CAROUSEL_SLIDES } from '@/constants/carousel.constants';
import styles from './PhotoCarousel.module.css';

const AUTOPLAY_INTERVAL_MS = 5000;

export function PhotoCarousel(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const totalSlides = CAROUSEL_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers (supports RTL swipe)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    // Minimum swipe threshold
    if (Math.abs(diffX) > 40) {
      // In RTL: swiping left advances forward
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      prevSlide(); // RTL: right goes backward
    } else if (e.key === 'ArrowLeft') {
      nextSlide(); // RTL: left goes forward
    }
  };

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="معرض صور مرافق وأسطول مدرسة سالك"
      tabIndex={0}
    >


      {/* Main Viewport */}
      <div
        className={styles.viewport}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {CAROUSEL_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} من ${totalSlides}: ${slide.title}`}
              aria-hidden={!isActive}
            >
              {/* Blurred background fill — covers sides for portrait images */}
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className={styles.slideBlurBg}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles.slideImage}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <div className={styles.scrim} aria-hidden="true" />

              {/* Top metadata */}
              <div className={styles.slideTopBar}>
                {slide.badge && (
                  <span className={styles.slideBadge}>{slide.badge}</span>
                )}
                <span className={styles.counterBadge}>
                  {index + 1} / {totalSlides}
                </span>
              </div>

              {/* Caption */}
              <div className={styles.caption}>
                <h4 className={styles.captionTitle}>{slide.title}</h4>
                <p className={styles.captionDesc}>{slide.description}</p>
              </div>
            </div>
          );
        })}

        {/* Floating Side Arrows */}
        <button
          type="button"
          className={`${styles.floatingArrow} ${styles.arrowPrev}`}
          onClick={prevSlide}
          aria-label="الصورة السابقة"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <button
          type="button"
          className={`${styles.floatingArrow} ${styles.arrowNext}`}
          onClick={nextSlide}
          aria-label="الصورة التالية"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      {/* Bottom Controls: Dots & Desktop Thumbnail Previews */}
      <div className={styles.bottomControls}>
        {/* Indicator Dots */}
        <ul className={styles.dotsList} role="tablist" aria-label="مؤشرات الصور">
          {CAROUSEL_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <li key={slide.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  className={`${styles.dotBtn} ${isActive ? styles.dotActive : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-selected={isActive}
                  aria-label={`الانتقال إلى صورة ${index + 1}: ${slide.title}`}
                />
              </li>
            );
          })}
        </ul>

        {/* Thumbnail Strip (Interactive for Desktop) */}
        <div className={styles.thumbnailsTrack} aria-label="معاينة الصور">
          {CAROUSEL_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                className={`${styles.thumbnailCard} ${isActive ? styles.thumbnailActive : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`عرض ${slide.title}`}
              >
                <img
                  src={slide.image}
                  alt=""
                  className={styles.thumbnailImg}
                  loading="lazy"
                />
                <span className={styles.thumbnailLabel}>{slide.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
