"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Copy, Code, RotateCw, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface SpinResultModalProps {
  winner: string | null;
  onClose: () => void;
  onSpinAgain?: () => void;
}

const CONGRATS_HEADLINES = [
  "🎉 And the wheel says…",
  "🎉 Woohoo! It's decided —",
  "🎉 Spin's in. Here we go —",
  "🎉 No take-backs — the wheel has spoken:",
];

export default function SpinResultModal({
  winner,
  onClose,
  onSpinAgain,
}: SpinResultModalProps) {
  const [headline, setHeadline] = useState("");
  const [copied, setCopied] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    if (winner) {
      const randomIndex = Math.floor(Math.random() * CONGRATS_HEADLINES.length);
      setHeadline(CONGRATS_HEADLINES[randomIndex]);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#F7B801", "#FF6B35", "#00A859", "#0072BC", "#7B2CBF"],
        });
      } catch (_) {}
    }
  }, [winner]);

  if (!winner) return null;

  const handleCopy = () => {
    if (!winner) return;
    navigator.clipboard.writeText(winner);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const embedCode = `<iframe src="${typeof window !== "undefined" ? window.location.href : ""}" width="100%" height="650" frameborder="0"></iframe>`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          className="relative w-full max-w-md neo-card bg-cream dark:bg-retro-navy text-retro-navy dark:text-cream p-6 sm:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-md neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close celebration modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Winner Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider">
              <Trophy className="w-4 h-4" />
              Winner Selected!
            </div>
          </div>

          {/* Congrats Headline */}
          <p className="text-center font-bold text-sm sm:text-base opacity-80 mb-2">
            {headline}
          </p>

          {/* Result Text */}
          <div className="my-4 py-4 px-6 neo-card bg-retro-orange text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight break-words">
              {winner}
            </h2>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col gap-3 mt-6">
            {onSpinAgain && (
              <button
                onClick={() => {
                  onClose();
                  onSpinAgain();
                }}
                className="w-full py-3 neo-btn bg-retro-mint text-retro-navy font-black text-lg flex items-center justify-center gap-2 hover:scale-102 transition-transform cursor-pointer"
              >
                <RotateCw className="w-5 h-5" />
                Spin Again!
              </button>
            )}

            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="flex-1 py-2 px-3 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy Result"}
              </button>

              <button
                onClick={() => setShowEmbed(!showEmbed)}
                className="flex-1 py-2 px-3 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Code className="w-4 h-4" />
                Get Embed Code
              </button>
            </div>

            {showEmbed && (
              <div className="mt-2 p-3 neo-card bg-white dark:bg-slate-800 text-xs">
                <p className="font-bold mb-1">Paste this iframe code on your site:</p>
                <textarea
                  readOnly
                  rows={2}
                  value={embedCode}
                  className="w-full neo-input text-[10px] font-mono p-1 resize-none"
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
