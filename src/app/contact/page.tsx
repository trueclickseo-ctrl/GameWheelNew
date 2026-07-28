"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("submitted") === "true") {
        setSubmitted(true);
      }
    }
  }, []);

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
              <a
                id="send-another-btn"
                href="/contact/"
                className="inline-block px-6 py-2 neo-btn bg-retro-blue text-white font-bold hover:scale-105 transition-transform"
              >
                Send Another Message
              </a>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/trueclickseo@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit configuration fields */}
              <input type="hidden" name="_subject" value="New Message from GameWheelClub Contact Form" />
              <input type="hidden" name="_next" value="https://www.gamewheelclub.com/contact/?submitted=true" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="font-bold text-sm uppercase tracking-wider text-retro-navy/80 dark:text-cream/80">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
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
                  name="email"
                  type="email"
                  required
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
                  name="message"
                  required
                  rows={4}
                  placeholder="Let us know what you think..."
                  className="neo-input resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full py-3 neo-btn bg-retro-orange text-white dark:text-retro-navy font-bold flex items-center justify-center gap-2 hover:scale-102 transition-transform cursor-pointer"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
