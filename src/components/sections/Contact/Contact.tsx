/**
 * @file Contact.tsx
 * @description Contact & Location section for Salek Driving School in Laâyoune.
 * Displays school address on Mecca Street, phone, working hours, interactive map, and inquiry form.
 */
import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { Button } from '@/components/ui/Button/Button';
import { MapEmbed } from './MapEmbed';
import { ContactForm } from './ContactForm';
import { PhotoCarousel } from './PhotoCarousel';
import { SchoolInfo } from '@/types/school.types';
import styles from './Contact.module.css';

interface ContactProps {
  schoolInfo: SchoolInfo;
}

/**
 * @param schoolInfo - All contact, address, and working hours data.
 */
export function Contact({ schoolInfo }: ContactProps): React.ReactElement {
  const { contact, workingHours } = schoolInfo;
  const cleanWaNumber = contact.whatsapp.replace(/\D/g, '');

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <SectionTitle
          title="تفضل بزيارتنا في مقرنا بالعيون"
          subtitle="فريقنا يرحب بك بشارع حبوها لتقديم كل الإرشادات والإجابة عن استفساراتك حول رخص القيادة"
        />

        {/* Photo Carousel: Fleet, Facilities & Lessons */}
        <PhotoCarousel />

        <div className={styles.layout}>
          {/* Left: Info + Map */}
          <div className={styles.infoColumn}>
            {/* Contact Details Card */}
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <h3 className={styles.infoTitle}>معلومات التواصل والموقع</h3>
              </div>

              <ul className={styles.infoList} aria-label="تفاصيل التواصل وموقع المدرسة">
                <li className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <strong className={styles.itemLabel}>العنوان:</strong>
                    <p className={styles.itemValue}>{contact.address}</p>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <strong className={styles.itemLabel}>الهاتف الثابت / الجوال:</strong>
                    <p>
                      <a
                        href={`tel:${contact.phone}`}
                        className={styles.infoLink}
                        aria-label={`اتصل بمقر المدرسة على ${contact.phone}`}
                      >
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <strong className={styles.itemLabel}>واتساب المباشر:</strong>
                    <p>
                      <a
                        href={`https://wa.me/${cleanWaNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.infoLink}
                        aria-label="تواصل مع إدارة المدرسة عبر واتساب"
                      >
                        +{contact.whatsapp}
                      </a>
                    </p>
                  </div>
                </li>
              </ul>

              {/* Working Hours */}
              <div className={styles.hoursWrapper}>
                <h4 className={styles.hoursTitle}>⏰ أوقات العمل والاستقبال (توقيت ملائم)</h4>
                <ul className={styles.hoursList} aria-label="ساعات عمل المدرسة">
                  {workingHours.map((wh) => (
                    <li key={wh.day} className={styles.hoursItem}>
                      <span className={styles.hoursDay}>{wh.day}</span>
                      <span
                        className={`${styles.hoursTime} ${wh.closed ? styles.closed : ''}`}
                      >
                        {wh.closed ? 'عطلة أسبوعية' : `${wh.open} — ${wh.close}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Actions */}
              <div className={styles.quickActions}>
                <Button
                  variant="primary"
                  href={`tel:${contact.phone}`}
                  aria-label="اتصل بالمدرسة مباشرة"
                >
                  📞 اتصل بنا
                </Button>
                <Button
                  variant="whatsapp"
                  href={`https://wa.me/${cleanWaNumber}`}
                  target="_blank"
                  aria-label="تواصل عبر واتساب"
                >
                  واتساب فوري
                </Button>
              </div>
            </div>

            {/* Map Embed */}
            <MapEmbed
              src={contact.mapEmbedSrc}
              title="موقع مدرسة سيارات تعليم سالك بالعيون على الخريطة"
            />
          </div>

          {/* Right: Form */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>سجّل اهتمامك أو احجز موعدك</h3>
              <p className={styles.formSubtitle}>
                املأ النموذج أسفله وسيتصل بك مستشار التكوين بالعيون خلال أقل من 24 ساعة
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
