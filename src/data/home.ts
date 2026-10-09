export type Slide = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  meta: string
  cta: { label: string; to: string }
  layout?: 'full' | 'split' | 'split-pair'
  /**
   * Max object-position shift (%) as the viewport widens.
   * Optional; defaults to 0.
   */
  shift?: number
  /**
   * Shift direction: true = down, false = up.
   * Optional; defaults to true (down).
   */
  shiftDown?: boolean
  /** Primary / single image (full + single-split slides). */
  image?: string
  /** Pair of images for split-pair slides. */
  images?: [string, string]
  /**
   * Pair presentation:
   * - diagonal: both images as half-backgrounds with a slash at all sizes
   * - primary: staggered inset pair on desktop; first image only when narrow
   */
  collapse?: 'diagonal' | 'primary'
}

export const slides: Slide[] = [
  {
    id: 'pair-02-01',
    layout: 'split-pair',
    images: ['/images/frontscroll/01.JPG', '/images/frontscroll/02.jpg'],
    collapse: 'primary',
    eyebrow: 'SOLD',
    title: 'Explore Abigail\'s Artwork',
    subtitle: 'Bottles',
    meta: 'Oil on Canvas, 24"x24"',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'split-03',
    image: '/images/frontscroll/03.jpg',
    shift: 5,
    eyebrow: 'Third Painting in Series',
    title: 'Figurative Paintings',
    subtitle: 'Veils of the Self',
    meta: 'Oil on Canvas, 36”x24”',
    cta: { label: 'Explore Now', to: '/artwork/figures' },
  },
  {
    id: 'recent-work',
    image: '/images/frontscroll/04.jpg',
    eyebrow: '',
    title: 'Installations',
    subtitle: 'Hindu Cosmology & Medetative Practice',
    meta: 'Abstract Ephemeral Installation',
    cta: { label: 'Explore Now', to: '/artwork/installations' },
  },
  {
    id: 'full-05',
    image: '/images/frontscroll/05.jpg',
    eyebrow: 'Psychadelic Abstract',
    title: 'Abstract Paintings',
    subtitle: 'Trip',
    meta: 'Oil on canvas, 18"x24"',
    cta: { label: 'Explore Now', to: '/artwork/abstract' },
  },
  {
    id: 'full-06',
    image: '/images/frontscroll/06.jpg',
    eyebrow: '',
    title: 'Artist Biography',
    subtitle: 'Contemporary Artist',
    meta: 'Discover the Story of Abigial O\'Regan',
    cta: { label: 'Learn More', to: '/about' },
  },
  {
    id: 'full-07',
    image: '/images/frontscroll/07.jpg',
    eyebrow: '',
    title: 'Contact Abigail',
    subtitle: 'Get in Touch',
    meta: '',
    cta: { label: 'Reach Out', to: '/contact' },
  },
  {
    id: 'full-08',
    image: '/images/frontscroll/08.JPG',
    shift: 55,
    eyebrow: 'Anatomical Study',
    title: 'Figurative Drawings',
    subtitle: 'Crying Lady',
    meta: 'Charcoal on Drawing Paper, 22.5"x18"',
    cta: { label: 'Explore Now', to: '/artwork/figures' },
  },
  {
    id: 'pair-09-10',
    layout: 'split-pair',
    images: ['/images/frontscroll/09.jpg', '/images/frontscroll/10.jpg'],
    shift: 70,
    collapse: 'diagonal',
    eyebrow: 'Diptych',
    title: 'BFA 2025 Portfolio',
    subtitle: 'Heaven and Hell',
    meta: 'Both pieces are Oil on canvas, 40” x 30”',
    cta: { label: 'Explore Now', to: '/exhibitions/2025portfolio' },
  },
  {
    id: 'full-11',
    image: '/images/frontscroll/11.jpg',
    shift: 35,
    eyebrow: 'Richmond Carytown Zombie Walk 2024',
    title: 'Portraiture',
    subtitle: 'Santa\'s Helpers',
    meta: 'Oil on Canvas, 30"x22"',
    cta: { label: 'Explore Now', to: '/artwork/portraits' },
  },
  {
    id: 'studio-portrait',
    image: '/images/frontscroll/12.JPG',
    layout: 'split',
    eyebrow: '',
    title: "Still Life Paintings",
    subtitle: 'Vessel of Becoming',
    meta: 'Oil on Canvas, 30"x15"',
    cta: { label: 'Explore Now', to: '/artwork/stills' },
  },
//   {
//     id: 'full-13',
//     image: '/images/frontscroll/13.jpg',
//     eyebrow: 'Artwork',
//     title: 'In Focus',
//     subtitle: 'PAINTING',
//     meta: 'Selected piece',
//     cta: { label: 'Explore Now', to: '/artwork' },
//   },
  {
    id: 'split-14',
    image: '/images/frontscroll/14.JPG',
    eyebrow: 'Exhibited Work',
    title: 'Parc View Art Expo',
    subtitle: 'Childhood',
    meta: 'Oil on canvas, 24”x24”',
    cta: { label: 'View Show', to: '/exhibitions/parcviewexpo' },
  },
  {
    id: 'on-view',
    layout: 'split-pair',
    images: ['/images/frontscroll/15.png', '/images/landscapes/florence_1.jpg'],
    collapse: 'primary',
    eyebrow: 'Live Painting Abroad',
    title: 'Plein Air in Florence, Italy',
    subtitle: 'View of the Duomo',
    meta: 'Acrylic on Canvas, 12"x16"',
    cta: { label: 'View Exhibition', to: '/exhibitions/srisasummera' },
  },
  {
    id: 'about',
    image: '/images/frontscroll/16.png',
    shift: 15,
    eyebrow: '',
    title: "Connect with Abigail",
    subtitle: 'Follow Work on Other Platforms',
    meta: '',
    cta: { label: 'View Linktree', to: 'https://linktr.ee/abigailoregan' },
  },
]
