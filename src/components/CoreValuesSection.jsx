"use client"

import { useEffect, useRef, useState } from "react"
import { FaRegHeart } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";

export default function CoreValuesSection() {
  const sectionRef = useRef(null)
  const [visibleIndexes, setVisibleIndexes] = useState([])

  useEffect(() => {
    if (sectionRef.current) {
      const children = Array.from(sectionRef.current.querySelectorAll('.core-value-item'))
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...prev, Number(entry.target.dataset.index)])
          }
        })
      }, { threshold: 0.15 })
      children.forEach((child) => observer.observe(child))
      return () => observer.disconnect()
    }
  }, [])

  const values = [
    {
      title: "Compassion",
      description: "We lead with kindness and understanding in everything we do.",
      icon: <FaRegHeart className="w-5 h-5 text-pink-500" />,
      wide: true,
    },
    {
      title: "Belonging",
      description: "A space where every woman feels seen, heard, and valued.",
      icon: <TbUsers className="w-5 h-5 text-pink-500" />,
      wide: false,
    },
    {
      title: "Consistency",
      description: "We commit to sustained care, not one-off charity.",
      icon: <IoMdTime className="w-5 h-5 text-pink-500" />,
      wide: false,
    },
    {
      title: "Vulnerability",
      description: "We believe open, honest stories heal and connect us.",
      icon: <IoChatbubbleOutline className="w-5 h-5 text-pink-500" />,
      wide: false,
    },
    {
      title: "Empowerment",
      description: "Tools and community to help women thrive.",
      icon: <BsLightningCharge className="w-5 h-5 text-pink-500" />,
      wide: false,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 core-value-item" data-index="-1">
          <span className={`text-xs font-semibold text-pink-500 tracking-[0.16em] uppercase mb-3 block ${visibleIndexes.includes(-1) ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our principles
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 ${visibleIndexes.includes(-1) ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`bg-gray-50/90 border border-gray-100 hover:bg-white hover:border-gray-200 p-7 md:p-8 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 core-value-item ${
                value.wide ? 'md:col-span-2' : ''
              } ${visibleIndexes.includes(index) ? 'animate-fade-in-up' : 'opacity-0'}`} 
              data-index={index}
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-900">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
