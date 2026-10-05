import { useState, useEffect, useRef } from "react";
import { portfolio25 } from "../data/portfolio25";
import "../css/Home3DCarousel.css";

export default function Home3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewerImage, setViewerImage] = useState<string | null>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    // Only restart if viewer is NOT open
    if (!viewerImage) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % portfolio25.length);
      }, 10000);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolio25.length) % portfolio25.length);
    resetAutoScroll();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolio25.length);
    resetAutoScroll();
  };

  // Initialize auto-scroll and pause when viewer opens
  useEffect(() => {
    resetAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [viewerImage]);

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
          {portfolio25.map((piece, index) => {
            let offset = index - currentIndex;

            if (offset < -Math.floor(portfolio25.length / 2)) {
              offset += portfolio25.length;
            }
            if (offset > Math.floor(portfolio25.length / 2)) {
              offset -= portfolio25.length;
            }

            return (
              <div
                key={piece.title}
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
                  <img src={piece.image} alt={piece.title} />

                  <div className="carousel-hover">
                    <button
                      onClick={() =>
                        setViewerImage(piece.hiRes || piece.image)
                      }
                    >
                      View
                    </button>
                  </div>
                </div>

                <div className="carousel-info">
                  <h3>{piece.title}</h3>
                  <p>{piece.medium}</p>
                  <p>{piece.description}</p>
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
        <div className="image-viewer" onClick={() => setViewerImage(null)}>
          <button
            className="viewer-close"
            onClick={(e) => {
              e.stopPropagation();
              setViewerImage(null);
            }}
          >
            X
          </button>
          <img
            src={viewerImage}
            alt="High resolution artwork"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
