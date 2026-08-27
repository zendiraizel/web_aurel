"use client";

import { useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { motion } from "framer-motion";

const loves = [
  { x: 5, y: 10, size: 28, rotate: -15 },
  { x: 18, y: 25, size: 18, rotate: 12 },
  { x: 32, y: 8, size: 22, rotate: -8 },
  { x: 48, y: 20, size: 16, rotate: 15 },
  { x: 62, y: 7, size: 30, rotate: -12 },
  { x: 78, y: 24, size: 20, rotate: 10 },
  { x: 92, y: 12, size: 26, rotate: -5 },

  { x: 8, y: 48, size: 20, rotate: 8 },
  { x: 25, y: 65, size: 32, rotate: -15 },
  { x: 40, y: 52, size: 18, rotate: 10 },
  { x: 58, y: 70, size: 24, rotate: -8 },
  { x: 74, y: 55, size: 17, rotate: 15 },
  { x: 90, y: 68, size: 29, rotate: -10 },

  { x: 12, y: 88, size: 26, rotate: 12 },
  { x: 30, y: 92, size: 16, rotate: -10 },
  { x: 50, y: 85, size: 28, rotate: 8 },
  { x: 68, y: 94, size: 19, rotate: -15 },
  { x: 85, y: 86, size: 24, rotate: 10 },
];

export default function LoveBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const startPosition = useRef({ x: 0, y: 0 });

  const bind = useDrag(
    ({ first, movement: [mx, my], last }) => {
      if (first) {
        startPosition.current = position;
      }

      setPosition({
        x: startPosition.current.x + mx,
        y: startPosition.current.y + my,
      });

      if (last) {
        // Sedikit kembali ke tengah setelah dilepas
        setPosition((current) => ({
          x: current.x * 0.85,
          y: current.y * 0.85,
        }));
      }
    },
    {
      pointer: {
        touch: true,
      },
      filterTaps: true,
    }
  );

  return (
    <div
      {...bind()}
      className="fixed inset-0 z-0 cursor-grab overflow-hidden touch-none active:cursor-grabbing"
    >
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className="absolute inset-[-10%]"
      >
        {loves.map((love, index) => (
          <motion.div
            key={index}
            className="absolute select-none text-pink-500/40"
            style={{
              left: `${love.x}%`,
              top: `${love.y}%`,
              fontSize: `${love.size}px`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [
                love.rotate,
                love.rotate + 8,
                love.rotate,
              ],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 3 + (index % 3),
              repeat: Infinity,
              delay: index * 0.15,
            }}
          >
            ♥
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}