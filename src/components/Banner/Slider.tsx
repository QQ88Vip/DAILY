import { useEffect, useRef, useState } from "react";
import "./Slider.scss";

export default function Slider({
  images = [
    "/assets/banner-1.jpg",
    "/assets/banner-2.jpg",
    "/assets/banner-3.jpg",
    "/assets/banner-4.jpg",
  ],
  interval = 3000,
}: {
  images?: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const length = images.length;

  useEffect(() => {
    start();
    return () => stop();
  }, [index]);

  function start() {
    stop();
    timeoutRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);
  }

  function stop() {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  function goTo(i: number) {
    setIndex(((i % length) + length) % length);
  }

  //   function prev() {
  //     goTo(index - 1);
  //   }

  //   function next() {
  //     goTo(index + 1);
  //   }

  return (
    <div className="slider" onMouseEnter={stop} onMouseLeave={start}>
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)`, width: `${length * 100}%` }}
      >
        {images.map((src, i) => (
          <div key={i} className="slide">
            <img src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>

      {/* <button className="arrow left" onClick={prev}>
        ‹
      </button>
      <button className="arrow right" onClick={next}>
        ›
      </button> */}

      <div className="dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
