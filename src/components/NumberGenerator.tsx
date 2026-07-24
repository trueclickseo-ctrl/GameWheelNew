"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function NumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [allowDuplicates, setAllowDuplicates] = useState(false);
  const [results, setResults] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const generateNumbers = () => {
    if (min > max) {
      alert("Minimum value cannot be greater than maximum value!");
      return;
    }
    const range = max - min + 1;
    if (!allowDuplicates && count > range) {
      alert(`Cannot generate ${count} unique numbers in a range of ${range}!`);
      return;
    }

    const output: number[] = [];
    if (allowDuplicates) {
      for (let i = 0; i < count; i++) {
        output.push(Math.floor(Math.random() * range) + min);
      }
    } else {
      const pool = Array.from({ length: range }, (_, i) => i + min);
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        output.push(pool.splice(randomIndex, 1)[0]);
      }
    }
    setResults(output);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(results.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg mx-auto neo-card p-6 md:p-8 bg-white dark:bg-retro-navy flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="min-val-input" className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">Min Value</label>
          <input
            id="min-val-input"
            type="number"
            value={min}
            onChange={(e) => setMin(parseInt(e.target.value) || 0)}
            className="neo-input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="max-val-input" className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">Max Value</label>
          <input
            id="max-val-input"
            type="number"
            value={max}
            onChange={(e) => setMax(parseInt(e.target.value) || 0)}
            className="neo-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="quantity-input" className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">Quantity</label>
          <input
            id="quantity-input"
            type="number"
            value={count}
            min={1}
            max={500}
            onChange={(e) => setCount(Math.min(500, Math.max(1, parseInt(e.target.value) || 1)))}
            className="neo-input"
          />
        </div>
        <div className="flex items-center gap-2 mt-6 md:mt-2">
          <input
            type="checkbox"
            id="allow-duplicates"
            checked={allowDuplicates}
            onChange={(e) => setAllowDuplicates(e.target.checked)}
            className="w-5 h-5 accent-retro-blue neo-border"
          />
          <label htmlFor="allow-duplicates" className="font-bold text-sm select-none cursor-pointer">
            Allow Duplicates
          </label>
        </div>
      </div>

      <button
        id="generate-numbers-btn"
        onClick={generateNumbers}
        aria-label="Generate random numbers"
        className="w-full py-3 neo-btn bg-retro-orange text-white dark:text-retro-navy text-lg font-black hover:scale-102 transition-transform"
      >
        GENERATE NUMBERS
      </button>

      {results.length > 0 && (
        <div className="mt-4 border-3 border-retro-navy dark:border-cream rounded-lg p-4 bg-cream dark:bg-retro-navy/40 relative">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-xs uppercase tracking-wider text-retro-navy/60 dark:text-cream/60">Results:</span>
            <button
              onClick={copyToClipboard}
              className="p-1.5 neo-btn bg-white dark:bg-retro-navy hover:scale-105 transition-transform flex items-center gap-1.5 text-xs"
              aria-label="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="flex flex-wrap gap-2 max-h-[160px] overflow-y-auto p-1">
            {results.map((val, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-retro-yellow text-retro-navy font-bold rounded neo-border text-sm shadow-sm"
              >
                {val}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
