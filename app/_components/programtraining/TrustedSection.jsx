'use client'
import React, { useState, useEffect } from 'react'
import MotionSection from '../motion/MotionSection'

const testimonials = [
  {
    title: 'Trusted By Students & Industry Experts',
    text: `We strongly recommend Training from Prof Dr Gandhi. If you're reading this and are currently back and forth on signing up for classes - just do it! You'll be glad you did.`,
    name: 'Super International Exporters',
    location: 'Delhi',
  },
  {
    title: 'Highly Professional Training',
    text: `The sessions were extremely insightful and practical. Helped our team improve communication and confidence tremendously.`,
    name: 'Global Trade Solutions',
    location: 'Mumbai',
  },
  {
    title: 'Excellent Learning Experience',
    text: `One of the best training programs we’ve attended. Highly recommended for corporate teams and professionals.`,
    name: 'Bright Future Corp',
    location: 'Bangalore',
  },
]

export default function TrustedSection() {
  const [active, setActive] = useState(0)

  // Auto slide (slow)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000) // 5 sec slow slide

    return () => clearInterval(interval)
  }, [])

  const data = testimonials[active]
  const titleParts = data.title.split('&').map((part) => part.trim()).filter(Boolean)

  return (
    <MotionSection className="w-full bg-[#F7F7F7] py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[28px] px-10 py-12 text-center relative">

          {/* Animated Content */}
          <div
            key={active}
            className="transition-all duration-700 ease-in-out animate-fadeSlide"
          >
            <h3 className="text-[#111111] font-semibold text-2xl tracking-wide">
              {titleParts.length > 1 ? (
                <>
                  {titleParts[0]} &amp;
                  <br />
                  {titleParts[1]}
                </>
              ) : (
                titleParts[0]
              )}
            </h3>

            <p className="mt-6 text-[#11111199] text-[18px] font-normal leading-7">
              {data.text}
            </p>

            <p className="mt-6 text-[#333333] text-[16px] font-medium">
              {data.name}
            </p>

            <p className="mt-1 text-[#11111199] text-[14px] italic">
              {data.location}
            </p>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <span
                key={i}
                onClick={() => setActive(i)}
                className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                  active === i ? 'bg-[#0B3B50] scale-110' : 'bg-[#D9D9D9]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
