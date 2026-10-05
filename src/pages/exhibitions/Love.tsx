import { useEffect, useState } from 'react'
import { artworks } from '../../data/artworks'
import '../../css/ArtistStatement.css'
import '../../css/Masonry.css'
import '../../css/Love.css'

function Love() {
  const items = [...artworks.love].reverse()
  const [viewerOpen, setViewerOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openViewer = (index: number) => {
    setCurrentIndex(index)
    setViewerOpen(true)
  }

  const closeViewer = () => setViewerOpen(false)

  const prevImage = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!viewerOpen) return
      if (e.key === 'Escape') closeViewer()
      else if (e.key === 'ArrowLeft') prevImage()
      else if (e.key === 'ArrowRight') nextImage()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [viewerOpen])

  return (
    <section className="love-page">
      <div className="love-gallery">
        {items.map((item, index) => (
          <figure
            key={item.id}
            className={`love-piece${index === 0 ? ' love-piece--lead' : ''}`}
          >
            <div className="love-piece-media">
              <img
                src={item.img}
                alt={item.desc}
                onClick={() => openViewer(index)}
              />
            </div>
            <figcaption>{item.desc}</figcaption>
          </figure>
        ))}
      </div>

      <p className="artiststatement">
        This series explores love, loss, and the desperate measures one might take
        to bridge the gap between life and death. It follows a man, tormented by
        grief, who attempts to summon his dead lover back from the grave. Themes of
        mortality, persistence of memory, and the consequences of defying the
        natural order are woven throughout this narrative. Each piece invites the
        viewer to reflect on the powerful emotions that drive us to hold onto the
        past, even when faced with the impossibility of reclaiming what is gone.
      </p>

      {viewerOpen && (
        <div className="masonry-viewer" onClick={closeViewer}>
          <button
            type="button"
            className="viewer-close"
            onClick={(e) => {
              e.stopPropagation()
              closeViewer()
            }}
          >
            X
          </button>
          <button
            type="button"
            className="viewer-prev"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            &lt;
          </button>
          <button
            type="button"
            className="viewer-next"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            &gt;
          </button>
          <img
            src={items[currentIndex].imgH}
            alt={items[currentIndex].desc}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="viewer-caption">{items[currentIndex].desc}</div>
        </div>
      )}
    </section>
  )
}

export default Love
