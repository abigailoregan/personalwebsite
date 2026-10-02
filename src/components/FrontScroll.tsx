import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/FrontScroll.css'

type Slide = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  meta: string
  cta: { label: string; to: string }
  layout?: 'full' | 'split' | 'split-pair'
  /** Primary / single image (full + single-split slides). */
  image?: string
  /** Pair of images for split-pair slides. */
  images?: [string, string]
  /**
   * Narrow-screen behavior for split-pair:
   * - diagonal: both images as half-backgrounds with a slash
   * - primary: only the first image fills the slide
   */
  collapse?: 'diagonal' | 'primary'
}

const slides: Slide[] = [
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
    id: 'on-view',
    image: '/images/frontscroll/15.png',
    eyebrow: 'Exhibitions',
    title: 'On View',
    subtitle: 'CURRENT & PAST SHOWS',
    meta: 'Gallery installations',
    cta: { label: 'Explore Now', to: '/exhibitions' },
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
    id: 'pair-09-10',
    layout: 'split-pair',
    images: ['/images/frontscroll/09.jpg', '/images/frontscroll/10.jpg'],
    collapse: 'diagonal',
    eyebrow: 'Artwork',
    title: 'Selected Works',
    subtitle: 'PAIR STUDY',
    meta: 'Two pieces',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
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
    id: 'about',
    image: '/images/frontscroll/16.png',
    eyebrow: 'About',
    title: "Abigail O'Regan",
    subtitle: 'ARTIST',
    meta: 'Biography & statement',
    cta: { label: 'Learn More', to: '/about' },
  },
]

function FrontScroll() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const active = slides[index]
  const isSplitActive =
    active.layout === 'split' || active.layout === 'split-pair'

  useEffect(() => {
    if (paused) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(id)
  }, [paused, index])

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length)
  }

  return (
    <section
      id="front-scroll-container"
      className={isSplitActive ? 'is-split-active' : undefined}
      aria-roledescription="carousel"
      aria-label="Featured work"
    >
      {slides.map((slide, i) => {
        const isSplit = slide.layout === 'split'
        const isSplitPair = slide.layout === 'split-pair'
        const isAnySplit = isSplit || isSplitPair

        return (
          <article
            key={slide.id}
            className={[
              'front-scroll-item',
              isSplit ? 'is-split' : '',
              isSplitPair ? 'is-split-pair' : '',
              !isAnySplit ? 'is-full' : '',
              isSplitPair && slide.collapse === 'diagonal'
                ? 'is-collapse-diagonal'
                : '',
              isSplitPair && slide.collapse === 'primary'
                ? 'is-collapse-primary'
                : '',
              i === index ? 'is-active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-hidden={i !== index}
          >
            {isSplitPair && slide.images ? (
              <>
                <img
                  className="front-scroll-image front-scroll-image--a"
                  src={slide.images[0]}
                  alt=""
                />
                <img
                  className="front-scroll-image front-scroll-image--b"
                  src={slide.images[1]}
                  alt=""
                />
              </>
            ) : (
              <img
                className="front-scroll-image"
                src={slide.image}
                alt=""
              />
            )}
            {!isAnySplit && <div className="front-scroll-gradient" />}
            <div className="front-scroll-overlay">
              <p className="front-scroll-eyebrow">{slide.eyebrow}</p>
              <h2 className="front-scroll-title">{slide.title}</h2>
              <p className="front-scroll-subtitle">{slide.subtitle}</p>
              <p className="front-scroll-meta">{slide.meta}</p>
              <Link className="front-scroll-cta" to={slide.cta.to}>
                {slide.cta.label}
              </Link>
            </div>
          </article>
        )
      })}

      <div className="front-scroll-controls">
        <button
          type="button"
          className="front-scroll-pause"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
        >
          {paused ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
            </svg>
          )}
        </button>

        <div className="front-scroll-progress" role="tablist" aria-label="Slides">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`front-scroll-progress-segment${i === index ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="front-scroll-nav">
          <span className="front-scroll-counter">
            {index + 1} / {slides.length}
          </span>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FrontScroll
