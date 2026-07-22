"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { RotateCw, Trash2, Plus, Volume2, VolumeX, Share2 } from "lucide-react";

interface WheelSpinnerProps {
  initialOptions?: string[];
  storageKey?: string;
}

const CASINO_COLORS = [
  "#E61A22", // Casino Red
  "#1A1A1A", // Casino Charcoal
  "#00A859", // Casino Green
  "#F7B801", // Casino Gold
  "#0072BC", // Casino Blue
  "#7B2CBF", // Casino Purple
];

export default function WheelSpinner({
  initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  storageKey = "gamewheelclub-main-wheel",
}: WheelSpinnerProps) {
  const [options, setOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [bulkText, setBulkText] = useState("");
  const [spinSpeed, setSpinSpeed] = useState<"slow" | "medium" | "fast" | "instant">("medium");
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const controls = useAnimation();
  const rotationRef = useRef(0);

  const initialOptionsStr = JSON.stringify(initialOptions);

  // Initialize options from localStorage or defaults
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setOptions(JSON.parse(saved));
      } catch {
        setOptions(initialOptions);
      }
    } else {
      setOptions(initialOptions);
    }
  }, [storageKey, initialOptionsStr]);

  // Save to localStorage when changed
  useEffect(() => {
    if (options.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(options));
    }
  }, [options, storageKey]);

  // Sync bulkText when options change (if user is not actively editing)
  useEffect(() => {
    if (typeof document !== "undefined" && document.activeElement?.id !== "bulk-editor-textarea") {
      setBulkText(options.join("\n"));
    }
  }, [options]);

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
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (_) {}
  };

  // Redraw the canvas wheel whenever options or size changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || options.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.width;
    const center = size / 2;
    const outerRadius = center - 5;
    const rimInnerRadius = center - 35;
    const wheelRadius = rimInnerRadius;
    
    ctx.clearRect(0, 0, size, size);

    const arcSize = (2 * Math.PI) / options.length;

    // 1. Draw Slices
    options.forEach((opt, idx) => {
      const startAngle = idx * arcSize - Math.PI / 2;
      const endAngle = startAngle + arcSize;

      // Draw Slice
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, wheelRadius, startAngle, endAngle);
      
      // Select slice color dynamically using golden ratio so NO colors are repeated
      const hue = (idx * 137.5) % 360;
      ctx.fillStyle = `hsl(${hue}, 88%, 46%)`;
      ctx.fill();
      
      // Slice boundary line
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(center + wheelRadius * Math.cos(startAngle), center + wheelRadius * Math.sin(startAngle));
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.stroke();

      // Draw Text
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + arcSize / 2);
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      
      // Dynamically scale font size
      const fontSize = Math.max(14, Math.min(32, Math.floor(480 / Math.sqrt(options.length))));
      ctx.font = `900 ${fontSize}px "Outfit", "Arial Black", sans-serif`;
      
      const text = opt.length > 18 ? opt.substring(0, 15) + "..." : opt;
      
      // High-contrast outline
      ctx.lineJoin = "round";
      ctx.miterLimit = 2;
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 6;
      ctx.strokeText(text, wheelRadius - 40, 0);
      
      // Fill (always white for casino wheel readability)
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(text, wheelRadius - 40, 0);
      ctx.restore();
    });

    // 2. Draw Casino Outer Rim
    const rimGrad = ctx.createRadialGradient(center, center, rimInnerRadius, center, center, outerRadius);
    rimGrad.addColorStop(0, "#1A1A1A");
    rimGrad.addColorStop(0.3, "#3A2A0D");
    rimGrad.addColorStop(0.7, "#D4AF37");
    rimGrad.addColorStop(1, "#8A6D1C");

    ctx.beginPath();
    ctx.arc(center, center, outerRadius, 0, 2 * Math.PI);
    ctx.arc(center, center, rimInnerRadius, 0, 2 * Math.PI, true);
    ctx.fillStyle = rimGrad;
    ctx.fill();

    // Outer & Inner Gold borders
    ctx.beginPath();
    ctx.arc(center, center, outerRadius, 0, 2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#FFD700";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(center, center, rimInnerRadius, 0, 2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#FFD700";
    ctx.stroke();

    // 3. Draw Pegs / Pins at slice borders
    options.forEach((_, idx) => {
      const angle = idx * arcSize - Math.PI / 2;
      const pegX = center + rimInnerRadius * Math.cos(angle);
      const pegY = center + rimInnerRadius * Math.sin(angle);

      const pegGrad = ctx.createRadialGradient(pegX - 2, pegY - 2, 1, pegX, pegY, 6);
      pegGrad.addColorStop(0, "#FFFFFF");
      pegGrad.addColorStop(0.4, "#FFD700");
      pegGrad.addColorStop(1, "#8A6D1C");

      ctx.beginPath();
      ctx.arc(pegX, pegY, 6, 0, 2 * Math.PI);
      ctx.fillStyle = pegGrad;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#5A4510";
      ctx.stroke();
    });

    // 4. Draw Casino Light Bulbs along the Rim
    const bulbCount = Math.max(24, options.length * 2);
    for (let i = 0; i < bulbCount; i++) {
      const angle = (i * 2 * Math.PI) / bulbCount;
      const bulbRadius = (outerRadius + rimInnerRadius) / 2;
      const bx = center + bulbRadius * Math.cos(angle);
      const by = center + bulbRadius * Math.sin(angle);

      const isEven = i % 2 === 0;
      const bulbGrad = ctx.createRadialGradient(bx - 2, by - 2, 1, bx, by, 7);
      if (isEven) {
        bulbGrad.addColorStop(0, "#FFFFFF");
        bulbGrad.addColorStop(0.3, "#FFF176");
        bulbGrad.addColorStop(1, "#F7B801");
      } else {
        bulbGrad.addColorStop(0, "#FFFFFF");
        bulbGrad.addColorStop(0.3, "#FF8A80");
        bulbGrad.addColorStop(1, "#D50000");
      }

      ctx.beginPath();
      ctx.arc(bx, by, 7, 0, 2 * Math.PI);
      ctx.fillStyle = bulbGrad;
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = isEven ? "#B78A02" : "#7F0000";
      ctx.stroke();
    }

    // 5. Center Cap Dome (3D Metallic Gold)
    const centerCapRadius = 38;
    const centerGrad = ctx.createRadialGradient(center - 5, center - 5, 2, center, center, centerCapRadius);
    centerGrad.addColorStop(0, "#FFFFFF");
    centerGrad.addColorStop(0.2, "#FFE082");
    centerGrad.addColorStop(0.6, "#FFB300");
    centerGrad.addColorStop(1, "#FF6F00");

    ctx.beginPath();
    ctx.arc(center, center, centerCapRadius, 0, 2 * Math.PI);
    ctx.fillStyle = centerGrad;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#5A4510";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(center, center, 14, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFD700";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#5A4510";
    ctx.stroke();

    // 6. Glossy Sweep Overhead Overlay
    const glossGrad = ctx.createLinearGradient(0, 0, size, size);
    glossGrad.addColorStop(0, "rgba(255, 255, 255, 0.18)");
    glossGrad.addColorStop(0.4, "rgba(255, 255, 255, 0.05)");
    glossGrad.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    glossGrad.addColorStop(1, "rgba(0, 0, 0, 0.15)");

    ctx.beginPath();
    ctx.arc(center, center, outerRadius, 0, 2 * Math.PI);
    ctx.fillStyle = glossGrad;
    ctx.fill();
  }, [options]);

  const handleSpin = async () => {
    if (isSpinning || options.length === 0) return;
    setIsSpinning(true);
    setWinner(null);

    // Dynamic duration and rotations based on user selected spinSpeed
    let duration = 4;
    let spinRotations = 6 + Math.random() * 4; // 6 to 10 rotations

    if (spinSpeed === "slow") {
      duration = 6;
      spinRotations = 3 + Math.random() * 2; // 3 to 5
    } else if (spinSpeed === "fast") {
      duration = 2.2;
      spinRotations = 10 + Math.random() * 4; // 10 to 14
    } else if (spinSpeed === "instant") {
      duration = 0.8;
      spinRotations = 15 + Math.random() * 5; // 15 to 20
    }

    const targetDegrees = spinRotations * 360;
    const finalRotation = rotationRef.current + targetDegrees;

    const arcAngle = 360 / options.length;
    const currentAngleOffset = (finalRotation % 360);
    const winnerIdx = Math.floor((360 - currentAngleOffset) / arcAngle) % options.length;
    const finalWinner = options[winnerIdx < 0 ? winnerIdx + options.length : winnerIdx];

    // Smooth physics-based tick sounds using requestAnimationFrame
    const startTime = Date.now();
    const startRotation = rotationRef.current;
    const totalRotation = targetDegrees;
    
    // Easing curve (cubic bezier easeOut approximation)
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    
    let lastTickIndex = Math.floor(startRotation / (360 / options.length));
    
    const animateTicks = () => {
      if (!isSpinning) return;
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentEase = spinSpeed === "instant" ? easeOutCubic(progress) : easeOutQuart(progress);
      const currentRotation = startRotation + totalRotation * currentEase;
      
      const arcDegrees = 360 / options.length;
      const currentTickIndex = Math.floor(currentRotation / arcDegrees);
      
      if (currentTickIndex !== lastTickIndex) {
        playTickSound();
        lastTickIndex = currentTickIndex;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateTicks);
      }
    };
    
    requestAnimationFrame(animateTicks);

    await controls.start({
      rotate: finalRotation,
      transition: { duration, ease: [0.15, 0.85, 0.35, 1] },
    });

    rotationRef.current = finalRotation;
    setWinner(finalWinner);
    setIsSpinning(false);
  };

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

  const handleBulkChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setBulkText(val);
    const lines = val
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
    if (lines.length >= 2) {
      setOptions(lines);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6 px-4">
      {/* Wheel Column */}
      <div className="flex flex-col items-center justify-center relative w-full">
        {/* Responsive Aspect-Square Container for the entire wheel and pointer */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-square flex items-center justify-center">
          {/* Pointer */}
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-20 drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]">
            <div className="w-8 h-10 bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-600 rounded-t-md relative flex items-center justify-center border border-amber-700">
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-amber-600 absolute bottom-[-18px]" />
              <div className="w-2 h-2 rounded-full bg-white shadow-inner animate-pulse" />
            </div>
          </div>

          {/* Wheel wrapper */}
          <div className="relative neo-border bg-amber-950 p-3 rounded-full w-full h-full flex items-center justify-center overflow-hidden shadow-2xl">
            <motion.div
              animate={controls}
              className="w-full h-full flex items-center justify-center"
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <canvas
                ref={canvasRef}
                width={800}
                height={800}
                className="w-full h-full rounded-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={handleSpin}
            disabled={isSpinning || options.length === 0}
            className="px-8 py-3 neo-btn bg-retro-orange text-white dark:text-retro-navy text-lg flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
          >
            <RotateCw className={`w-5 h-5 ${isSpinning ? "animate-spin" : ""}`} />
            {isSpinning ? "Spinning..." : "SPIN!"}
          </button>
          
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>

          <select
            value={spinSpeed}
            onChange={(e) => setSpinSpeed(e.target.value as any)}
            className="p-3 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream font-bold text-sm focus:outline-none cursor-pointer"
            aria-label="Spin Speed"
          >
            <option value="slow">🐢 Slow</option>
            <option value="medium">⚡ Med</option>
            <option value="fast">🚀 Fast</option>
            <option value="instant">💥 Instant</option>
          </select>
        </div>

        {/* Winner Announcement */}
        {winner && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-6 p-4 neo-card bg-retro-yellow text-retro-navy text-center max-w-sm"
          >
            <p className="text-xs uppercase font-extrabold tracking-widest text-retro-navy/60">The Winner is</p>
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
            type="text"
            placeholder="Add new option..."
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            className="flex-1 neo-input"
            maxLength={30}
          />
          <button
            type="submit"
            className="px-4 py-2 neo-btn bg-retro-mint text-retro-navy flex items-center justify-center hover:scale-102 transition-transform"
          >
            <Plus className="w-5 h-5" />
          </button>
        </form>

        {/* List of current options */}
        <div className="mb-4 border-2 border-retro-navy dark:border-cream rounded-lg p-2 bg-cream dark:bg-retro-navy/40">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white dark:bg-retro-navy border border-retro-navy/20 dark:border-cream/20 rounded px-3 py-2 mb-1 text-sm font-semibold"
            >
              <span>{opt}</span>
              <button
                onClick={() => removeOption(idx)}
                className="text-retro-orange hover:text-red-600 transition-colors"
                aria-label={`Remove option ${opt}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bulk Input option */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-retro-navy/70 dark:text-cream/70">
            Bulk Edit (one option per line)
          </label>
          <textarea
            id="bulk-editor-textarea"
            rows={3}
            placeholder="Paste your options here..."
            onChange={handleBulkChange}
            value={bulkText}
            className="w-full neo-input text-sm resize-none"
          />
        </div>
      </div>
    </div>
  );
}
