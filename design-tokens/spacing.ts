export const spacing = {
  // Base spacing scale
  1: '4px',
  2: '8px',
  3: '16px',
  4: '24px',
  5: '32px',
  6: '48px',
  7: '64px',
  8: '96px',

  // Section spacing — compression ↔ expansion rhythm
  // No two consecutive sections should share the same padding
  sectionTight: 'clamp(64px, 6vw, 80px)',       // Marquee, compact sections
  sectionNormal: 'clamp(100px, 10vw, 140px)',    // Standard sections
  sectionGenerous: 'clamp(140px, 14vw, 200px)',  // Gallery entry, process

  // Grid system
  // Desktop >=1280px: 12 cols, 24px gutter, 80-120px margin, max content 1440px
  // Laptop 1024-1279px: 12 cols, 20px gutter, 48-64px margin
  // Tablet 768-1023px: 8 cols, 16px gutter, 32px margin
  // Mobile <=767px: 4 cols, 16px gutter, 20px margin
};
