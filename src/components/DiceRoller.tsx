"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DiceRoller() {
  const [diceCount, setDiceCount] = useState<number>(1);
  const [diceValues, setDiceValues] = useState<number[]>([6]);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return;
    setIsRolling(true);

    let rollCount = 0;
    const interval = setInterval(() => {
      setDiceValues(
        Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1)
      );
      rollCount++;
      if (rollCount > 10) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 80);
  };

  const getDots = (value: number) => {
    switch (value) {
      case 1:
        return [{ row: 2, col: 2 }];
      case 2:
        return [{ row: 1, col: 1 }, { row: 3, col: 3 }];
      case 3:
        return [{ row: 1, col: 1 }, { row: 2, col: 2 }, { row: 3, col: 3 }];
      case 4:
        return [{ row: 1, col: 1 }, { row: 1, col: 3 }, { row: 3, col: 1 }, { row: 3, col: 3 }];
      case 5:
        return [{ row: 1, col: 1 }, { row: 1, col: 3 }, { row: 2, col: 2 }, { row: 3, col: 1 }, { row: 3, col: 3 }];
      case 6:
        return [{ row: 1, col: 1 }, { row: 1, col: 3 }, { row: 2, col: 1 }, { row: 2, col: 3 }, { row: 3, col: 1 }, { row: 3, col: 3 }];
      default:
        return [];
    }
  };

  const total = diceValues.reduce((sum, val) => sum + val, 0);

  return (
    <div className="w-full max-w-md mx-auto neo-card p-8 bg-white dark:bg-retro-navy text-center flex flex-col items-center gap-6">
      {/* Dice Selector */}
      <div className="flex gap-2 items-center">
        <span className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">Dice Count:</span>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            id={`dice-count-${num}-btn`}
            onClick={() => {
              if (isRolling) return;
              setDiceCount(num);
              setDiceValues(Array(num).fill(6));
            }}
            aria-label={`Select ${num} dice`}
            aria-pressed={diceCount === num}
            className={`px-4 py-1.5 neo-btn text-sm ${
              diceCount === num ? "bg-retro-blue text-white" : "bg-white dark:bg-retro-navy text-retro-navy dark:text-cream"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Dice Display Area */}
      <div className="flex justify-center items-center gap-6 min-h-[120px] py-4">
        {diceValues.map((val, idx) => (
          <motion.div
            key={idx}
            animate={isRolling ? { rotate: [0, 90, 180, 270, 360], scale: [1, 0.9, 1.1, 1] } : {}}
            transition={{ duration: 0.8 }}
            className="w-24 h-24 neo-card bg-cream dark:bg-white text-retro-navy p-3 grid grid-cols-3 grid-rows-3 gap-1 relative shadow-inner"
            aria-label={`Dice showing ${val}`}
          >
            {getDots(val).map((dot, dotIdx) => (
              <div
                key={dotIdx}
                className="w-3.5 h-3.5 bg-retro-navy rounded-full self-center justify-self-center"
                style={{
                  gridRowStart: dot.row,
                  gridColumnStart: dot.col,
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      <button
        id="dice-roll-btn"
        onClick={rollDice}
        disabled={isRolling}
        aria-label="Roll dice"
        className="px-8 py-3 neo-btn bg-retro-orange text-white dark:text-retro-navy text-lg font-black tracking-wide hover:scale-105 transition-transform disabled:opacity-50"
      >
        {isRolling ? "Rolling..." : "ROLL DICE"}
      </button>

      {!isRolling && (
        <div
          role="region"
          aria-live="polite"
          className="mt-2 p-3 neo-card bg-retro-yellow text-retro-navy text-xl font-black w-full"
        >
          Total Score: {total}
        </div>
      )}
    </div>
  );
}
