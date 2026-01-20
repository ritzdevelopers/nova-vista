import React from 'react'

export default function QueryFormSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
          <div className="bg-[#0B6E99] text-white p-6 sm:p-8">
            <p className="text-sm tracking-wide mb-2">Have A Query?</p>
            <h3 className="text-[28px] md:text-[36px] font-semibold mb-6">
              Submit Your Nomination
            </h3>
            <form className="grid grid-cols-1 gap-4 text-[#00000099] font-light">
              <input
                type="text"
                placeholder="Name of Applicant"
                className="bg-white text-black px-4 py-3 rounded outline-none border border-[#E5E5E5]"
              />
              <input
                type="text"
                placeholder="Profession"
                className="bg-white text-black px-4 py-3 rounded outline-none border border-[#E5E5E5]"
              />
              <input
                type="text"
                placeholder="Experience & Expertise"
                className="bg-white text-black px-4 py-3 rounded outline-none border border-[#E5E5E5]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white text-black px-4 py-3 rounded outline-none border border-[#E5E5E5]"
              />
              <input
                type="text"
                placeholder="Mobile No"
                className="bg-white text-black px-4 py-3 rounded outline-none border border-[#E5E5E5]"
              />
              <textarea
                rows="3"
                placeholder="Name Of Award ( Please mention three preferences for nomination)"
                className="bg-white text-black px-4 py-3 rounded outline-none border border-[#E5E5E5]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#012A3C] text-white pt-[21px] pr-[14px] pb-[21px] pl-[14px] w-full sm:w-[180px] hover:bg-gray-800 transition font-medium"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h4
              className="text-2xl font-semibold mb-2 tracking-wide"
            >
              Nomination Fee
            </h4>
            <p className="text-sm text-gray-600 mb-4 tracking-wide max-w-md mx-auto lg:mx-0">
              120 USD or Equivalent In Your Currency.
            </p>
            <img
              src="/static/scanner.png"
              alt="QR Code"
              className="w-full max-w-[220px] mb-6 object-contain block mx-auto lg:ml-0 lg:mr-auto"
            />
            <div className="bg-white rounded shadow-sm p-4 text-sm w-full max-w-sm text-left mx-auto lg:mx-0">
              <p className="text-[#1B78A1] font-semibold mb-3">
                DEMO NATIONAL BANK
              </p>
              <p className="mb-2">
                <span className="font-semibold">ACCOUNT:</span> Nova Vista
              </p>
              <p className="mb-2">
                <span className="font-semibold">ACCOUNT NUMBER:</span> Ixx-xxx-xxx-xxx
              </p>
              <p className="mb-2">
                <span className="font-semibold">IFSC CODE:</span> 111xxxxxx
              </p>
              <p>
                <span className="font-semibold">SWIFT CODE:</span> ABCDEFGH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
