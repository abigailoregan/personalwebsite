import React, { useMemo, useRef, useState, useEffect } from "react";
import type { ArtworkItem } from "../data/artworks";

import '../css/Masonry.css'

interface MasonryProps {
  items: ArtworkItem[];
}

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, width] as const;
};

const Masonry: React.FC<MasonryProps> = ({ items }) => {
  const [containerRef, width] = useMeasure<HTMLDivElement>();
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const columns = useMemo(() => {
    if (width < 640) return 1; // mobile
    if (width < 900) return 2; // tablet
    return 4; // desktop
  }, [width]);

  const { layout, height } = useMemo(() => {
    if (!width) return { layout: [], height: 0 };

    const columnWidth = width / columns;
    const colHeights = new Array(columns).fill(0);

    const positioned = [...items].reverse().map((item) => {
      const col = colHeights.indexOf(Math.min(...colHeights));

      const x = col * columnWidth;

      const ratio = item.height / item.width; // use real ratio
      const imgHeight = columnWidth * ratio;

      const y = colHeights[col];
      colHeights[col] += imgHeight;

      return {
        ...item,
        x,
        y,
        w: columnWidth,
        h: imgHeight,
      };
    });

    return {
      layout: positioned,
      height: Math.max(...colHeights),
    };
  }, [items, width, columns]);

  const openViewer = (itemId: string) => {
    const index = items.findIndex(item => item.id === itemId);
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Close viewer with ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!viewerOpen) return;

      if (e.key === "Escape") {
        closeViewer();
      } 
      else if (e.key === "ArrowLeft") {
        prevImage();
      } 
      else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [viewerOpen]);

  return (
    <>
      <div
        ref={containerRef}
        className="imagecontainerdiv"
        style={{
          height: height,
          position: "relative",
        }}
      >
        {layout.map((item) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              width: item.w,
              height: item.h,
              padding: "6px",
              boxSizing: "border-box",
            }}
          >
            <img
              src={item.img}
              alt={item.desc}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "6px",
                display: "block",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.2s ease",
              }}
              onClick={() => openViewer(item.id)}
            />
          </div>
        ))}
      </div>

      {viewerOpen && (
        <div className="masonry-viewer" onClick={closeViewer}>
          <button
            className="viewer-close"
            onClick={(e) => {
              e.stopPropagation();
              closeViewer();
            }}
          >
            X
          </button>
          <button
            className="viewer-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            &lt;
          </button>
          <button
            className="viewer-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            &gt;
          </button>
          <img
            id={items[currentIndex].id}
            src={items[currentIndex].imgH}
            alt={items[currentIndex].desc}
            onClick={(e) => {
              e.stopPropagation();
              if (items[currentIndex].id === "spukhaus2023-4") {
                window.open("https://www.youtube.com/watch?v=uyAAM00vIRg", "_blank")
              }
              else if (items[currentIndex].id === "murals-1") {
                window.open("https://sites.google.com/view/falls-church-art-walk/home-artwork-inventory/storm-drain-mural-1?authuser=0")
              }
            }}
          />
          <div className="viewer-caption">{items[currentIndex].desc}</div>
        </div>
      )}
    </>
  );
};

export default Masonry;