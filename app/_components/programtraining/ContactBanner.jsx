'use client'

import React, { useState } from 'react'

export default function ContactBanner() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full relative overflow-visible mt-10 sm:mt-[60px]">
      <div
        className="w-full relative flex flex-col items-center justify-center text-center"
        style={{
          minHeight: '220px',
          backgroundColor: '#2C5F7A',
          padding: '36px 16px',
        }}
      >
        {/* Text */}
        <p
          className="text-white uppercase max-w-[580px] w-full px-2"
          style={{
            fontSize: 'clamp(16px, 4vw, 22px)', 
            fontWeight: '600',
            marginBottom: '20px',
            fontFamily: 'Montserrat',
          }}
        >
          FOR COST, VENUE, DATES, OR ANY OTHER QUERY
        </p>

        {/* Button */}
        <button
          className="uppercase text-white"
          style={{
            border: '1px solid white',
            backgroundColor: isHovered ? 'white' : 'transparent',
            color: isHovered ? '#2C5F7A' : 'white',
            padding: '12px 40px',
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '1px',
            cursor: 'pointer',
            fontFamily: 'Montserrat',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          CONTACT
        </button>

        {/* Image */}
        <img
          src="/static/query sec 1.svg"
          alt="Query section"
          className="
            absolute 
            right-[80px] 
            -top-[100px]
            w-[260px] 
            h-[320px]

            max-sm:static
            max-sm:mt-4
            max-sm:bottom-[-4px]

            max-sm:w-[200px]
            max-sm:h-auto
          "
          style={{
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  )
}
