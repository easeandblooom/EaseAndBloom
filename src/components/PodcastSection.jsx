import React from "react";
import { PODCAST_LINKS } from "../config/constants";

export default function PodcastSection() {
  return (
    <section id="podcast" className="py-20 md:py-24 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Copy */}
          <div className="order-2 md:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-200 block mb-3">
              Listen in
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
              The Ease &amp; Bloom Pod
            </h2>
            <p className="text-white/95 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl">
              Hey Bloomers. Pull up a seat for honest, warm conversations with women about periods, wellness, and real life. Every episode ends with a shout-out to an amazing woman doing something incredible.
            </p>

            {/* Platform Links */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-pink-200 font-semibold">
                Available on your favorite platform:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {/* Spotify */}
                <a
                  href={PODCAST_LINKS.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 min-h-[46px] px-5 py-2.5 rounded-full font-semibold text-gray-900 bg-white hover:bg-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-[#1DB954]">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.216.353-.677.466-1.03.25-2.822-1.724-6.375-2.114-10.56-1.157-.404.092-.81-.16-.902-.564-.093-.404.16-.81.564-.902 4.582-1.047 8.514-.602 11.678 1.343.353.216.466.677.25 1.03zm1.468-3.262c-.272.441-.849.58-1.29.308-3.23-1.986-8.156-2.56-11.977-1.4-.497.151-1.03-.133-1.18-.63-.152-.497.132-1.03.63-1.181 4.37-1.326 9.8-0.684 13.51 1.613.44.272.58.849.307 1.29zm.126-3.41c-3.874-2.3-10.264-2.513-13.978-1.385-.593.18-1.223-.156-1.403-.75-.18-.593.156-1.223.75-1.403 4.265-1.295 11.31-1.043 15.772 1.605.534.317.708 1.01.391 1.543-.317.534-1.01.708-1.532.39z" />
                  </svg>
                  Spotify
                </a>

                {/* Apple Podcasts */}
                <a
                  href={PODCAST_LINKS.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 min-h-[46px] px-5 py-2.5 rounded-full font-semibold text-gray-900 bg-white hover:bg-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-[#872ec4]">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.02C18.343 21.168 22 17.03 22 12c0-5.523-4.477-10-10-10z" className="hidden" />
                    <circle cx="12" cy="12" r="10" fill="#f3e8ff" />
                    <path d="M12 6a6 6 0 0 0-3 11.196V19a1 1 0 0 0 2 0v-1.126A3.992 3.992 0 0 0 12 18a4 4 0 0 0 3.732-2.572A1 1 0 0 0 15 14a1 1 0 0 0-1 1 2 2 0 1 1-4 0V9.874A4 4 0 0 1 12 8a4 4 0 0 1 4 4 1 1 0 1 0 2 0 6 6 0 0 0-6-6z" fill="#9333ea" />
                    <circle cx="12" cy="13" r="1.5" fill="#9333ea" />
                  </svg>
                  Apple Podcasts
                </a>

                {/* YouTube */}
                <a
                  href={PODCAST_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 min-h-[46px] px-5 py-2.5 rounded-full font-semibold text-gray-900 bg-white hover:bg-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-[#FF0000]">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Cover Art */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src="/podcast-cover.jpg"
              alt="The Ease &amp; Bloom Pod cover art"
              className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-square object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] md:rotate-2 hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
