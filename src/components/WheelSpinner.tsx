"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCw, Trash2, Plus, Volume2, VolumeX, Share2, Gauge, Code } from "lucide-react";
import ShareModal from "./ShareModal";

interface WheelSpinnerProps {
  initialOptions?: string[];
  storageKey?: string;
}

export default function WheelSpinner({
  initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  storageKey = "gamewheelclub-main-wheel",
}: WheelSpinnerProps) {
  const [options, setOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareModalTab, setShareModalTab] = useState<"qr" | "embed">("qr");
  const [shareUrl, setShareUrl] = useState("");
  const [spinPower, setSpinPower] = useState(60); // 20 to 100
  const [currentSpeed, setCurrentSpeed] = useState(0); // Real-time velocity for speedometer

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const rotationRef = useRef(0); // Current angle in degrees
  const animationFrameId = useRef<number | null>(null);
  const initialOptionsRef = useRef(initialOptions);

  const openShareModal = (tab: "qr" | "embed") => {
    setShareModalTab(tab);
    setIsShareOpen(true);
  };

  // Initialize options from URL query param `d` or localStorage or defaults
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dataParam = params.get("d");
    if (dataParam) {
      try {
        const decoded = decodeURIComponent(atob(dataParam));
        const parsed = JSON.parse(decoded);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setOptions(parsed);
          return;
        }
      } catch (err) {
        console.error("Failed to parse URL options:", err);
      }
    }

    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setOptions(parsed);
          return;
        }
      }
    } catch (err) {
      console.error("Failed to load options from localStorage:", err);
    }

    setOptions(initialOptionsRef.current);
  }, [storageKey]);

  // Persist options & build share URL
  useEffect(() => {
    if (options.length === 0) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(options));
    } catch (err) {
      console.error("Failed to save to localStorage:", err);
    }

    try {
      const jsonStr = JSON.stringify(options);
      const base64 = btoa(encodeURIComponent(jsonStr));
      const baseUrl = window.location.origin + window.location.pathname;
      setShareUrl(`${baseUrl}?d=${base64}`);
    } catch (err) {
      console.error("Failed to generate share URL:", err);
    }
  }, [options, storageKey]);

  // Web Audio Synthesizer for retro click sounds
  const playClickSound = (pitchMultiplier = 1) => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(440 * pitchMultiplier, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110 * pitchMultiplier, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (err) {
      console.error("Audio error:", err);
    }
  };

  // Web Audio Synthesizer for victory fanfare
  const playFanfare = () => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);

        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.3);
      });
    } catch (err) {
      console.error("Fanfare error:", err);
    }
  };

  // Redraw the canvas wheel whenever options or rotation changes
  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas || options.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.width;
    const center = size / 2;
    const outerRingWidth = 16;
    const radius = center - outerRingWidth - 5;
    ctx.clearRect(0, 0, size, size);

    const arcSize = (2 * Math.PI) / options.length;
    const rotationRad = (rotationRef.current * Math.PI) / 180;

    // Draw background outer gold ring
    ctx.beginPath();
    ctx.arc(center, center, radius + outerRingWidth, 0, 2 * Math.PI);
    ctx.fillStyle = "#D97706"; // Gold
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#0B132B";
    ctx.stroke();

    // Draw glowing RPM arc outside the gold ring
    ctx.beginPath();
    ctx.arc(center, center, radius + outerRingWidth + 2, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(11, 19, 43, 0.15)";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Color palette using HSL Golden Ratio distribution
    options.forEach((opt, idx) => {
      const startAngle = rotationRad + idx * arcSize;
      const endAngle = startAngle + arcSize;

      const hue = (idx * 137.508) % 360;
      const fillStyle = `hsl(${hue}, 85%, 62%)`;

      // Draw wedge
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = fillStyle;
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#0B132B"; // Retro Navy border
      ctx.stroke();

      // Draw Option Text
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + arcSize / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#0B132B";

      // Responsive font sizing based on length
      const textRadius = radius - 24;
      const fontSize = Math.max(14, Math.min(24, Math.floor(600 / options.length)));
      ctx.font = `900 ${fontSize}px 'Space Grotesk', sans-serif`;

      // Truncate long text cleanly
      let displayText = opt;
      if (displayText.length > 18) {
        displayText = displayText.substring(0, 16) + "...";
      }

      ctx.fillText(displayText, textRadius, fontSize / 3);
      ctx.restore();
    });

    // Draw Gold Bulbs along the outer ring
    const bulbCount = Math.max(12, options.length * 2);
    for (let b = 0; b < bulbCount; b++) {
      const bulbAngle = (b * (2 * Math.PI)) / bulbCount + rotationRad;
      const bx = center + (radius + outerRingWidth / 2) * Math.cos(bulbAngle);
      const by = center + (radius + outerRingWidth / 2) * Math.sin(bulbAngle);

      ctx.beginPath();
      ctx.arc(bx, by, 4, 0, 2 * Math.PI);
      ctx.fillStyle = b % 2 === 0 ? "#FEF08A" : "#FFFFFF"; // Glowing yellow / white bulbs
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#78350F";
      ctx.stroke();
    }

    // Draw Center Peg & Hub
    ctx.beginPath();
    ctx.arc(center, center, 32, 0, 2 * Math.PI);
    ctx.fillStyle = "#FAF5EC";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#0B132B";
    ctx.stroke();

    // Inner brass screw
    ctx.beginPath();
    ctx.arc(center, center, 14, 0, 2 * Math.PI);
    ctx.fillStyle = "#F59E0B";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#0B132B";
    ctx.stroke();
  };

  useEffect(() => {
    drawWheel();
  }, [options]);

  // Main Spin Physics Engine with dynamic easing
  const handleSpin = () => {
    if (isSpinning || options.length === 0) return;
    setIsSpinning(true);
    setWinner(null);

    // Calculate spin energy based on manual spinPower slider (20 to 100)
    const baseDegrees = 360 * 5; // Minimum 5 full spins
    const extraDegrees = (spinPower / 100) * 360 * 5; // Up to 5 additional spins
    const randomOffset = Math.random() * 360;
    const totalRotationTarget = rotationRef.current + baseDegrees + extraDegrees + randomOffset;

    const startRotation = rotationRef.current;
    const rotationDistance = totalRotationTarget - startRotation;
    // Spin duration scales from 3s up to 6s depending on power
    const duration = 3000 + (spinPower / 100) * 3000;
    const startTime = performance.now();

    const sectorAngle = 360 / options.length;
    let lastSectorIndex = -1;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Custom cubic ease-out curve for deceleration physics
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentRotation = startRotation + rotationDistance * easeOut;
      rotationRef.current = currentRotation;

      // Calculate instantaneous RPM speed
      const speedRpm = Math.max(0, Math.round((1 - progress) * (spinPower * 2.5)));
      setCurrentSpeed(speedRpm);

      drawWheel();

      // Trigger click sound when passing sector boundaries
      const pointerAngle = (270 - (currentRotation % 360) + 360) % 360;
      const currentSectorIndex = Math.floor(pointerAngle / sectorAngle) % options.length;

      if (currentSectorIndex !== lastSectorIndex) {
        lastSectorIndex = currentSectorIndex;
        // Pitch shifts higher as speed increases
        playClickSound(1 + progress * 0.4);
      }

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setCurrentSpeed(0);
        const finalPointerAngle = (270 - (totalRotationTarget % 360) + 360) % 360;
        const winningIndex = Math.floor(finalPointerAngle / sectorAngle) % options.length;
        const selectedWinner = options[winningIndex] || options[0];

        setWinner(selectedWinner);
        playFanfare();
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const addOption = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOption.trim()) return;
    setOptions([...options, newOption.trim()]);
    setNewOption("");
  };

  const removeOption = (index: number) => {
    if (options.length <= 1) return;
    const updated = options.filter((_, i) => i !== index);
    setOptions(updated);
  };

  const bulkAddOptions = (rawText: string) => {
    const list = rawText
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    setOptions(list);
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-6 px-4">
      {/* Spinner & Canvas Column */}
      <div className="flex flex-col items-center justify-center relative w-full">
        {/* Pointer Arrow */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-square flex items-center justify-center">
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-20 drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]">
            <div className="w-8 h-10 bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-600 rounded-t-md relative flex items-center justify-center border border-amber-700">
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-amber-600 absolute bottom-[-18px]" />
              <div className="w-2 h-2 rounded-full bg-white shadow-inner animate-pulse" />
            </div>
          </div>

          {/* Wheel Frame */}
          <div className="relative neo-border bg-amber-950 p-3 rounded-full w-full h-full flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={800}
                height={800}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Speedometer indicator while spinning */}
        {isSpinning && (
          <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-retro-navy text-retro-yellow font-black text-xs neo-border animate-pulse">
            <Gauge className="w-4 h-4 text-retro-orange animate-spin" />
            <span>SPEED: {currentSpeed} RPM</span>
          </div>
        )}

        {/* Primary Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <button
            id="spin-button"
            onClick={handleSpin}
            disabled={isSpinning || options.length === 0}
            className="px-8 py-3 neo-btn bg-retro-orange text-white dark:text-retro-navy text-lg flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50 font-bold cursor-pointer"
            aria-label="Spin the decision wheel"
          >
            <RotateCw className={`w-5 h-5 ${isSpinning ? "animate-spin" : ""}`} aria-hidden="true" />
            <span>{isSpinning ? "Spinning..." : "SPIN!"}</span>
          </button>

          <button
            id="sound-toggle-btn"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Sound"
            aria-pressed={soundEnabled}
            title={soundEnabled ? "Mute Sound" : "Enable Sound"}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" aria-hidden="true" /> : <VolumeX className="w-5 h-5" aria-hidden="true" />}
            <span className="sr-only">{soundEnabled ? "Mute Sound" : "Enable Sound"}</span>
          </button>

          <button
            id="embed-btn"
            onClick={() => openShareModal("embed")}
            className="px-3.5 py-3 neo-btn bg-retro-mint text-retro-navy hover:scale-105 transition-transform flex items-center gap-1.5 font-bold text-sm cursor-pointer"
            title="Get HTML Embed Code for website"
            aria-label="Embed Wheel Code"
          >
            <Code className="w-5 h-5" aria-hidden="true" />
            <span>Embed</span>
          </button>

          <button
            id="share-btn"
            onClick={() => openShareModal("qr")}
            className="px-3.5 py-3 neo-btn bg-retro-blue text-white dark:text-retro-navy hover:scale-105 transition-transform flex items-center gap-1.5 font-bold text-sm cursor-pointer"
            title="Share via QR Code"
            aria-label="Share via QR Code"
          >
            <Share2 className="w-5 h-5" aria-hidden="true" />
            <span>Share</span>
          </button>
        </div>

        {/* Winner Announcement */}
        {winner && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-6 p-4 neo-card bg-retro-yellow text-retro-navy text-center max-w-sm"
            role="region"
            aria-live="polite"
          >
            <p className="text-xs uppercase font-extrabold tracking-widest text-retro-navy/80">The Winner is</p>
            <h3 className="text-2xl font-black">{winner}</h3>
          </motion.div>
        )}
      </div>

      {/* Editor Column */}
      <div className="neo-card p-6 bg-white dark:bg-retro-navy transition-colors">
        <h2 className="text-xl font-bold font-display mb-4 border-b-3 border-retro-navy dark:border-cream pb-2">
          Wheel Options
        </h2>

        {/* Single Add Form */}
        <form onSubmit={addOption} className="flex gap-2 mb-4">
          <input
            id="option-input"
            type="text"
            placeholder="Add new option..."
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            className="flex-1 neo-input"
            maxLength={30}
            aria-label="Add new option"
          />
          <button
            id="add-option-btn"
            type="submit"
            className="px-4 py-2 neo-btn bg-retro-mint text-retro-navy flex items-center justify-center gap-1 hover:scale-102 transition-transform cursor-pointer"
            aria-label="Add option"
          >
            <Plus className="w-5 h-5" aria-hidden="true" />
            <span className="font-bold text-sm">Add</span>
          </button>
        </form>

        {/* List of current options */}
        <div className="max-h-[200px] overflow-y-auto mb-4 border-2 border-retro-navy dark:border-cream rounded-lg p-2 bg-cream dark:bg-retro-navy/40">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white dark:bg-retro-navy border border-retro-navy/20 dark:border-cream/20 rounded px-3 py-2 mb-1 text-sm font-semibold"
            >
              <span>{opt}</span>
              <button
                onClick={() => removeOption(idx)}
                className="text-retro-orange hover:text-red-600 transition-colors p-1 cursor-pointer"
                aria-label={`Remove option ${opt}`}
              >
                <Trash2 className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">Remove {opt}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bulk Input option */}
        <div className="mb-4">
          <label htmlFor="bulk-edit-textarea" className="block text-xs font-bold uppercase tracking-wider mb-2 text-retro-navy/80 dark:text-cream/80">
            Bulk Edit (one option per line)
          </label>
          <textarea
            id="bulk-edit-textarea"
            rows={3}
            placeholder="Paste your options here..."
            onChange={(e) => bulkAddOptions(e.target.value)}
            value={options.join("\n")}
            className="w-full neo-input text-sm resize-none"
          />
        </div>

        {/* Manual Speed (Power) Slider */}
        <div className="border-t-2 border-retro-navy/10 dark:border-cream/10 pt-4">
          <div className="flex justify-between items-center mb-1.5">
            <label htmlFor="spin-power-slider" className="text-xs font-black uppercase tracking-wider text-retro-navy/80 dark:text-cream/80 flex items-center gap-1.5">
              <Gauge className="w-4 h-4 text-retro-orange animate-pulse" />
              Manual Spin Power
            </label>
            <span className="text-sm font-black text-retro-orange">{spinPower}%</span>
          </div>
          <input
            id="spin-power-slider"
            type="range"
            min="20"
            max="100"
            step="5"
            value={spinPower}
            onChange={(e) => setSpinPower(Number(e.target.value))}
            disabled={isSpinning}
            className="w-full accent-retro-orange cursor-pointer"
            aria-label="Manual Spin Power"
          />
          <div className="flex justify-between text-[10px] font-bold text-retro-navy/60 dark:text-cream/60 mt-1">
            <span>Slow</span>
            <span>Medium</span>
            <span>Turbo</span>
          </div>
        </div>

        {/* Dedicated Embed Wheel Box */}
        <div className="border-t-2 border-retro-navy/10 dark:border-cream/10 pt-4 mt-4 text-center">
          <label className="block text-xs font-black uppercase tracking-wider mb-2 text-retro-navy/80 dark:text-cream/80">
            Embed Wheel on Your Site
          </label>
          <button
            id="get-embed-code-btn"
            onClick={() => openShareModal("embed")}
            className="w-full py-2.5 neo-btn bg-retro-mint text-retro-navy font-bold flex items-center justify-center gap-2 hover:scale-102 transition-transform cursor-pointer text-xs"
          >
            <Code className="w-4 h-4" aria-hidden="true" />
            <span>Get Embed Code (&lt;iframe&gt;)</span>
          </button>
        </div>
      </div>

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        shareUrl={shareUrl}
        defaultTab={shareModalTab}
      />
    </div>
  );
}
