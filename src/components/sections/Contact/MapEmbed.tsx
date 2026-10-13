/**
 * @file MapEmbed.tsx
 * @description Secure Google Maps iframe embed with sandbox and referrer policy.
 */
import React from 'react';
import styles from './Contact.module.css';

interface MapEmbedProps {
  src: string;
  title: string;
}

/**
 * @param src - The Google Maps embed URL.
 * @param title - Accessible title for the iframe.
 */
export function MapEmbed({ src, title }: MapEmbedProps): React.ReactElement {
  return (
    <div className={styles.mapWrapper}>
      <iframe
        src={src}
        title={title}
        className={styles.map}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin"
        aria-label={title}
      />
    </div>
  );
}
