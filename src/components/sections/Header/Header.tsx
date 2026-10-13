/**
 * @file Header.tsx
 * @description Responsive navigation header with sticky scroll effect and Laâyoune identity.
 * Renders the school name, city badge, direct call CTA, and mobile navigation.
 */
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils/cn';
import { SchoolInfo } from '@/types/school.types';
import styles from './Header.module.css';

interface HeaderProps {
  schoolInfo: SchoolInfo;
}

/**
 * @param schoolInfo - School name and contact data for CTA rendering.
 */
export function Header({ schoolInfo }: HeaderProps): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: Array<{ href: string; label: string }> = [
    { href: '#services', label: 'رخص القيادة' },
    { href: '#journey', label: 'مراحل التكوين' },
    { href: '#contact', label: 'مقرنا بالعيون' },
  ];

  return (
    <header
      className={cn(styles.header, isScrolled && styles.scrolled)}
      role="banner"
    >
      <div className={styles.container}>
        {/* Logo / School Name + City */}
        <a href="#" className={styles.logo} aria-label="الصفحة الرئيسية — سيارات تعليم سالك بالعيون">
          <div className={styles.logoInfo}>
            <span className={styles.logoText}>{schoolInfo.name}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="التنقل الرئيسي">
          <ul className={styles.navList} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={cn(styles.bar, menuOpen && styles.barOpen1)} />
          <span className={cn(styles.bar, menuOpen && styles.barOpen2)} />
          <span className={cn(styles.bar, menuOpen && styles.barOpen3)} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="قائمة التنقل للجوال">
          <ul className={styles.mobileNavList} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                variant="primary"
                href={`tel:${schoolInfo.contact.phone}`}
                className={styles.mobileCta}
              >
                📞 اتصل الآن بالعيون
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
