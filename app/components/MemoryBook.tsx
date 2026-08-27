"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./MemoryBook.css";

type MemoryItem = {
  type: "image" | "video";
  src: string;
  title: string;
  caption: string;
};

type MemorySpread = {
  left: MemoryItem;
  right: MemoryItem;
};


/* =========================================================
   MEMORY DATA
========================================================= */

const spreads: MemorySpread[] = [
  {
    left: {
      type: "image",
      src: "/memories/drag1.jpg",
      title: "",
      caption:
        "Awal mula dd ditinggal musang😂",
    },

    right: {
      type: "video",
      src: "/memories/vid1.mp4",
      title: "jj dlu ga si",
      caption:
        "🗿",
    },
  },

  {
    left: {
      type: "image",
      src: "/memories/drag3.jpg",
      title: "Push rank bareng",
      caption:
        "EPIC",
    },

    right: {
      type: "image",
      src: "/memories/drag4.jpg",
      title: "Push rank bareng",
      caption:
        "LEGEND",
    },
  },

  {
    left: {
      type: "image",
      src: "/memories/drag5.jpg",
      title: "Push rank bareng",
      caption:
        "MAWI",
    },

    right: {
      type: "image",
      src: "/memories/drag6.jpg",
      title: "Push rank bareng",
      caption:
        "HONOR",
    },
  },

  {
    left: {
      type: "image",
      src: "/memories/drag7.jpg",
      title: "Push rank bareng",
      caption:
        "GLORI",
    },

    right: {
      type: "image",
      src: "/memories/drag8.jpg",
      title: "Push rank bareng",
      caption:
        "IMO 100",
    },
  },

  {
    left: {
      type: "image",
      src: "/memories/drag9.jpg",
      title: "Push rank bareng",
      caption:
        "IMO 200",
    },

    right: {
      type: "video",
      src: "/memories/vid2.mp4",
      title: "Push rank bareng",
      caption:
        "JEJE lagi 😂",
    },
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function MemoryBook({
  onComplete,
}: {
  onComplete: () => void;
}) {
  /* =======================================================
     DESKTOP STATE
  ======================================================= */

  const [currentSpread, setCurrentSpread] = useState(0);
  const [direction, setDirection] = useState(1);


  /* =======================================================
     MOBILE STATE
     1 spread = 2 media
  ======================================================= */

  const [mobilePage, setMobilePage] = useState(0);

  const mobileTotalPages =
    spreads.length * 2;

  const mobileSpreadIndex =
    Math.floor(mobilePage / 2);

  const mobileIsLeft =
    mobilePage % 2 === 0;

  const mobileItem =
    spreads[mobileSpreadIndex][
      mobileIsLeft
        ? "left"
        : "right"
    ];

  const mobileSide =
    mobileIsLeft
      ? "left"
      : "right";


  /* =======================================================
     DESKTOP NAVIGATION
  ======================================================= */

  const isFirstPage =
    currentSpread === 0;

  const isLastPage =
    currentSpread ===
    spreads.length - 1;


  function nextPage() {
    if (isLastPage) return;

    setDirection(1);

    setCurrentSpread(
      (prev) => prev + 1
    );
  }


  function previousPage() {
    if (isFirstPage) return;

    setDirection(-1);

    setCurrentSpread(
      (prev) => prev - 1
    );
  }


  function goToPage(index: number) {
    if (index === currentSpread) return;

    setDirection(
      index > currentSpread
        ? 1
        : -1
    );

    setCurrentSpread(index);
  }


  /* =======================================================
     MOBILE NAVIGATION
  ======================================================= */

  function nextMobilePage() {
    if (
      mobilePage >=
      mobileTotalPages - 1
    ) {
      return;
    }

    setMobilePage(
      (prev) => prev + 1
    );
  }


  function previousMobilePage() {
    if (mobilePage <= 0) {
      return;
    }

    setMobilePage(
      (prev) => prev - 1
    );
  }


  /* =======================================================
     CURRENT DESKTOP SPREAD
  ======================================================= */

  const spread =
    spreads[currentSpread];


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section className="memory-book-screen">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="memory-background">

        <div className="memory-glow memory-glow-one" />

        <div className="memory-glow memory-glow-two" />


        <div className="memory-hearts">

          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>

        </div>


        <div className="polaroid polaroid-one">
          <div />
        </div>

        <div className="polaroid polaroid-two">
          <div />
        </div>

        <div className="polaroid polaroid-three">
          <div />
        </div>

        <div className="polaroid polaroid-four">
          <div />
        </div>

      </div>


      {/* =================================================
          HEADER
      ================================================= */}

      <div className="memory-header">

        <div className="memory-book-icon">
          📖
        </div>

        <p className="memory-eyebrow">
          OUR STORY
        </p>

        <h1>
          Cerita Kita
          <span> ❤️</span>
        </h1>

        <p className="memory-subtitle">
          Setiap momen bersama dede adalah
          <br />
          kenangan yang paling berharga buat om.
        </p>

      </div>


      {/* =================================================
          BOOK AREA
      ================================================= */}

      <div className="memory-book-wrapper">

        {/* =================================================
            DESKTOP LEFT ARROW
        ================================================= */}

        <button
          type="button"
          className={`book-arrow book-arrow-left desktop-book-arrow ${
            isFirstPage
              ? "disabled"
              : ""
          }`}
          onClick={previousPage}
          disabled={isFirstPage}
          aria-label="Halaman sebelumnya"
        >
          <span>‹</span>
        </button>


        {/* =================================================
            BOOK
        ================================================= */}

        <div className="memory-book">

          <div className="book-shadow" />


          <div className="book-inner">

            {/* =============================================
                DESKTOP BOOK
            ============================================= */}

            <div className="desktop-book-stage">

              <AnimatePresence
                mode="wait"
                initial={false}
                custom={direction}
              >

                <motion.div
                  key={currentSpread}
                  custom={direction}
                  className="memory-spread"

                  variants={{
                    enter: (
                      direction: number
                    ) => ({
                      opacity: 0,

                      x:
                        direction > 0
                          ? 120
                          : -120,

                      rotateY:
                        direction > 0
                          ? -12
                          : 12,

                      scale: 0.985,
                    }),

                    center: {
                      opacity: 1,

                      x: 0,

                      rotateY: 0,

                      scale: 1,
                    },

                    exit: (
                      direction: number
                    ) => ({
                      opacity: 0,

                      x:
                        direction > 0
                          ? -120
                          : 120,

                      rotateY:
                        direction > 0
                          ? 12
                          : -12,

                      scale: 0.985,
                    }),
                  }}

                  initial="enter"

                  animate="center"

                  exit="exit"

                  transition={{
                    duration: 0.55,

                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >

                  {/* LEFT PAGE */}

                  <MemoryPage
                    item={spread.left}
                    side="left"
                  />


                  {/* BOOK SPINE */}

                  <div className="book-spine">

                    <span />
                    <span />
                    <span />
                    <span />
                    <span />

                  </div>


                  {/* RIGHT PAGE */}

                  <MemoryPage
                    item={spread.right}
                    side="right"
                  />

                </motion.div>

              </AnimatePresence>

            </div>


            {/* =============================================
                MOBILE SINGLE PAGE
            ============================================= */}

            <div className="mobile-book-stage">

              <AnimatePresence
                mode="wait"
                initial={false}
              >

                <motion.div
                  key={mobilePage}

                  className="mobile-page-wrapper"

                  initial={{
                    opacity: 0,

                    x:
                      mobilePage > 0
                        ? 80
                        : -80,
                  }}

                  animate={{
                    opacity: 1,

                    x: 0,
                  }}

                  exit={{
                    opacity: 0,

                    x:
                      mobilePage > 0
                        ? -80
                        : 80,
                  }}

                  transition={{
                    duration: 0.35,

                    ease:
                      [0.22, 1, 0.36, 1],
                  }}
                >

                  <MemoryPage
                    item={mobileItem}
                    side={mobileSide}
                  />

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>


        {/* =================================================
            DESKTOP RIGHT ARROW
        ================================================= */}

        <button
          type="button"
          className={`book-arrow book-arrow-right desktop-book-arrow ${
            isLastPage
              ? "disabled"
              : ""
          }`}
          onClick={nextPage}
          disabled={isLastPage}
          aria-label="Halaman berikutnya"
        >
          <span>›</span>
        </button>


        {/* =================================================
            MOBILE LEFT ARROW
        ================================================= */}

        <button
          type="button"
          className={`book-arrow book-arrow-left mobile-book-arrow ${
            mobilePage === 0
              ? "disabled"
              : ""
          }`}
          onClick={previousMobilePage}
          disabled={mobilePage === 0}
          aria-label="Media sebelumnya"
        >
          <span>‹</span>
        </button>


        {/* =================================================
            MOBILE RIGHT ARROW
        ================================================= */}

        <button
          type="button"
          className={`book-arrow book-arrow-right mobile-book-arrow ${
            mobilePage >=
            mobileTotalPages - 1
              ? "disabled"
              : ""
          }`}
          onClick={nextMobilePage}
          disabled={
            mobilePage >=
            mobileTotalPages - 1
          }
          aria-label="Media berikutnya"
        >
          <span>›</span>
        </button>

      </div>


      {/* =================================================
          DESKTOP PAGE INDICATOR
      ================================================= */}

      <div className="memory-pagination desktop-pagination">

        <span>
          {currentSpread + 1}
        </span>


        <div className="pagination-hearts">

          {spreads.map(
            (_, index) => (

              <button
                key={index}
                type="button"
                onClick={() =>
                  goToPage(index)
                }
                className={
                  index ===
                  currentSpread
                    ? "active"
                    : ""
                }
                aria-label={
                  `Buka halaman ${
                    index + 1
                  }`
                }
              >
                ♥
              </button>

            )
          )}

        </div>


        <span>
          {spreads.length}
        </span>

      </div>


      {/* =================================================
          MOBILE PAGE INDICATOR
      ================================================= */}

      <div className="memory-mobile-pagination">

        <span>
          {mobilePage + 1}
        </span>

        <span>
          /
        </span>

        <span>
          {mobileTotalPages}
        </span>

      </div>


      {/* =================================================
          BOTTOM MESSAGE
      ================================================= */}

      <div className="memory-bottom">

        <p>
          <span>♡</span>
        </p>


        <div className="bottom-hearts">
          ♥ ♥ ♥ ♥ ♥
        </div>


        {/* <button
          type="button"
          className="memory-next-button"
          onClick={onComplete}
        >
          Lanjut ke Surat
          <span>💌</span>
        </button> */}

      </div>

    </section>
  );
}


/* =========================================================
   MEMORY PAGE
========================================================= */

function MemoryPage({
  item,
  side,
}: {
  item: MemoryItem;
  side: "left" | "right";
}) {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);


  return (
    <>
      {/* =================================================
          PAGE
      ================================================= */}

      <div
        className={`memory-page page-${side}`}
      >

        <div className="paper-texture" />

        <div className="tape tape-top" />


        {/* =================================================
            MEDIA
        ================================================= */}

        <div
          className="memory-media"

          onClick={() => {

            /*
              Hanya gambar yang membuka
              fullscreen.

              Video tetap menjadi native
              browser player.
            */

            if (
              item.type === "image"
            ) {
              setIsOpen(true);
            }

          }}

          role={
            item.type === "image"
              ? "button"
              : undefined
          }

          tabIndex={
            item.type === "image"
              ? 0
              : undefined
          }

          onKeyDown={(e) => {

            if (
              item.type === "image" &&
              (
                e.key === "Enter" ||
                e.key === " "
              )
            ) {
              setIsOpen(true);
            }

          }}

          aria-label={
            item.type === "image"
              ? `Buka ${item.title}`
              : undefined
          }
        >

          {/* =============================================
              IMAGE
          ============================================= */}

          {item.type === "image" ? (

            <img
              src={item.src}
              alt={item.title}
              draggable={false}
            />

          ) : item.src ? (

            /* =========================================
               VIDEO
            ========================================= */

            <video
              src={item.src}

              controls

              playsInline

              preload="metadata"

              controlsList="nodownload"

              onClick={(e) => {
                /*
                  Jangan buka image viewer
                  ketika video ditekan.
                */

                e.stopPropagation();
              }}
            />

          ) : (

            /* =========================================
               EMPTY MEDIA
            ========================================= */

            <div
              className="memory-media-empty"
            >
              Media belum tersedia
            </div>

          )}

        </div>


        {/* =================================================
            TITLE
        ================================================= */}

        {item.title && (

          <div className="memory-tag">
            {item.title}
          </div>

        )}


        {/* =================================================
            NOTE
        ================================================= */}

        <div className="memory-note">

          <p>
            {item.caption}
          </p>

          <span>
            ♡
          </span>

        </div>


        {/* =================================================
            DECORATION
        ================================================= */}

        <div className="paper-flower">
          ✿
        </div>

        <div className="paper-tape-small" />

      </div>


      {/* =====================================================
          IMAGE FULLSCREEN
      ===================================================== */}

      <AnimatePresence>

        {isOpen &&
          item.type === "image" && (

            <motion.div
              className="memory-image-lightbox"

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
              }}

              transition={{
                duration: 0.25,
              }}

              onClick={() => {
                setIsOpen(false);
              }}
            >

              {/* =========================================
                  CLOSE BUTTON
              ========================================= */}

              <button
                type="button"

                className="memory-image-close"

                onClick={(e) => {

                  e.stopPropagation();

                  setIsOpen(false);

                }}

                aria-label="Tutup gambar"
              >
                ×
              </button>


              {/* =========================================
                  FULLSCREEN IMAGE
              ========================================= */}

              <motion.img

                src={item.src}

                alt={item.title}

                className="memory-full-image"

                initial={{
                  scale: 0.88,
                  opacity: 0,
                }}

                animate={{
                  scale: 1,
                  opacity: 1,
                }}

                exit={{
                  scale: 0.88,
                  opacity: 0,
                }}

                transition={{
                  duration: 0.3,

                  ease:
                    [0.22, 1, 0.36, 1],
                }}

                onClick={(e) => {
                  e.stopPropagation();
                }}

                draggable={false}
              />

            </motion.div>

          )}

      </AnimatePresence>

    </>
  );
}