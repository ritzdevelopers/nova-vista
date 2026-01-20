'use client'

import React, { useState } from 'react'

export default function ContactBanner() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full relative overflow-visible mt-10 sm:mt-[60px] bg-[#2C5F7A]">
      <div
        className="w-full relative flex flex-col items-center justify-center text-center min-h-[220px] px-4 sm:px-6 py-6 sm:py-0 max-sm:pb-0 max-sm:flex-row max-sm:items-center max-sm:justify-between"
      >
        {/* Text */}
        <div className="flex flex-col items-center text-center gap-5 max-sm:items-start max-sm:text-left max-sm:w-1/2">
          <p
            className="text-white uppercase max-w-[780px] w-full px-2"
            style={{
              fontSize: 'clamp(16px, 4vw, 22px)', 
              fontWeight: '600',
              marginBottom: '0px',
             
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
          
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            CONTACT
          </button>
        </div>

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
            max-sm:mt-0
            max-sm:mb-0
            max-sm:w-1/2
            max-sm:h-full
            max-sm:object-contain
            max-sm:self-stretch
            max-sm:ml-auto
          "
          
        />
      </div>
    </section>
  )
}
