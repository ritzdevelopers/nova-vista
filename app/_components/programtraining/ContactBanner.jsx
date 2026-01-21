'use client'

import React, { useState } from 'react'
import MotionSection from '../motion/MotionSection'

export default function ContactBanner() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <MotionSection
      className="w-full relative overflow-visible mt-10 sm:mt-[60px]"
      style={{
        background: "linear-gradient(276.15deg, #1D79A2 0%, #012A3C 100%)",
      }}
    >
      <div
        className="w-full relative flex flex-col items-center justify-center text-center min-h-[220px] px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-sm:pb-0 max-sm:flex-row max-sm:items-center max-sm:justify-between md:flex-row md:justify-between md:items-center"
      >
        {/* Text */}
        <div className="flex flex-col items-center text-center gap-5 max-sm:items-start max-sm:text-left max-sm:w-1/2 md:items-start md:text-left md:w-[55%] md:max-w-[500px] lg:items-center lg:text-center lg:w-full lg:max-w-[600px] lg:mx-auto">
          <p
            className="text-white uppercase max-w-[580px] w-full px-2 md:px-0 md:text-left lg:text-center"
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
            className="uppercase text-white md:self-start lg:items-center lg:text-center lg:max-w-[600px] lg:mx-auto"
            style={{
              border: '1px solid white',
              backgroundColor: isHovered ? 'white' : 'transparent',
              color: isHovered ? '#2C5F7A' : 'white',
              padding: '12px 44px',
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
            right-[24px]
            md:right-[40px]
            lg:right-[80px]
            bottom-0
            w-[180px]
            h-[240px]
            md:w-[200px]
            md:h-[260px]
            lg:w-[260px] 
            lg:h-[320px]
            object-contain
            z-10

            max-sm:static
            max-sm:mt-0
            max-sm:mb-0
            max-sm:w-1/2
            max-sm:h-full
            max-sm:object-contain
            max-sm:self-stretch
            max-sm:ml-auto
            max-sm:z-auto
          "
        />
      </div>
    </MotionSection>
  )
}
