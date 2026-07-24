"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCw, Trash2, Plus, Volume2, VolumeX, Share2, Gauge } from "lucide-react";
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
  const [shareUrl, setShareUrl] = useState("");
  const [spinPower, setSpinPower] = useState(60); // 20 to 100
  const [currentSpeed, setCurrentSpeed] = useState(0); // Real-time velocity for speedometer

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const rotationRef = useRef(0); // Current angle in degrees
  const animationFrameId = useRef<number | null>(null);
  // Capture initialOptions once so it never triggers re-renders
  const initialOptionsRef = useRef(initialOptions);

  // Initialize options from URL query param `d` or localStorage or defaults
  // useEffect only runs client-side, no need for typeof window check
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dataParam = params.get("d");
    if (dataParam) {
      try {
        const decodedJson = decodeURIComponent(
          escape(atob(dataParam.replace(/-/g, "+").replace(/_/g, "/")))
        );
        const parsed = JSON.parse(decodedJson);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setOptions(parsed);
          return;
        }
      } catch (e) {
        console.error("Failed to decode options from URL:", e);
      }
    }

    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setOptions(parsed);
          return;
        }
      } catch { /* ignore */ }
    }
    setOptions(initialOptionsRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  // Update share URL whenever options change
  useEffect(() => {
    if (options.length === 0) return;
    try {
      const baseUrl = window.location.origin + window.location.pathname;
      const jsonStr = JSON.stringify(options);
      const base64 = btoa(unescape(encodeURIComponent(jsonStr)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
      setShareUrl(`${baseUrl}?d=${base64}`);
    } catch (e) {
      console.error("Failed to generate share URL:", e);
    }
  }, [options]);

  // Save to localStorage when changed
  useEffect(() => {
    if (options.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(options));
    }
  }, [options, storageKey]);

  // Audio trigger for tick sound
  const playTickSound = () => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(700, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (_) {}
  };

  // Generate a unique color for each option to ensure no repeating colors
  const getSliceColor = (idx: number, total: number) => {
    const hue = (idx * 360) / total;
    return `hsl(${hue}, 80%, 55%)`;
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
    ctx.strokeStyle = "rgba(11, 19, 43, 0.15)"; // Subtle track
    ctx.lineWidth = 4;
    ctx.stroke();

    if (currentSpeed > 0) {
      const speedPercentage = Math.min(100, (currentSpeed / 1000) * 100);
      let speedColor = "#10B981"; // green
      if (speedPercentage > 40) speedColor = "#EAB308"; // yellow
      if (speedPercentage > 75) speedColor = "#EF4444"; // red

      ctx.save();
      ctx.beginPath();
      ctx.arc(
        center,
        center,
        radius + outerRingWidth + 2,
        -Math.PI / 2,
        -Math.PI / 2 + (speedPercentage / 100) * 2 * Math.PI
      );
      ctx.strokeStyle = speedColor;
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.shadowColor = speedColor;
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.restore();
    }

    // Draw Casino light bulbs on outer gold ring
    const numBulbs = Math.max(12, options.length * 2);
    for (let i = 0; i < numBulbs; i++) {
      const angle = (i * 2 * Math.PI) / numBulbs + rotationRad;
      const bulbX = center + (radius + outerRingWidth / 2) * Math.cos(angle);
      const bulbY = center + (radius + outerRingWidth / 2) * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(bulbX, bulbY, 3, 0, 2 * Math.PI);
      // Alternating lit effect based on angle rotation
      const isLit = Math.floor(rotationRef.current / 15 + i) % 2 === 0;
      ctx.fillStyle = isLit ? "#FEE2E2" : "#FEF08A"; // Dynamic Gold/Yellow lights
      ctx.fill();
      ctx.strokeStyle = "#0B132B";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw slices
    options.forEach((opt, idx) => {
      const startAngle = idx * arcSize - Math.PI / 2 + rotationRad;
      const endAngle = startAngle + arcSize;

      // Draw Slice
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.fillStyle = getSliceColor(idx, options.length);
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#D97706"; // Gold divider line
      ctx.stroke();

      // Draw Text
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + arcSize / 2);
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      
      const fontSize = Math.max(11, Math.min(20, Math.floor(250 / Math.sqrt(options.length))));
      ctx.font = `900 ${fontSize}px "Arial Black", "Impact", sans-serif`;
      const text = opt.length > 15 ? opt.substring(0, 13) + "..." : opt;
      
      // Outline text
      ctx.lineJoin = "round";
      ctx.miterLimit = 2;
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 3;
      ctx.strokeText(text, radius - 20, 0);
      
      // Fill text
      ctx.fillStyle = "#0B132B";
      ctx.fillText(text, radius - 20, 0);
      ctx.restore();
    });

    // Draw inner gold ring
    ctx.beginPath();
    ctx.arc(center, center, 28, 0, 2 * Math.PI);
    ctx.fillStyle = "#D97706";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#0B132B";
    ctx.stroke();

    // Center jewel/hub
    ctx.beginPath();
    ctx.arc(center, center, 14, 0, 2 * Math.PI);
    ctx.fillStyle = "#FAF5EC";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#0B132B";
    ctx.stroke();
  };

  // Re-draw on option updates
  useEffect(() => {
    drawWheel();
  }, [options]);

  const handleSpin = () => {
    if (isSpinning || options.length === 0) return;
    setIsSpinning(true);
    setWinner(null);

    // Initial velocity proportional to spin power (degrees per frame)
    // Plus a small random factor to ensure unpredictable results
    let velocity = (spinPower / 4) + (Math.random() * 4 - 2);
    const friction = 0.988; // Deceleration rate
    const sliceAngle = 360 / options.length;
    let lastTickAngle = rotationRef.current;

    const animate = () => {
      rotationRef.current += velocity;
      
      // Keep rotation in bounds [0, 360)
      if (rotationRef.current >= 360) {
        rotationRef.current -= 360;
        lastTickAngle -= 360;
      }

      // Calculate RPM for speedometer
      // RPM = (velocity degrees/frame * 60 frames/sec * 60 sec) / 360 degrees = velocity * 10
      setCurrentSpeed(Math.round(velocity * 10));

      // Play tick sound when crossing a slice boundary
      const currentTickDiff = Math.abs(rotationRef.current - lastTickAngle);
      if (currentTickDiff >= sliceAngle) {
        playTickSound();
        lastTickAngle = rotationRef.current;
      }

      // Draw wheel frame
      drawWheel();

      // Apply friction
      velocity *= friction;

      if (velocity > 0.05) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        // Spin finished
        setIsSpinning(false);
        setCurrentSpeed(0);

        // Determine winner: Top pointer is at 270 degrees canvas coordinates
        // Wheel turns clockwise, so winner slice is offset counter-clockwise
        const finalRotationOffset = rotationRef.current % 360;
        const winnerIdx = Math.floor((360 - finalRotationOffset) / sliceAngle) % options.length;
        const finalWinner = options[winnerIdx < 0 ? winnerIdx + options.length : winnerIdx];

        setWinner(finalWinner);
      }
    };

    // Run animation
    animationFrameId.current = requestAnimationFrame(animate);
  };

  // Cancel any running animations on unmount
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

  const removeOption = (idx: number) => {
    if (options.length <= 2) {
      alert("You need at least 2 options to spin!");
      return;
    }
    const updated = options.filter((_, i) => i !== idx);
    setOptions(updated);
  };

  const bulkAddOptions = (text: string) => {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
    if (lines.length > 0) {
      setOptions(lines);
    }
  };

  // Speedometer details: calculate needle rotation angle
  // Map speed (0 to 1000 RPM) to speedometer degrees (-120 to 120 deg)
  const speedPercentage = Math.min(100, (currentSpeed / 1000) * 100);
  const needleRotation = -120 + (speedPercentage * 2.4);

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6 px-4">
      {/* Wheel Column */}
      <div className="flex flex-col items-center justify-center relative">
        {/* Casino themed pointer */}
        <div className="absolute top-[2px] z-10 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[30px] border-l-transparent border-r-transparent border-t-retro-orange drop-shadow-[0_4px_0_rgba(11,19,43,0.3)]" />

        <div className="relative neo-border bg-white dark:bg-retro-navy p-4 rounded-full aspect-square w-full max-w-[400px] flex items-center justify-center overflow-hidden">
          <canvas
            ref={canvasRef}
            width={380}
            height={380}
            className="w-full h-full rounded-full"
          />
        </div>

        {/* Real-time Racing Car Speedometer Dial */}
        <div className="mt-6 flex flex-col items-center w-full max-w-[240px]">
          <div className="relative w-full h-[120px] overflow-hidden flex justify-center">
            {/* Speedometer Arc Gauge */}
            <svg viewBox="0 0 100 50" className="w-full h-full">
              {/* Dial Track */}
              <path
                d="M 10 45 A 40 40 0 0 1 90 45"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="8"
                strokeLinecap="round"
                className="dark:stroke-retro-navy/60"
              />
              {/* Dynamic filled arc (Green to Red style) */}
              <path
                d="M 10 45 A 40 40 0 0 1 90 45"
                fill="none"
                stroke="url(#speed-gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="126"
                strokeDashoffset={126 - (126 * speedPercentage) / 100}
              />
              {/* Gradients */}
              <defs>
                <linearGradient id="speed-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" /> {/* Green */}
                  <stop offset="60%" stopColor="#EAB308" /> {/* Yellow */}
                  <stop offset="100%" stopColor="#EF4444" /> {/* Red */}
                </linearGradient>
              </defs>
              {/* Speed Text */}
              <text x="50" y="32" textAnchor="middle" className="fill-retro-navy dark:fill-cream font-black text-[9px]">
                {currentSpeed}
              </text>
              <text x="50" y="42" textAnchor="middle" className="fill-retro-navy/60 dark:fill-cream/60 font-bold text-[6px] uppercase tracking-wider">
                RPM
              </text>
            </svg>
            
            {/* Speedometer Needle */}
            <div
              className="absolute bottom-1 w-[4px] h-[45px] bg-retro-orange origin-bottom rounded-full transition-transform duration-75"
              style={{
                transform: `rotate(${needleRotation}deg)`,
                left: "calc(50% - 2px)",
              }}
            />
            {/* Needle center cap */}
            <div className="absolute bottom-[-6px] w-[14px] h-[14px] bg-retro-navy dark:bg-cream rounded-full border-2 border-retro-orange" />
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4 mt-2">
          <button
            id="spin-button"
            onClick={handleSpin}
            disabled={isSpinning || options.length === 0}
            className="px-8 py-3 neo-btn bg-retro-orange text-white dark:text-retro-navy text-lg flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
            aria-label="Spin the decision wheel"
          >
            <RotateCw className={`w-5 h-5 ${isSpinning ? "animate-spin" : ""}`} aria-hidden="true" />
            <span>{isSpinning ? "Spinning..." : "SPIN!"}</span>
          </button>
          
          <button
            id="sound-toggle-btn"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream hover:bg-slate-100 transition-colors"
            aria-label="Toggle Sound"
            aria-pressed={soundEnabled}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" aria-hidden="true" /> : <VolumeX className="w-5 h-5" aria-hidden="true" />}
            <span className="sr-only">{soundEnabled ? "Mute Sound" : "Enable Sound"}</span>
          </button>

          <button
            id="share-btn"
            onClick={() => setIsShareOpen(true)}
            className="p-3 neo-btn bg-retro-blue text-white dark:text-retro-navy hover:scale-105 transition-transform"
            aria-label="Share via QR Code"
            title="Share via QR Code"
          >
            <Share2 className="w-5 h-5" aria-hidden="true" />
            <span className="sr-only">Share via QR Code</span>
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
                className="text-retro-orange hover:text-red-600 transition-colors p-1"
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
      </div>
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        shareUrl={shareUrl}
      />
    </div>
  );
}
