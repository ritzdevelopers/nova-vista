"use client";

import React, { useState } from 'react'
import { motion, useReducedMotion } from "framer-motion";
import MotionSection from '../motion/MotionSection'

export default function QueryFormSection() {
  const [formData , setFormData] = useState({
    name: '',
    profession: '',
    experience: '',
    email: '',
    mobile: '',
    award: '',
  })
  
  const [errors , setErrors] = useState({});

  const [loading , setLoading] = useState(false);
  const [message , setMessage] = useState('');

  const script_url = process.env.NEXT_PUBLIC_SCRIPT_URL || '';
  const reduceMotion = useReducedMotion();

  const blockVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -40 : 40,
    }),
    show: { opacity: 1, x: 0 },
  };

  // Regex Patterns
  const nameRegex = /^[A-Za-z ]{2,50}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const mobileRegex = /^[6-9]\d{9}$/

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    if (!script_url) {
      setMessage('Form is not configured. Please try again later.');
      setLoading(false);
      return;
    }
    const payload = {
      ...formData,
      formType: 'Nomination Form',
    };
    try {
      await fetch(script_url,{
        method: 'POST',
        body: JSON.stringify(payload)
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
    <MotionSection className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
          <motion.div
            className="bg-[#0B6E99] text-white p-6 sm:p-8"
            custom="left"
            variants={blockVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ amount: 0.2, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
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
                className="bg-white text-black px-4 py-3 rounded"
              />

              <input
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder="Profession"
                className="bg-white text-black px-4 py-3 rounded"
              />

              <input
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Experience & Expertise"
                className="bg-white text-black px-4 py-3 rounded"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-white text-black px-4 py-3 rounded"
              />

              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile No"
                className="bg-white text-black px-4 py-3 rounded"
              />

              <textarea
                name="award"
                value={formData.award}
                onChange={handleChange}
                rows="3"
                placeholder="Name Of Award (three preferences)"
                className="bg-white text-black px-4 py-3 rounded"
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
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            custom="right"
            variants={blockVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ amount: 0.2, once: false }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
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
                HDFC BANK LTD
              </p>
              <p className="mb-2 text-[#00000099]">
                <span className="font-medium text-black">ACCOUNT:</span> NOVAVISTA EDUCATION PRIVATE LIMITED
              </p>
              <p className="mb-2 text-[#00000099]">
                <span className="font-medium text-black">ACCOUNT NUMBER:</span> 50200112839472
              </p>
              <p className="mb-2 text-[#00000099]">
                <span className="font-medium text-black">IFSC CODE:</span> HDFC0002830
              </p>
              <p className="text-[#00000099]">
                <span className="font-medium text-black">BRANCH:</span> Sector 93A, Noida
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  )
}
