/**
 * @file page.tsx
 * @description Landing page composition root for Salek Driving School in Laâyoune.
 * Imports all section organisms and assembles the full page layout.
 * All data flows from constants — zero hardcoded strings in JSX.
 */
import React from 'react';
import { Header } from '@/components/sections/Header/Header';
import { Hero } from '@/components/sections/Hero/Hero';
import { Services } from '@/components/sections/Services/Services';
import { Journey } from '@/components/sections/Journey/Journey';
import { Contact } from '@/components/sections/Contact/Contact';
import { SCHOOL_DATA } from '@/constants/school.constants';

/**
 * @returns The fully assembled landing page for Salek Driving School in Laâyoune.
 */
export default function HomePage(): React.ReactElement {
  return (
    <>
      <Header schoolInfo={SCHOOL_DATA} />

      <main id="main-content" tabIndex={-1}>
        <Hero schoolInfo={SCHOOL_DATA} />
        <Services schoolInfo={SCHOOL_DATA} />
        <Journey />
        <Contact schoolInfo={SCHOOL_DATA} />
      </main>

      <footer className="siteFooter" role="contentinfo">
        <div className="siteFooterContainer">


          <p className="siteFooterCopy">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} {SCHOOL_DATA.name}. مرخصة ومعتمدة من الوكالة الوطنية للسلامة الطرقية (NARSA).
          </p>
        </div>
      </footer>
    </>
  );
}

