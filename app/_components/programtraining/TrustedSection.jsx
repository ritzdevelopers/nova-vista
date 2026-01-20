import React from 'react'

export default function TrustedSection() {
  return (
    <section className="w-full bg-[#F7F7F7] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[28px] px-10 py-12 text-center">
          <h3
            className="text-[#111111] font-semibold text-2xl"
            style={{ fontFamily: 'Montserrat' }}
          >
            Trusted By Students &amp; Industry
            <br />
            Experts
          </h3>
          <p
            className="mt-6 text-[#11111199] text-base leading-7"
            style={{ fontFamily: 'Montserrat' }}
          >
            We strongly recommend Training from Prof Dr Gandhi. If you're reading
            this and are currently back and forth on signing up for classes - just
            do it! You'll be glad you did.
          </p>
          <p
            className="mt-6 text-[#111111] text-base font-medium"
            style={{ fontFamily: 'Montserrat' }}
          >
            Super International Exporters
          </p>
          <p
            className="mt-1 text-[#11111199] text-sm italic"
            style={{ fontFamily: 'Montserrat' }}
          >
            Delhi
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#D9D9D9]" />
            <span className="h-3 w-3 rounded-full bg-[#0B3B50]" />
            <span className="h-3 w-3 rounded-full bg-[#D9D9D9]" />
          </div>
        </div>
      </div>
    </section>
  )
}
