"use client";

import { useState, useEffect } from "react";

const slides = [
  "/Media/Image/case 5.png",
  "/Media/Image/case 11.png",
  "/Media/Image/case 17.jpg",
];

export default function TeamSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setCurrent((i) => (i + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: "0", position: "relative" }}>
      <style>{`
        .peek-viewport {
          position: relative;
          overflow: hidden;
          padding: 0 24px;
          max-width: 960px;
          margin: 0 auto;
        }
        .peek-track {
          display: flex;
          transition: transform .45s cubic-bezier(.25,.46,.45,.94);
        }
        .peek-slide {
          flex: 0 0 100%;
          padding: 0 12px;
          box-sizing: border-box;
          transition: transform .45s cubic-bezier(.25,.46,.45,.94), opacity .45s;
          transform: scale(0.82);
          opacity: 0.4;
        }
        .peek-slide.ts-active {
          transform: scale(1);
          opacity: 1;
        }
        .peek-slide-inner {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          background: #111;
        }
        .peek-slide-inner img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          display: block;
        }
        .ts-btn {
          position: absolute;
          top: 50%; transform: translateY(-50%);
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(20,20,20,.75);
          border: 1px solid rgba(255,255,255,.15);
          color: #fff; font-size: 22px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s, border-color .2s;
          backdrop-filter: blur(6px);
          z-index: 2;
        }
        .ts-btn:hover { background: #ef5023; border-color: #ef5023; }
        .ts-prev { left: 16px; }
        .ts-next { right: 16px; }
        .ts-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 20px;
        }
        .ts-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: rgba(0,0,0,.15);
          border: none; cursor: pointer; padding: 0;
          transition: background .2s, transform .2s;
        }
        .ts-dot.ts-active {
          background: #ef5023;
          transform: scale(1.3);
        }
        @media (min-width: 768px) {
          .peek-viewport { padding: 0 120px; }
        }
      `}</style>

      {/* Carousel */}
      <div className="peek-viewport">
        <div
          className="peek-track"
          style={{ transform: `translateX(${-current * 100}%)` }}
        >
          {slides.map((src, i) => (
            <div key={i} className={`peek-slide${current === i ? " ts-active" : ""}`}>
              <div className="peek-slide-inner">
                <img src={src} alt={`InApps culture ${i + 1}`} />
              </div>
            </div>
          ))}
        </div>

        <button className="ts-btn ts-prev" onClick={prev}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button className="ts-btn ts-next" onClick={next}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Dots */}
      <div className="ts-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`ts-dot${current === i ? " ts-active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}