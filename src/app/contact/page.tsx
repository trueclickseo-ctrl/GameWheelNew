"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    try {
      // Submit to Web3Forms (a free form-to-email service for static sites)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          // To receive emails directly, register a free key at https://web3forms.com
          // and replace the access_key below.
          access_key: "YOUR_ACCESS_KEY_HERE",
          name,
          email,
          message,
          subject: "New Message from GameWheelClub Contact Form"
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        // Fallback to mailto redirect if submission fails or key is unconfigured
        triggerMailtoFallback();
      }
    } catch (err) {
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
                Your message has been received. We will get back to you shortly.
              </p>
              <button
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
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="neo-input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="neo-input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Let us know what you think..."
                  className="neo-input resize-none"
                />
              </div>

              <button
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

      
    </>
  );
}
