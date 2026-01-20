'use client'

import React, { useState } from 'react'

export default function ContactBanner() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full relative overflow-visible" style={{ marginTop: '60px' }}>
    <div
      className="w-full relative flex flex-col items-center justify-center"
      style={{
        minHeight: '220px',   
        backgroundColor: '#2C5F7A',
        padding: '36px 24px',
      }}
    >
      <p
        className="text-white uppercase text-center w-[579px] h-[35px] "
        style={{
          fontSize: '22px',
          fontWeight: '600',
          letterSpacing: '0%',  
          marginBottom: '20px',
          fontFamily: 'Montserrat',
        }}
      >
        FOR COST, VENUE, DATES, OR ANY OTHER QUERY
      </p>
  
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
          fontFamily: 'Montserrat, sans-serif',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        CONTACT
      </button>
  
      <img
        src="/static/query sec 1.svg"
        alt="Query section"
        className="absolute"
        style={{
          right: '80px',
          top: '-100px',    
          width: '260px',
          height: '320px',
          objectFit: 'contain',
          pointerEvents: 'none',
        }}
      />
    </div>
  </section>
  
  )
}
