"use client";

import { useEffect, useState } from "react";
import { X, Copy, Check, Link2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
}

export default function ShareModal({ isOpen, onClose, shareUrl }: ShareModalProps) {
  const [qrSvg, setQrSvg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;

    let active = true;
    setIsLoading(true);
    setCopied(false);

    const generateQR = async () => {
      try {
        // Lazy-load the QR library client-side
        const QRCodeModule = await import("qrcode");
        const QRCode = QRCodeModule.default || QRCodeModule;

        // Generate as SVG string client-side
        const svgString = await QRCode.toString(shareUrl, {
          type: "svg",
          margin: 2,
          color: {
            dark: "#0B132B", // Retro Navy
            light: "#FAF5EC", // Cream
          },
        });

        if (active) {
          setQrSvg(svgString);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Failed to generate QR code:", err);
        if (active) {
          setIsLoading(false);
        }
      }
    };

    generateQR();

    return () => {
      active = false;
    };
  }, [isOpen, shareUrl]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-retro-navy/60 dark:bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
            className="relative w-full max-w-sm neo-card bg-white dark:bg-retro-navy p-6 flex flex-col items-center text-center z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-md border border-transparent hover:border-retro-navy dark:hover:border-cream transition-colors text-retro-navy dark:text-cream"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 id="share-modal-title" className="text-xl font-black font-display text-retro-navy dark:text-cream mt-2 mb-1">
              Share Wheel via QR
            </h3>
            <p className="text-xs font-semibold text-retro-navy/70 dark:text-cream/70 mb-6">
              Scan with a phone to spin this exact wheel on mobile.
            </p>

            {/* QR Code Container */}
            <div className="w-48 h-48 rounded-lg neo-border bg-cream flex items-center justify-center overflow-hidden mb-6 p-2 relative">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-8 h-8 border-4 border-retro-orange border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-bold text-retro-navy">Loading QR...</span>
                </div>
              ) : qrSvg ? (
                <div
                  className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
                  dangerouslySetInnerHTML={{ __html: qrSvg }}
                />
              ) : (
                <span className="text-xs font-bold text-retro-orange text-center px-4">
                  Failed to load QR code
                </span>
              )}
            </div>

            {/* Copyable URL fallback */}
            <div className="w-full mb-2">
              <label className="block text-left text-xs font-black uppercase tracking-wider mb-1.5 text-retro-navy/70 dark:text-cream/70">
                Share Link
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="flex-1 text-xs neo-input font-medium bg-cream/50 dark:bg-retro-navy/40 truncate select-all"
                  aria-label="Wheel sharing link"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-2 neo-btn bg-retro-mint text-retro-navy flex items-center justify-center hover:scale-102 transition-transform shrink-0"
                  aria-label={copied ? "Copied" : "Copy Link"}
                  title="Copy share link"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Plain text accessibility explanation */}
            <p className="text-[10px] font-semibold text-retro-navy/50 dark:text-cream/50 mt-2">
              The link contains all current options encoded client-side. No data is stored on our servers.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
