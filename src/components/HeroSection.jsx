import React from "react";
import { WEB_APP_URL, PODCAST_URL } from "../config/constants";

export default function HeroSection() {
  const podcastHref = PODCAST_URL || "#podcast";

  return (
    <section className="relative overflow-hidden bg-[#24121f] text-white flex flex-col md:flex-row md:items-center min-h-[580px] md:min-h-[700px] lg:min-h-[820px]">
      {/* Photo for Desktop & Mobile */}
      <div className="relative md:absolute md:top-0 md:right-0 md:bottom-0 md:w-[64%] w-full aspect-square md:aspect-auto h-auto md:h-full overflow-hidden">
        <img
          src="/hero-women.jpg"
          alt="Smiling Black women together"
          className="w-full h-full object-cover object-[55%_35%] md:object-[50%_40%]"
          style={{
            maskImage: "linear-gradient(180deg, #000 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(180deg, #000 70%, transparent 100%)",
          }}
        />
        {/* Desktop alpha gradient mask (fading from left deep plum into transparent) */}
        <div 
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #24121f 0%, #24121f 36%, rgba(36,18,31,0.55) 50%, rgba(36,18,31,0) 66%), linear-gradient(0deg, rgba(36,18,31,0.3) 0%, transparent 35%), linear-gradient(180deg, rgba(36,18,31,0.45) 0%, transparent 25%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-4 pb-16 md:py-32 -mt-8 md:mt-0">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-pink-300 uppercase block mb-4">
            WELCOME TO
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.95] text-white mb-6">
            Ease &amp; Bloom
          </h1>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-xl">
            A safe, supportive community where women feel seen, heard, and held, especially during their most vulnerable moments.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-full font-semibold text-gray-900 bg-white hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-base text-center"
            >
              Join Our Community
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#podcast"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("podcast");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-full font-semibold text-white bg-white/10 hover:bg-white hover:text-gray-900 border border-white/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 text-base text-center cursor-pointer"
            >
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Listen to the podcast
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
