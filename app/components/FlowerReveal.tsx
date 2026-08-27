"use client";

import { useRef, useState } from "react";
import "./flower.css";

interface FlowerRevealProps {
  onComplete: () => void;
}

export default function FlowerReveal({
  onComplete,
}: FlowerRevealProps) {
  const [dragX, setDragX] = useState(0);

  const dragging = useRef(false);
  const startX = useRef(0);
  const startDragX = useRef(0);

  const handlePointerDown = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    dragging.current = true;
    startX.current = e.clientX;
    startDragX.current = dragX;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!dragging.current) return;

    const movement = e.clientX - startX.current;

    let newX = startDragX.current + movement;

    // Batas pergerakan
    newX = Math.max(-150, Math.min(150, newX));

    setDragX(newX);
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  return (
    <section className="flower-screen">

      {/* =========================
          BACKGROUND
      ========================== */}

     <div className="flower-background">
  <div className="moon-glow" />

  {/* =========================
      STARS
  ========================== */}

  <div className="stars-layer">
    <span className="star star-1" />
    <span className="star star-2" />
    <span className="star star-3" />
    <span className="star star-4" />
    <span className="star star-5" />
    <span className="star star-6" />
    <span className="star star-7" />
    <span className="star star-8" />
    <span className="star star-9" />
    <span className="star star-10" />
    <span className="star star-11" />
    <span className="star star-12" />
    <span className="star star-13" />
    <span className="star star-14" />
    <span className="star star-15" />
    <span className="star star-16" />
    <span className="star star-17" />
    <span className="star star-18" />
    <span className="star star-19" />
    <span className="star star-20" />
  </div>

  <div className="floating-petals">
    <span>🌸</span>
    <span>🌿</span>
    <span>🌸</span>
    <span>🍃</span>
    <span>🌸</span>
  </div>
</div>

      {/* =========================
          FLOWER AREA
      ========================== */}

      <div
        className="flower-stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          transform: `translateX(${dragX}px)`,
        }}
      >

        {/* Ground glow */}
        <div className="ground-glow" />

        {/* ================= FLOWER LEFT ================= */}

        <div className="natural-flower flower-left">

          <div className="stem stem-left" />

          <div className="leaf leaf-left-1" />
          <div className="leaf leaf-left-2" />
          <div className="leaf leaf-left-3" />

          <FlowerHead />

        </div>

        {/* ================= FLOWER CENTER ================= */}

        <div className="natural-flower flower-center">

          <div className="stem stem-center" />

          <div className="leaf leaf-center-1" />
          <div className="leaf leaf-center-2" />
          <div className="leaf leaf-center-3" />
          <div className="leaf leaf-center-4" />

          <FlowerHead />

        </div>

        {/* ================= FLOWER RIGHT ================= */}

        <div className="natural-flower flower-right">

          <div className="stem stem-right" />

          <div className="leaf leaf-right-1" />
          <div className="leaf leaf-right-2" />
          <div className="leaf leaf-right-3" />

          <FlowerHead />

        </div>

        {/* ================= GRASS ================= */}

        <div className="grass-field">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="grass-blade"
              style={{
                left: `${(i / 23) * 100}%`,
                height: `${35 + Math.random() * 55}px`,
                transform: `rotate(${
                  -25 + Math.random() * 50
                }deg)`,
              }}
            />
          ))}
        </div>

      </div>

      {/* =========================
          MESSAGE
      ========================== */}

      <div className="flower-message">

        <div className="flower-message-title">
          UNTUK AURELIA
        </div>

        <div className="flower-message-text">
          Sebuah bunga untuk seseorang
          <br />
          yang sangat spesial
          <span className="message-heart"> ❤️</span>
        </div>

        <div className="drag-hint">
          Geser bunganya perlahan 🌸
        </div>

        <button
          className="flower-next"
          onClick={onComplete}
        >
          Lanjut <span>❤️</span>
        </button>

      </div>

    </section>
  );
}


/* =====================================================
   FLOWER HEAD
===================================================== */

function FlowerHead() {
  return (
    <div className="flower-head">

      <div className="petal petal-1" />
      <div className="petal petal-2" />
      <div className="petal petal-3" />
      <div className="petal petal-4" />
      <div className="petal petal-5" />

      <div className="flower-center">

        <div className="flower-center-glow" />

        <div className="flower-center-core">
          <span />
          <span />
          <span />
        </div>

      </div>

    </div>
  );
}