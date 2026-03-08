import { useState, useEffect } from "react";
import { artworks } from "../data/artworkhome";
import "../css/Home3DCarousel.css";

export default function Home3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewerImage, setViewerImage] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  // Close viewer with ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setViewerImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {artworks.map((artwork, index) => {
            let offset = index - currentIndex;

            if (offset < -Math.floor(artworks.length / 2)) {
              offset += artworks.length;
            }
            if (offset > Math.floor(artworks.length / 2)) {
              offset -= artworks.length;
            }

            return (
              <div
                key={artwork.title}
                className="carousel-card"
                style={{
                  transform: `
                    rotateY(${offset * 40}deg)
                    translateZ(350px)
                    translateX(${offset * 120}px)
                  `,
                  zIndex: 100 - Math.abs(offset),
                  opacity: offset === 0 ? 1 : 0.6,
                }}
              >
                <div className="carousel-image-wrapper">
                  <img src={artwork.image} alt={artwork.title} />

                  <div className="carousel-hover">
                    <button
                      onClick={() => setViewerImage(artwork.hiRes || artwork.image)}
                    >
                      View
                    </button>
                  </div>
                </div>

                <div className="carousel-info">
                  <h3>{artwork.title}</h3>
                  <p>{artwork.medium}</p>
                  <p>{artwork.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-controls">
          <button onClick={prevSlide}>&lt;</button>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </div>

      {viewerImage && (
        <div className="image-viewer">
          <button
            className="viewer-close"
            onClick={() => setViewerImage(null)}
          >
            X
          </button>
          <img src={viewerImage} alt="High resolution artwork" />
        </div>
      )}
    </>
  );
}