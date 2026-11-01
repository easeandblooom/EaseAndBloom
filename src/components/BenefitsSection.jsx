"use client"

import { useEffect, useRef, useState } from "react"
import { MdChatBubbleOutline } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";

export default function BenefitsSection() {
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

  const benefits = [
    {
      title: "Gentle Daily Check-ins",
      description: "Emotional support and genuine understanding from women who get it.",
      icon: <MdChatBubbleOutline className="w-5 h-5 text-pink-500" />,
    },
    {
      title: "Trusted Wellness Education",
      description: "Access to judgment-free resources on menstrual health and wellness.",
      icon: <FiBookOpen className="w-5 h-5 text-pink-500" />,
    },
    {
      title: "A Safe Space to Be",
      description: "Vent, share, ask questions, or simply be yourself in our community.",
      icon: <FaRegHeart className="w-5 h-5 text-pink-500" />,
    },
    {
      title: "Give Back Opportunities",
      description: "Meaningful initiatives through pad drives and community outreach.",
      icon: <TbUsers className="w-5 h-5 text-pink-500" />,
    },
  ]

  return (
    <section ref={sectionRef} className={`py-20 md:py-24 px-6 bg-gray-50/80 transition-all duration-700 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-pink-500 tracking-[0.16em] uppercase block mb-3">
            Our sisterhood
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-5">
            Why Join Ease &amp; Bloom?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Because every woman deserves more than just pads or pain relief, she deserves a place to be seen, supported, and heard.
          </p>
          <p className="font-semibold text-gray-900 text-base md:text-lg">
            When you join us, you'll get:
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 p-6 md:p-7 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start gap-4 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Plus... Section */}
        <div className="max-w-3xl mx-auto bg-white/90 border border-gray-100 rounded-2xl p-6 md:p-8 text-center shadow-sm">
          <p className="text-gray-800 text-base md:text-lg mb-2">
            <strong className="text-gray-900 font-semibold">Plus...</strong> early invites to share your story, volunteer, or lead with love.
          </p>
          <p className="text-gray-600 text-sm md:text-base font-light">
            This space is for all women. Whether you struggle with period issues or not, you are welcome here. This is your space too.
          </p>
        </div>
      </div>
    </section>
  )
}
