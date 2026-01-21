"use client";

import React, { useState } from 'react'

export default function QueryFormSection() {
  const [formData , setFormData] = useState({
    name: '',
    profession: '',
    experience: '',
    email: '',
    mobile: '',
    award: '',
  })
  
  
  const [loading , setLoading] = useState(false);
  const [message , setMessage] = useState('');

  const script_url = 'https://script.google.com/macros/s/AKfycbz82h6yoCcClf05vO2E5rSrxjw1H4wWScpQpN7UVNonUg9kQ35-vU1C5ek6aUhaTsW3jA/exec'

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await fetch(script_url,{
        method: 'POST',
        body: JSON.stringify(formData)
      })
      setMessage('Thank you for your submission! We will get back to you soon.');
      setFormData({
        name: '',
        profession: '',
        experience: '',
        email: '',
        mobile: '',
        award: '',
      })
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
          <div className="bg-[#0B6E99] text-white p-6 sm:p-8">
            <p className="text-sm tracking-wide mb-2">Have A Query?</p>
            <h3 className="text-[28px] md:text-[36px] font-semibold mb-6">
              Submit Your Nomination
            </h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 text-[#00000099] font-light">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name of Applicant"
                className="bg-white text-black px-4 py-3 rounded border"
              />

              <input
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder="Profession"
                className="bg-white text-black px-4 py-3 rounded border"
              />

              <input
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Experience & Expertise"
                className="bg-white text-black px-4 py-3 rounded border"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-white text-black px-4 py-3 rounded border"
              />

              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile No"
                className="bg-white text-black px-4 py-3 rounded border"
              />

              <textarea
                name="award"
                value={formData.award}
                onChange={handleChange}
                rows="3"
                placeholder="Name Of Award (three preferences)"
                className="bg-white text-black px-4 py-3 rounded border"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#012A3C] text-white py-3 w-full sm:w-[180px]"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {message && <p className="text-green-300 text-sm">{message}</p>}
            </form>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h4
              className="text-[18px] font-semibold mb-2 tracking-wide"
            >
              Nomination Fee
            </h4>
            <p className="text-[14px] text-[#00000099] mb-4 tracking-wide max-w-md mx-auto lg:mx-0">
              120 USD or Equivalent In Your Currency.
            </p>
            <img
              src="/static/scanner.png"
              alt="QR Code"
              className="w-full max-w-[220px] mb-6 object-contain block mx-auto lg:ml-0 lg:mr-auto"
            />
            <div className="bg-white rounded shadow-sm p-4 text-sm w-full max-w-sm text-left mx-auto lg:mx-0">
              <p className="text-[#1B78A1] font-semibold mb-3 text-[18px]">
                DEMO NATIONAL BANK
              </p>
              <p className="mb-2 text-[#00000099]">
                <span className="font-medium text-black">ACCOUNT:</span> Nova Vista
              </p>
              <p className="mb-2 text-[#00000099]">
                <span className="font-medium text-black">ACCOUNT NUMBER:</span> Ixx-xxx-xxx-xxx
              </p>
              <p className="mb-2 text-[#00000099]">
                <span className="font-medium text-black">IFSC CODE:</span> 111xxxxxx
              </p>
              <p className="text-[#00000099]">
                <span className="font-medium text-black">SWIFT CODE:</span> ABCDEFGH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
