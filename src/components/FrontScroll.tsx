import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { slides } from '../data/home'
import '../css/FrontScroll.css'

const SLIDE_MS = 6000

function FrontScroll() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const active = slides[index]
  const isSplitActive =
    active.layout === 'split' ||
    (active.layout === 'split-pair' && active.collapse !== 'diagonal')

  useEffect(() => {
    progressRef.current = progress
  }, [progress])

  useEffect(() => {
    if (paused) return

    let frame = 0
    const startedAt = performance.now() - progressRef.current * SLIDE_MS

    const tick = (now: number) => {
      const next = Math.min(1, (now - startedAt) / SLIDE_MS)
      progressRef.current = next
      setProgress(next)

      if (next >= 1) {
        setIndex((current) => (current + 1) % slides.length)
        progressRef.current = 0
        setProgress(0)
        return
      }

      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [paused, index])

  const goTo = (next: number, options?: { fillIfPaused?: boolean }) => {
    const target = (next + slides.length) % slides.length
    if (paused && options?.fillIfPaused) {
      // Paused tab jump: mark this slide done so play advances immediately.
      progressRef.current = 1
      setProgress(1)
    } else {
      progressRef.current = 0
      setProgress(0)
    }
    setIndex(target)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    if (!window.matchMedia('(max-width: 980px)').matches) return
    const touch = e.changedTouches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current
    touchStartRef.current = null
    if (!start || !window.matchMedia('(max-width: 980px)').matches) return

    const touch = e.changedTouches[0]
    const dx = touch.clientX - start.x
    const dy = touch.clientY - start.y
    const minSwipe = 48

    if (Math.abs(dx) < minSwipe || Math.abs(dx) < Math.abs(dy)) return

    // Swipe left → next; swipe right → previous
    goTo(dx < 0 ? index + 1 : index - 1)
  }

  return (
    <section
      id="front-scroll-container"
      className={isSplitActive ? 'is-split-active' : undefined}
      aria-roledescription="carousel"
      aria-label="Featured work"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, i) => {
        const isSplit = slide.layout === 'split'
        const isSplitPair = slide.layout === 'split-pair'
        const isDiagonalPair =
          isSplitPair && slide.collapse === 'diagonal'
        const isAnySplit = isSplit || isSplitPair
        const isFull = !isAnySplit
        const usesShift = isFull || isDiagonalPair

        return (
          <article
            key={slide.id}
            className={[
              'front-scroll-item',
              isSplit ? 'is-split' : '',
              isSplitPair ? 'is-split-pair' : '',
              isFull ? 'is-full' : '',
              isDiagonalPair ? 'is-collapse-diagonal' : '',
              isSplitPair && slide.collapse === 'primary'
                ? 'is-collapse-primary'
                : '',
              i === index ? 'is-active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={
              usesShift
                ? {
                    ['--slide-shift' as string]: `${slide.shift ?? 0}%`,
                    // true/default = down (-1); false = up (+1)
                    ['--slide-shift-sign' as string]:
                      slide.shiftDown === false ? 1 : -1,
                  }
                : undefined
            }
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
          {slides.map((slide, i) => {
            const fill =
              i < index ? 1 : i === index ? progress : 0

            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={`front-scroll-progress-segment${i === index ? ' is-active' : ''}${i < index ? ' is-complete' : ''}`}
                onClick={() => goTo(i, { fillIfPaused: true })}
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  className="front-scroll-progress-fill"
                  style={{ transform: `scaleX(${fill})` }}
                />
              </button>
            )
          })}
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
