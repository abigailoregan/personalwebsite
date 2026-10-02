import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/FrontScroll.css'

const slides = [
  {
    image: '/images/frontscroll/04.jpg',
    eyebrow: 'Artwork',
    title: 'Recent Work',
    subtitle: 'PAINTINGS & DRAWINGS',
    meta: 'Selected pieces',
    cta: { label: 'Explore Now', to: '/artwork' },
  },
  {
    image: '/images/frontscroll/15.png',
    eyebrow: 'Exhibitions',
    title: 'On View',
    subtitle: 'CURRENT & PAST SHOWS',
    meta: 'Gallery installations',
    cta: { label: 'Explore Now', to: '/exhibitions' },
  },
  {
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
      aria-roledescription="carousel"
      aria-label="Featured work"
    >
      {slides.map((slide, i) => (
        <article
          key={slide.image}
          className={`front-scroll-item${i === index ? ' is-active' : ''}`}
          aria-hidden={i !== index}
        >
          <img
            className="front-scroll-image"
            src={slide.image}
            alt=""
          />
          <div className="front-scroll-gradient" />
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
      ))}

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
              key={slide.image}
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
