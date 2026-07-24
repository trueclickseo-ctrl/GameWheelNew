"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Submit via FormSubmit.co AJAX API directly to trueclickseo@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/trueclickseo@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: "New Message from GameWheelClub Contact Form",
          _captcha: "false",
          _template: "table"
        })
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true)) {
        setSubmitted(true);
      } else {
        // Fallback to mailto if AJAX fails
        triggerMailtoFallback();
      }
    } catch (err) {
      console.error("FormSubmit error:", err);
      triggerMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:trueclickseo@gmail.com?subject=GameWheelClub%20Contact&body=Name:%20${encodeURIComponent(name)}%0D%0AEmail:%20${encodeURIComponent(email)}%0D%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-2">
            Contact Us
          </h1>
          <p className="font-medium opacity-90">
            Have questions, feedback, or tool ideas? Drop us a message below!
          </p>
        </section>

        <section className="neo-card p-8 bg-white dark:bg-retro-navy">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="w-16 h-16 text-retro-mint mx-auto" />
              <h2 className="text-2xl font-black font-display">Thank You!</h2>
              <p className="font-medium opacity-80">
                Your message has been received. We will get back to you shortly at trueclickseo@gmail.com.
              </p>
              <button
                id="send-another-btn"
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                className="px-6 py-2 neo-btn bg-retro-blue text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3 neo-card bg-retro-orange text-white text-xs font-bold">
                  {errorMessage}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="neo-input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="neo-input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Let us know what you think..."
                  className="neo-input resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 neo-btn bg-retro-orange text-white dark:text-retro-navy font-bold flex items-center justify-center gap-2 hover:scale-102 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
