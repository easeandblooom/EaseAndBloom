import React from "react";
import { appLinkHref, onAppLinkClick } from "../lib/appLink";

export default function HeroSection() {
  const scrollToPodcast = (e) => {
    e.preventDefault();
    const el = document.getElementById("podcast");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#24121f] text-white flex flex-col md:flex-row md:items-center min-h-[580px] md:min-h-[min(100vh,820px)]">
      {/* ===== DESKTOP PHOTO (Full & Rich, NO mask, right 64%) ===== */}
      <img
        src="/hero-women.jpg"
        alt="Smiling Black women together"
        className="hidden md:block absolute top-0 right-0 bottom-0 w-[64%] h-full object-cover object-[50%_40%]"
      />

      {/* ===== DESKTOP GRADIENT OVERLAY (Pure horizontal plum fade) ===== */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #24121f 0%, #24121f 36%, rgba(36,18,31,0.55) 50%, rgba(36,18,31,0) 66%), linear-gradient(0deg, rgba(36,18,31,0.3) 0%, transparent 35%), linear-gradient(180deg, rgba(36,18,31,0.45) 0%, transparent 25%)",
        }}
      />

      {/* ===== MOBILE PHOTO (Under 720px / md, sits on top with bottom mask) ===== */}
      <div className="md:hidden relative w-full aspect-square overflow-hidden">
        <img
          src="/hero-women.jpg"
          alt="Smiling Black women together"
          className="w-full h-full object-cover object-[55%_35%]"
          style={{
            maskImage: "linear-gradient(180deg, #000 72%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(180deg, #000 72%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(36,18,31,0.6) 0%, transparent 170px)",
          }}
        />
      </div>

      {/* ===== HERO COPY ===== */}
      <div className="relative z-10 w-full max-w-[1160px] mx-auto px-5 sm:px-8 pt-0 md:pt-[156px] pb-12 md:pb-[72px] -mt-9 md:mt-0">
        <div className="max-w-[600px]">
          <div className="text-xs font-semibold tracking-[0.16em] uppercase text-[#f9a8d4] mb-3 md:mb-4">
            WELCOME TO
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extralight tracking-tight leading-[1.02] text-white mb-6">
            Ease &amp; Bloom
          </h1>
          <p className="text-white/95 text-base sm:text-lg md:text-[1.125rem] font-light leading-relaxed mb-8 max-w-[30em]">
            A safe, supportive community where women feel seen, heard, and held, especially during their most vulnerable moments.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Join Our Community Button */}
            <a
              href={appLinkHref()}
              onClick={onAppLinkClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-full font-semibold text-[#0f172a] bg-white hover:bg-white/90 shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-[15px] text-center"
            >
              Join Our Community &rarr;
            </a>

            {/* Listen to the Podcast Button */}
            <a
              href="#podcast"
              onClick={scrollToPodcast}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full font-semibold text-white bg-white/10 hover:bg-white hover:text-[#0f172a] border border-white/75 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 text-[15px] text-center cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="w-4 h-4 flex-shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
              </svg>
              Listen to the podcast
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
