"use client";

import { useEffect, useState } from "react";
import { History, Trash2, X } from "lucide-react";

export interface SpinHistoryItem {
  id: string;
  result: string;
  timestamp: string;
}

interface SpinHistoryProps {
  storageKey: string;
  newWinner?: string | null;
}

export default function SpinHistory({ storageKey, newWinner }: SpinHistoryProps) {
  const [history, setHistory] = useState<SpinHistoryItem[]>([]);
  const historyStorageKey = `${storageKey}-history`;

  // Load history from localStorage on mount & when storageKey changes
  useEffect(() => {
    const saved = localStorage.getItem(historyStorageKey);
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch {
        setHistory([]);
      }
    } else {
      setHistory([]);
    }
  }, [historyStorageKey]);

  // Append new winner when triggered
  useEffect(() => {
    if (!newWinner) return;

    const newItem: SpinHistoryItem = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
      result: newWinner,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
    };

    setHistory((prev) => {
      const updated = [newItem, ...prev].slice(0, 50); // Keep last 50 entries max
      localStorage.setItem(historyStorageKey, JSON.stringify(updated));
      return updated;
    });
  }, [newWinner, historyStorageKey]);

  const removeItem = (id: string) => {
    const updated = history.filter((item) => item.id !== id);
    setHistory(updated);
    localStorage.setItem(historyStorageKey, JSON.stringify(updated));
  };

  const clearAll = () => {
    if (history.length === 0) return;
    if (window.confirm("Clear all spin history for this wheel?")) {
      setHistory([]);
      localStorage.removeItem(historyStorageKey);
    }
  };

  return (
    <div className="neo-card p-6 bg-white dark:bg-retro-navy transition-colors mt-6">
      <div className="flex justify-between items-center mb-4 border-b-3 border-retro-navy dark:border-cream pb-2">
        <h2 className="text-xl font-bold font-display flex items-center gap-2">
          <History className="w-5 h-5 text-retro-orange" />
          Results ({history.length})
        </h2>

        {history.length > 0 && (
          <button
            onClick={clearAll}
            className="text-xs font-bold neo-btn px-2.5 py-1 bg-retro-orange text-white hover:bg-red-600 transition-colors cursor-pointer flex items-center gap-1"
            aria-label="Clear all results"
          >
            <Trash2 className="w-3.5 h-3.5" /> Clear results
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="text-sm font-semibold opacity-60 text-center py-4">
          No spins recorded yet. Hit SPIN to see past results here!
        </p>
      ) : (
        <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-cream dark:bg-retro-navy/40 border border-retro-navy/20 dark:border-cream/20 rounded p-2.5 text-sm font-semibold transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 overflow-hidden">
                <span className="font-extrabold text-retro-navy dark:text-cream truncate">
                  {item.result}
                </span>
                <span className="text-[11px] font-bold opacity-60">
                  {item.timestamp}
                </span>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="p-1 text-retro-navy/70 dark:text-cream/70 hover:text-retro-orange transition-colors cursor-pointer ml-2 flex-shrink-0"
                aria-label={`Delete spin result ${item.result}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
