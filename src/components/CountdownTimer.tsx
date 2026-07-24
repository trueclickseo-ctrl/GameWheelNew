"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";

export default function CountdownTimer() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Sync timeLeft when input numbers change (only if not running)
  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(minutes * 60 + seconds);
    }
  }, [minutes, seconds, isRunning]);

  // Timer loop
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      playAlarmSound();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isRunning, timeLeft]);

  const playAlarmSound = () => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      
      // Beep sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (_) {}
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(minutes * 60 + seconds);
  };

  const formatTime = (timeInSecs: number) => {
    const mins = Math.floor(timeInSecs / 60);
    const secs = timeInSecs % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-md mx-auto neo-card p-8 bg-white dark:bg-retro-navy text-center flex flex-col items-center gap-6">
      {/* Time Display */}
      <div className="text-6xl font-black font-display tracking-widest text-retro-navy dark:text-cream py-6 border-b-3 border-retro-navy dark:border-cream w-full">
        {formatTime(timeLeft)}
      </div>

      {/* Input Adjusters */}
      {!isRunning && (
        <div className="flex gap-4 justify-center items-center">
          <div className="flex flex-col gap-1">
            <label htmlFor="minutes-input" className="text-xs font-bold uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">Minutes</label>
            <input
              id="minutes-input"
              type="number"
              min={0}
              max={99}
              value={minutes}
              onChange={(e) => setMinutes(Math.min(99, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-20 text-center neo-input text-lg font-bold"
              aria-label="Minutes"
            />
          </div>
          <span className="font-bold text-2xl mt-4">:</span>
          <div className="flex flex-col gap-1">
            <label htmlFor="seconds-input" className="text-xs font-bold uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">Seconds</label>
            <input
              id="seconds-input"
              type="number"
              min={0}
              max={59}
              value={seconds}
              onChange={(e) => setSeconds(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-20 text-center neo-input text-lg font-bold"
              aria-label="Seconds"
            />
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex gap-4 items-center justify-center mt-2">
        <button
          id="timer-toggle-btn"
          onClick={handleStartPause}
          aria-label={isRunning ? "Pause timer" : "Start timer"}
          className={`px-8 py-3 neo-btn text-white dark:text-retro-navy text-lg flex items-center gap-2 hover:scale-105 transition-transform ${
            isRunning ? "bg-retro-orange" : "bg-retro-mint"
          }`}
        >
          {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          {isRunning ? "PAUSE" : "START"}
        </button>

        <button
          id="timer-reset-btn"
          onClick={handleReset}
          className="p-3 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream hover:bg-slate-100 transition-colors"
          aria-label="Reset Timer"
        >
          <RotateCcw className="w-5 h-5" aria-hidden="true" />
          <span className="sr-only">Reset Timer</span>
        </button>

        <button
          id="timer-sound-btn"
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-3 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream hover:bg-slate-100 transition-colors"
          aria-label="Toggle Alarm Sound"
          aria-pressed={soundEnabled}
        >
          {soundEnabled ? <Volume2 className="w-5 h-5" aria-hidden="true" /> : <VolumeX className="w-5 h-5" aria-hidden="true" />}
          <span className="sr-only">{soundEnabled ? "Disable Sound" : "Enable Sound"}</span>
        </button>
      </div>
    </div>
  );
}
