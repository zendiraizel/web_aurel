"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MemoryBook from "./components/MemoryBook";

type Screen =
  | "opening"
  | "secret"
  | "birthday"
  | "story";

export default function Home() {
  const [screen, setScreen] =
    useState<Screen>("opening");

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function handleCodeSubmit() {
    const answer =
      code.trim().toUpperCase();

    if (
      answer ===
      "HUBUNGAN TERSERAH SURYA"
    ) {
      setError("");
      setScreen("birthday");
    } else {
      setError(
        "Hmm... Salah 👎❌ yang bener aurel😒."
      );

      setCode("");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080308] text-white">

      {/* =================================================
          GLOBAL FIREWORK CURSOR
      ================================================= */}

      <FireworkCursor />

      <AnimatePresence mode="wait">

        {/* =================================================
            OPENING
        ================================================= */}

        {screen === "opening" && (
          <motion.section
            key="opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              flex
              min-h-screen
              items-center
              justify-center
              overflow-hidden
            "
          >

            {/* =========================
                VIDEO BACKGROUND
            ========================== */}

            <video
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
              src="/videos/ultah.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />

            {/* DARK OVERLAY */}

            <div className="
              absolute
              inset-0
              bg-black/55
            " />

            {/* PINK OVERLAY */}

            <div className="
              absolute
              inset-0
              bg-gradient-to-b
              from-pink-950/20
              via-transparent
              to-[#080308]/70
            " />

            {/* SOFT GLOW */}

            <div className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-pink-500/10
              blur-[120px]
            " />

            {/* FLOATING HEARTS */}

            <BackgroundHearts />

            {/* CONTENT */}

            <div className="
              relative
              z-20
              w-full
              max-w-3xl
              px-6
              text-center
            ">

              {/* HEART */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  opacity: {
                    duration: 0.5,
                  },
                  scale: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  mb-8
                  text-7xl
                  drop-shadow-[0_0_25px_rgba(255,70,160,0.7)]
                "
              >
                💗
              </motion.div>

              {/* SMALL TITLE */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="
                  mb-5
                  text-sm
                  font-medium
                  tracking-[0.4em]
                  text-pink-200
                  md:text-base
                "
              >
                ADA SESUATU UNTUK DEDE...
              </motion.p>

              {/* MAIN TITLE */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="
                  text-5xl
                  font-black
                  leading-tight
                  drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]
                  md:text-7xl
                "
              >
                Untuk Aurel

                <span className="
                  ml-3
                  inline-block
                  text-pink-300
                ">
                  ❤️
                </span>
              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                }}
                className="
                  mx-auto
                  mt-7
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-white/90
                  drop-shadow-[0_3px_15px_rgba(0,0,0,0.8)]
                  md:text-lg
                "
              >
                Om punya sesuatu yang sempat om bilang ke dd
                <br />
                khusus untuk Aurel 🙀 yang sangat spesial ❤️🌹.
              </motion.p>

              {/* BUTTON */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.3,
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow:
                    "0 0 45px rgba(244,63,94,0.55)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  setScreen("secret")
                }
                className="
                  mt-10
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-rose-600
                  px-10
                  py-4
                  text-lg
                  font-semibold
                  shadow-2xl
                  shadow-pink-500/30
                  transition
                "
              >
                Buka Surprise ❤️
              </motion.button>

              {/* HINT */}

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.8,
                }}
                className="
                  mt-5
                  text-xs
                  text-white/45
                "
              >
                ada sesuatu yang menunggu kamu...
              </motion.p>

            </div>

          </motion.section>
        )}

        {/* =================================================
            SECRET CODE
        ================================================= */}

        {screen === "secret" && (
          <motion.section
            key="secret"
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.04,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              flex
              min-h-screen
              items-center
              justify-center
              overflow-hidden
              px-6
            "
          >

            {/* VIDEO BACKGROUND */}

            <video
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
              src="/videos/ultah.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />

            {/* DARK OVERLAY */}

            <div className="
              absolute
              inset-0
              bg-black/50
            " />

            {/* PINK OVERLAY */}

            <div className="
              absolute
              inset-0
              bg-gradient-to-b
              from-pink-950/25
              via-transparent
              to-black/45
            " />

            {/* SOFT GLOW */}

            <div className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-pink-500/10
              blur-[120px]
            " />

            {/* HEARTS */}

            <BackgroundHearts />

            {/* CARD */}

            <div className="
              relative
              z-20
              w-full
              max-w-md
            ">

              <motion.div
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  rounded-4xl
                  border
                  border-pink-300/20
                  bg-black/45
                  p-8
                  text-center
                  shadow-2xl
                  shadow-pink-950/50
                  backdrop-blur-xl
                "
              >

                {/* LOCK */}

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    mb-6
                    text-6xl
                    drop-shadow-[0_0_20px_rgba(255,80,180,0.5)]
                  "
                >
                  🔐
                </motion.div>

                <p className="
                  mb-2
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-pink-300
                ">
                  Kode Rahasia
                </p>

                <h2 className="
                  mb-4
                  text-3xl
                  font-bold
                  drop-shadow-lg
                ">
                  Sebelum lanjut...
                </h2>

                <p className="
                  mb-4
                  leading-relaxed
                  text-pink-100/90
                ">
                  Apa kepanjangan dari HTS?
                  <br />
                  pasti dd tau wkwkwk
                </p>

                {/* PETUNJUK */}

                <div className="
                  mb-3
                  rounded-2xl
                  border
                  border-pink-400/25
                  bg-black/35
                  p-4
                  backdrop-blur-md
                ">

                  <p className="
                    text-sm
                    text-pink-200
                  ">
                    Petunjuk:
                  </p>

                  <div className="
                    mt-3
                    border-t
                    border-white/10
                    pt-3
                  ">
                    <p className="
                      text-lg
                      font-semibold
                      tracking-[0.35em]
                      text-pink-200
                    ">
                      H&nbsp;&nbsp;T&nbsp;&nbsp;S
                    </p>
                  </div>

                </div>

                {/* INPUT */}

                <input
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCodeSubmit();
                    }
                  }}
                  autoFocus
                  placeholder="HTS apa Aurel?"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-pink-300/30
                    bg-black/40
                    px-5
                    py-3.5
                    text-center
                    text-lg
                    font-bold
                    uppercase
                    text-white
                    outline-none
                    backdrop-blur-md
                    transition
                    placeholder:text-white/30
                    focus:border-pink-400/70
                    focus:ring-2
                    focus:ring-pink-500/20
                  "
                />

                {/* ERROR */}

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="
                        mt-3
                        text-sm
                        text-rose-300
                      "
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* UNLOCK */}

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 0 35px rgba(244,63,94,0.45)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={
                    handleCodeSubmit
                  }
                  className="
                    mt-3
                    w-full
                    rounded-2xl
                    bg-gradient-to-r
                    from-pink-500
                    to-rose-600
                    px-6
                    py-3.5
                    font-semibold
                    shadow-lg
                    shadow-pink-500/30
                  "
                >
                  Unlock 🔓
                </motion.button>

                <p className="
                  mt-2
                  text-xs
                  text-white/40
                ">
                  Tulis kepanjangan dari HTS ❤️
                </p>

              </motion.div>

            </div>

          </motion.section>
        )}

        {/* =================================================
            BIRTHDAY
        ================================================= */}

        {screen === "birthday" && (
          <motion.section
            key="birthday"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="
              relative
              flex
              min-h-screen
              items-center
              justify-center
              overflow-hidden
              px-6
            "
          >

            {/* VIDEO BACKGROUND */}

            <video
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                opacity-25
              "
              src="/videos/kembangapi.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />

            {/* DARK OVERLAY */}

            <div className="
              absolute
              inset-0
              bg-black/65
            " />

            {/* PINK OVERLAY */}

            <div className="
              absolute
              inset-0
              bg-gradient-to-b
              from-pink-950/15
              via-transparent
              to-black/30
            " />

            <BackgroundHearts />

            {/* CONTENT */}

            <div className="
              relative
              z-10
              max-w-4xl
              py-16
              text-center
            ">

              {/* CAKE */}

              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 180,
                }}
                className="
                  mb-6
                  text-8xl
                "
              >
                🎂
              </motion.div>

              {/* DATE */}

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="
                  mb-4
                  text-sm
                  tracking-[0.3em]
                  text-pink-300
                "
              >
                8 SEPTEMBER 2026
              </motion.p>

              {/* TITLE */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                }}
                className="
                  text-5xl
                  font-black
                  md:text-7xl
                "
              >
                Happy Birthday
              </motion.h1>

              {/* NAME */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                }}
                className="
                  mt-3
                  bg-gradient-to-r
                  from-pink-300
                  via-white
                  to-rose-300
                  bg-clip-text
                  text-3xl
                  font-bold
                  text-transparent
                  md:text-5xl
                "
              >
                Aurelia Nuri Ramadhani ❤️
              </motion.h2>

              {/* FOTO AUREL */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1.3,
                  type: "spring",
                }}
                className="
                  mx-auto
                  mt-10
                  h-64
                  w-64
                  overflow-hidden
                  rounded-full
                  border-4
                  border-pink-300/30
                  shadow-2xl
                  shadow-pink-500/30
                "
              >
                <img
                  src="/2.jpg"
                  alt="Aurelia"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </motion.div>

              {/* MESSAGE */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.7,
                }}
                className="
                  mx-auto
                  mt-10
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-pink-100
                  md:text-xl
                "
              >
                "Hari ini bukan sekadar hari ulang tahun dd...
                <br />
                tapi hari di mana seseorang yang sangat berarti
                <br />
                bagi om dilahirkan.
                Selamat ulang tahun, Aurel! 💖🌹"
              </motion.p>

              {/* START STORY */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 2.1,
                }}
                className="mt-10"
              >

                <p className="
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-pink-300
                ">
                  Awal cerita kita
                </p>

                <p className="
                  mt-2
                  text-2xl
                  font-semibold
                ">
                  13 Juli 2025 💕
                </p>

              </motion.div>

              {/* GALLERY BUTTON */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 2.4,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() =>
                  setScreen("story")
                }
                className="
                  mt-10
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-rose-600
                  px-8
                  py-3.5
                  font-semibold
                  shadow-xl
                  shadow-pink-500/20
                "
              >
                See Gallery 📖
              </motion.button>

            </div>

          </motion.section>
        )}

        {/* =================================================
            OUR STORY
        ================================================= */}

        {screen === "story" && (
          <motion.div
            key="story"
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
              duration: 0.7,
            }}
          >

            <MemoryBook
              onComplete={() => {
                console.log(
                  "Lanjut ke surat"
                );
              }}
            />

          </motion.div>
        )}

      </AnimatePresence>

    </main>
  );
}


/* =========================================================
   BACKGROUND HEARTS
========================================================= */

function BackgroundHearts() {
  const hearts = [
    {
      left: "5%",
      top: "15%",
      delay: 0,
      size: "text-3xl",
    },
    {
      left: "15%",
      top: "70%",
      delay: 1,
      size: "text-xl",
    },
    {
      left: "28%",
      top: "20%",
      delay: 2,
      size: "text-2xl",
    },
    {
      left: "42%",
      top: "80%",
      delay: 1.5,
      size: "text-lg",
    },
    {
      left: "58%",
      top: "12%",
      delay: 0.5,
      size: "text-3xl",
    },
    {
      left: "72%",
      top: "65%",
      delay: 2.5,
      size: "text-2xl",
    },
    {
      left: "86%",
      top: "25%",
      delay: 1.2,
      size: "text-3xl",
    },
    {
      left: "92%",
      top: "80%",
      delay: 3,
      size: "text-xl",
    },
  ];

  return (
    <div className="
      pointer-events-none
      absolute
      inset-0
      z-10
      overflow-hidden
    ">
      {hearts.map(
        (heart, index) => (
          <motion.div
            key={index}
            className={`
              absolute
              ${heart.size}
              text-pink-500/30
            `}
            style={{
              left: heart.left,
              top: heart.top,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-8, 8, -8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              delay: heart.delay,
              repeat: Infinity,
            }}
          >
            ♥
          </motion.div>
        )
      )}
    </div>
  );
}


/* =========================================================
   FIREWORK CLICK BLAST
========================================================= */

function FireworkCursor() {
  const [bursts, setBursts] = useState<
    {
      id: number;
      x: number;
      y: number;
    }[]
  >([]);

  useEffect(() => {
    let burstId = 0;

    const handleClick = (
      event: MouseEvent
    ) => {
      const id = burstId++;

      setBursts((prev) => [
        ...prev,
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ]);

      window.setTimeout(() => {
        setBursts((prev) =>
          prev.filter(
            (burst) =>
              burst.id !== id
          )
        );
      }, 850);
    };

    window.addEventListener(
      "click",
      handleClick
    );

    return () => {
      window.removeEventListener(
        "click",
        handleClick
      );
    };
  }, []);

  return (
    <div className="
      pointer-events-none
      fixed
      inset-0
      z-[99999]
      overflow-hidden
    ">

      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="firework-burst"
          style={{
            left: burst.x,
            top: burst.y,
          }}
        >

          {/* CENTER */}

          <span className="firework-core" />

          {/* PARTICLES */}

          {Array.from({
            length: 20,
          }).map((_, index) => {

            const angle =
              (index / 20) *
              Math.PI *
              2;

            const distance =
              35 +
              (index % 4) * 14;

            const x =
              Math.cos(angle) *
              distance;

            const y =
              Math.sin(angle) *
              distance;

            return (
              <span
                key={index}
                className="firework-spark"
                style={
                  {
                    "--x": `${x}px`,
                    "--y": `${y}px`,
                    "--delay": `${index * 7}ms`,
                  } as React.CSSProperties
                }
              />
            );
          })}

          {/* RING */}

          <span className="firework-ring" />

        </div>
      ))}

    </div>
  );
}