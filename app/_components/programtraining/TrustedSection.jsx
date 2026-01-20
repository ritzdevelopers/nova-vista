'use client'
import React, { useState } from 'react'

const testimonials = [
  {
    title: 'Trusted By Students & Industry Experts',
    text: `We strongly recommend Training from Prof Dr Gandhi. If you're reading this and are currently back and forth on signing up for classes - just do it! You'll be glad you did.`,
    name: 'Super International Exporters',
    location: 'Delhi',
  },
  // {
  //   title: 'Highly Professional Training',
  //   text: `The sessions were extremely insightful and practical. Helped our team improve communication and confidence tremendously.`,
  //   name: 'Global Trade Solutions',
  //   location: 'Mumbai',
  // },
  // {
  //   title: 'Excellent Learning Experience',
  //   text: `One of the best training programs we’ve attended. Highly recommended for corporate teams and professionals.`,
  //   name: 'Bright Future Corp',
  //   location: 'Bangalore',
  // },
]

export default function TrustedSection() {
  const [activeDot, setActiveDot] = useState(0)
  const totalDots = 3

  // Keep content static to the first testimonial only
  const data = testimonials[0]
  const titleParts = data.title.split('&').map((part) => part.trim()).filter(Boolean)

  return (
    <section className="w-full bg-[#F7F7F7] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[28px] px-10 py-12 text-center transition-all duration-500">
          <h3
            className="text-[#111111] font-semibold text-2xl tracking-wide"
            style={{ lineHeight: '100%' }}
          >
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

          <p
            className="mt-6 text-[#11111199] text-base leading-7"
           
          >
            {data.text}
          </p>

          <p
            className="mt-6 text-[#111111] text-base font-medium"
           
          >
            {data.name}
          </p>

          <p
            className="mt-1 text-[#11111199] text-sm italic"
           
          >
            {data.location}
          </p>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {Array.from({ length: totalDots }).map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveDot(i)}
                className={`h-3 w-3 rounded-full cursor-pointer transition ${
                  activeDot === i ? 'bg-[#0B3B50]' : 'bg-[#D9D9D9]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
