"use client"

import { useEffect, useRef, useState } from "react"
import { FiTarget, FiEye } from "react-icons/fi";

export default function MissionVisionSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 md:py-24 px-6 bg-gray-50/80 transition-all duration-700 ${
        visible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-pink-500 tracking-[0.16em] uppercase block mb-3">
            Our purpose
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
            Mission &amp; Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-16">
          {/* Vision */}
          <div className="flex gap-5 items-start">
            <div className="text-pink-500 text-2xl p-3.5 bg-white rounded-2xl shadow-sm border border-gray-100 flex-shrink-0">
              <FiEye />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                To create a <span className="text-pink-500 font-medium">safe and empowering community</span> for women to freely discuss menstrual health, while providing <strong className="font-medium text-gray-900">sustainable access to period care</strong> for underserved communities.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex gap-5 items-start">
            <div className="text-purple-600 text-2xl p-3.5 bg-white rounded-2xl shadow-sm border border-gray-100 flex-shrink-0">
              <FiTarget />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                To <span className="text-purple-600 font-medium">end period shame globally</span> and ensure no woman or girl ever feels alone, unworthy, or silenced during her menstrual journey.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-200/70">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-700 leading-tight max-w-3xl mx-auto">
            We believe that{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text font-normal">
              no woman should suffer in silence
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
