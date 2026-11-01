"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function OurStorySection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-24 px-6 bg-white transition-all duration-700 ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-3">
          <span className="text-xs font-semibold text-pink-500 tracking-[0.16em] uppercase">
            Our story
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
          Breaking the{" "}
          <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text font-normal">
            Silence
          </span>
        </h2>

        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] mb-10 text-center">
          <p className="text-gray-800 text-lg md:text-2xl font-light leading-relaxed">
            I was{" "}
            <strong className="text-pink-500 font-medium">
              17 when I started bleeding excessively.
            </strong>{" "}
            It wasn't just the blood. It was the missed classes, the hospital visits, the shame, and the terrifying thought that I was cursed.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to="/our-story"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Read Full Story
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
