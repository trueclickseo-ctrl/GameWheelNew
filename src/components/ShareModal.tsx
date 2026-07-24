"use client";

import { useEffect, useState } from "react";
import { X, Copy, Check, QrCode, Code, Link2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
}

export default function ShareModal({ isOpen, onClose, shareUrl }: ShareModalProps) {
  const [activeTab, setActiveTab] = useState<"qr" | "embed">("qr");
  const [qrSvg, setQrSvg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [copiedEmbed, setCopiedEmbed] = useState<boolean>(false);
  const [iframeHeight, setIframeHeight] = useState<number>(650);

  // Compute embed URL from shareUrl
  const getEmbedUrl = () => {
    try {
      if (!shareUrl) return "https://gamewheelclub.com/embed";
      const url = new URL(shareUrl);
      return `${url.origin}/embed${url.search}`;
    } catch {
      return "https://gamewheelclub.com/embed";
    }
  };

  const embedUrl = getEmbedUrl();
  const embedCode = `<iframe src="${embedUrl}" width="100%" height="${iframeHeight}" frameborder="0" style="border:none; width:100%; height:${iframeHeight}px; max-width:600px; border-radius:12px; overflow:hidden;" title="GameWheelClub Decision Wheel"></iframe>`;

  useEffect(() => {
    if (!isOpen) return;

    let active = true;
    setIsLoading(true);
    setCopiedLink(false);
    setCopiedEmbed(false);

    const generateQR = async () => {
      try {
        const QRCodeModule = await import("qrcode");
        const QRCode = QRCodeModule.default || QRCodeModule;

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
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleCopyEmbed = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopiedEmbed(true);
      setTimeout(() => setCopiedEmbed(false), 2000);
    } catch (err) {
      console.error("Failed to copy embed code:", err);
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
            className="relative w-full max-w-md neo-card bg-white dark:bg-retro-navy p-6 flex flex-col items-center text-center z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-md border border-transparent hover:border-retro-navy dark:hover:border-cream transition-colors text-retro-navy dark:text-cream cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Close modal</span>
            </button>

            <h3 id="share-modal-title" className="text-2xl font-black font-display text-retro-navy dark:text-cream mt-1 mb-4">
              Share & Embed Wheel
            </h3>

            {/* Navigation Tabs */}
            <div className="flex border-2 border-retro-navy dark:border-cream rounded-lg p-1 bg-cream dark:bg-retro-navy/40 w-full mb-6 gap-1">
              <button
                onClick={() => setActiveTab("qr")}
                className={`flex-1 py-2 px-3 rounded text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === "qr"
                    ? "bg-retro-orange text-white"
                    : "text-retro-navy/80 dark:text-cream/80 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <QrCode className="w-4 h-4" aria-hidden="true" />
                <span>QR & Link</span>
              </button>
              <button
                onClick={() => setActiveTab("embed")}
                className={`flex-1 py-2 px-3 rounded text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === "embed"
                    ? "bg-retro-orange text-white"
                    : "text-retro-navy/80 dark:text-cream/80 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <Code className="w-4 h-4" aria-hidden="true" />
                <span>Embed Code</span>
              </button>
            </div>

            {/* TAB 1: QR CODE & SHARE LINK */}
            {activeTab === "qr" && (
              <div className="w-full flex flex-col items-center">
                <p className="text-xs font-semibold text-retro-navy/70 dark:text-cream/70 mb-4">
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

                {/* Copyable URL input */}
                <div className="w-full mb-2">
                  <label htmlFor="share-link-input" className="block text-left text-xs font-black uppercase tracking-wider mb-1.5 text-retro-navy/70 dark:text-cream/70">
                    Share Link
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="share-link-input"
                      type="text"
                      readOnly
                      value={shareUrl}
                      className="flex-1 text-xs neo-input font-medium bg-cream/50 dark:bg-retro-navy/40 truncate select-all"
                      aria-label="Wheel sharing link"
                    />
                    <button
                      onClick={handleCopyLink}
                      className="px-4 py-2 neo-btn bg-retro-mint text-retro-navy flex items-center justify-center gap-1 hover:scale-102 transition-transform shrink-0 font-bold text-xs cursor-pointer"
                      aria-label={copiedLink ? "Copied" : "Copy Link"}
                      title="Copy share link"
                    >
                      {copiedLink ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                      <span>{copiedLink ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: EMBED IFRAME HTML */}
            {activeTab === "embed" && (
              <div className="w-full flex flex-col items-center text-left">
                <p className="text-xs font-semibold text-retro-navy/70 dark:text-cream/70 mb-4 text-center">
                  Copy and paste this HTML snippet into your website or blog to embed this wheel.
                </p>

                {/* Height Selector */}
                <div className="w-full flex justify-between items-center mb-3">
                  <label htmlFor="iframe-height-select" className="text-xs font-black uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">
                    Iframe Height
                  </label>
                  <select
                    id="iframe-height-select"
                    value={iframeHeight}
                    onChange={(e) => setIframeHeight(Number(e.target.value))}
                    className="neo-input text-xs font-bold py-1 px-2 cursor-pointer"
                  >
                    <option value={500}>500px (Compact)</option>
                    <option value={650}>650px (Standard)</option>
                    <option value={800}>800px (Large)</option>
                  </select>
                </div>

                {/* Embed Code Textarea */}
                <div className="w-full mb-4">
                  <textarea
                    id="embed-code-textarea"
                    readOnly
                    rows={4}
                    value={embedCode}
                    className="w-full text-xs font-mono neo-input bg-cream/70 dark:bg-retro-navy/60 p-3 resize-none select-all leading-relaxed"
                    aria-label="Embed HTML code"
                  />
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyEmbed}
                  className="w-full py-3 neo-btn bg-retro-mint text-retro-navy font-bold flex items-center justify-center gap-2 hover:scale-102 transition-transform cursor-pointer text-sm mb-2"
                >
                  {copiedEmbed ? (
                    <>
                      <Check className="w-5 h-5" aria-hidden="true" />
                      <span>Embed Code Copied!</span>
                    </>
                  ) : (
                    <>
                      <Code className="w-5 h-5" aria-hidden="true" />
                      <span>Copy Embed HTML Code</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Footnote */}
            <p className="text-[10px] font-semibold text-retro-navy/50 dark:text-cream/50 mt-4">
              Options are encoded in the URL. Your wheel updates automatically.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
