export const typography = {
  fonts: {
    display: 'var(--font-cabinet-grotesk)',
    body: 'var(--font-switzer)',
  },
  scale: {
    hero: 'clamp(3.25rem, 8vw, 9rem)',        // Hero headline — massive
    display: 'clamp(2.75rem, 5vw, 5rem)',      // Section headlines
    editorial: 'clamp(2.25rem, 4vw, 4rem)',    // Sub-section headlines
    quote: 'clamp(1.5rem, 3vw, 2.5rem)',       // Testimonial quotes
    heading: 'clamp(1.25rem, 2vw, 1.75rem)',   // Card/panel titles
    'body-lg': 'clamp(1.0625rem, 1vw, 1.25rem)',
    body: '1rem',
    sm: '0.875rem',
    xs: '0.75rem',
  },
};
