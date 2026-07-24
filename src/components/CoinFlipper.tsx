"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { HelpCircle, Coins } from "lucide-react";

export default function CoinFlipper() {
  const [result, setResult] = useState<"Heads" | "Tails" | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleFlip = async () => {
    if (isFlipped) return;
    setIsFlipped(true);
    setResult(null);

    const outcomes: ("Heads" | "Tails")[] = ["Heads", "Tails"];
    const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];

    // Spin multiple times
    const spins = 4 + Math.floor(Math.random() * 3); // 4 to 6 spins
    const targetRotateX = spins * 360 + (randomResult === "Tails" ? 180 : 0);

    await controls.start({
      rotateX: targetRotateX,
      transition: { duration: 1.5, ease: "easeOut" },
    });

    setResult(randomResult);
    setIsFlipped(false);
  };

  return (
    <div className="w-full max-w-md mx-auto neo-card p-8 bg-white dark:bg-retro-navy text-center flex flex-col items-center gap-6">
      <div className="relative w-40 h-40" style={{ perspective: 1000 }}>
        <motion.div
          animate={controls}
          className="w-full h-full rounded-full neo-border relative flex items-center justify-center font-display text-2xl font-black shadow-lg"
          style={{
            transformStyle: "preserve-3d",
            backgroundColor: "#FDDF5C", // Retro Yellow for heads
            color: "#0B132B",
          }}
        >
          {/* Heads Side */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Coins className="w-12 h-12 mb-1 text-retro-orange" />
            <span>HEADS</span>
          </div>

          {/* Tails Side */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-full"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateX(180deg)",
              backgroundColor: "#FAF5EC", // Cream for tails
            }}
          >
            <Coins className="w-12 h-12 mb-1 text-retro-blue" />
            <span>TAILS</span>
          </div>
        </motion.div>
      </div>

      <button
        id="coin-flip-btn"
        onClick={handleFlip}
        disabled={isFlipped}
        aria-label="Flip coin to decide Heads or Tails"
        className="px-8 py-3 neo-btn bg-retro-orange text-white dark:text-retro-navy text-lg font-black tracking-wide hover:scale-105 transition-transform disabled:opacity-50"
      >
        {isFlipped ? "Flipping..." : "FLIP COIN"}
      </button>

      {result && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          role="region"
          aria-live="polite"
          className="mt-2 p-3 neo-card bg-retro-mint text-retro-navy text-xl font-black w-full"
        >
          Result: {result}
        </motion.div>
      )}
    </div>
  );
}
