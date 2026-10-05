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
    eyebrow: 'Artwork',
    title: 'Featured Pair',
    subtitle: 'STUDIES',
    meta: 'Selected pieces',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'split-03',
    image: '/images/frontscroll/03.jpg',
    layout: 'split',
    eyebrow: 'Artwork',
    title: 'Selected Work',
    subtitle: 'FEATURED PIECE',
    meta: 'From the studio',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'recent-work',
    image: '/images/frontscroll/04.jpg',
    eyebrow: 'Artwork',
    title: 'Recent Work',
    subtitle: 'PAINTINGS & DRAWINGS',
    meta: 'Selected pieces',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'full-05',
    image: '/images/frontscroll/05.jpg',
    eyebrow: 'Artwork',
    title: 'In Focus',
    subtitle: 'PAINTING',
    meta: 'Selected piece',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'full-06',
    image: '/images/frontscroll/06.jpg',
    eyebrow: 'Artwork',
    title: 'In Focus',
    subtitle: 'PAINTING',
    meta: 'Selected piece',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'full-07',
    image: '/images/frontscroll/07.jpg',
    eyebrow: 'Artwork',
    title: 'In Focus',
    subtitle: 'PAINTING',
    meta: 'Selected piece',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'full-08',
    image: '/images/frontscroll/08.JPG',
    shift: 55,
    eyebrow: 'Artwork',
    title: 'In Focus',
    subtitle: 'PAINTING',
    meta: 'Selected piece',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'pair-09-10',
    layout: 'split-pair',
    images: ['/images/frontscroll/09.jpg', '/images/frontscroll/10.jpg'],
    shift: 70,
    collapse: 'diagonal',
    eyebrow: 'Artwork',
    title: 'Selected Works',
    subtitle: 'PAIR STUDY',
    meta: 'Two pieces',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'full-11',
    image: '/images/frontscroll/11.jpg',
    shift: 35,
    eyebrow: 'Artwork',
    title: 'In Focus',
    subtitle: 'PAINTING',
    meta: 'Selected piece',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'studio-portrait',
    image: '/images/frontscroll/12.JPG',
    layout: 'split',
    eyebrow: 'Featured',
    title: "Abigail O'Regan",
    subtitle: 'Studio Portrait',
    meta: 'Artist',
    cta: { label: 'Learn More', to: '/about' },
  },
  {
    id: 'full-13',
    image: '/images/frontscroll/13.jpg',
    eyebrow: 'Artwork',
    title: 'In Focus',
    subtitle: 'PAINTING',
    meta: 'Selected piece',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'split-14',
    image: '/images/frontscroll/14.JPG',
    eyebrow: 'Artwork',
    title: 'Selected Work',
    subtitle: 'FEATURED PIECE',
    meta: 'From the studio',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    id: 'on-view',
    image: '/images/frontscroll/15.png',
    layout: 'split',
    eyebrow: 'Exhibitions',
    title: 'On View',
    subtitle: 'CURRENT & PAST SHOWS',
    meta: 'Gallery installations',
    cta: { label: 'Explore Now', to: '/exhibitions' },
  },
  {
    id: 'about',
    image: '/images/frontscroll/16.png',
    shift: 15,
    eyebrow: 'About',
    title: "Abigail O'Regan",
    subtitle: 'ARTIST',
    meta: 'Biography & statement',
    cta: { label: 'Learn More', to: '/about' },
  },
]
