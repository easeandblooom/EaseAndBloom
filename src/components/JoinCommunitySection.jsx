"use client"

import React from "react"
import { ArrowRight } from "lucide-react"
import { appLinkHref, onAppLinkClick } from "../lib/appLink";

export default function JoinCommunitySection() {
  return (
    <section className="py-20 md:py-24 px-6 bg-white" id="join-community">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center p-8 sm:p-12 md:p-16 shadow-xl">
          {/* Subtle decorative circles */}
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-200 block mb-3">
              Join our community
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-5">
              Ready to Join?
            </h2>
            <p className="text-white/95 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl mx-auto">
              Connect with thousands of women who understand. Your journey to healing and sisterhood starts here.
            </p>

            <div className="flex justify-center">
              <a
                href={appLinkHref()}
                onClick={onAppLinkClick}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-10 py-3.5 rounded-full font-semibold text-gray-900 bg-white hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 text-base"
              >
                Join the Community
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
