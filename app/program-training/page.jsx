"use client";

import React from 'react'
import { motion, useReducedMotion } from "framer-motion";
import Header from '../_components/header/Header'
import ContactBanner from '../_components/programtraining/ContactBanner'
import TrustedSection from '../_components/programtraining/TrustedSection'
import QueryFormSection from '../_components/programtraining/QueryFormSection'
import Footer from '../_components/footer/Footer'
import MotionSection from '../_components/motion/MotionSection'

export default function ProgramTraining() {
  const reduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -40 : 40,
    }),
    show: { opacity: 1, x: 0 },
  };

  const workshops = [
    {
      title: 'Personality Development For Employability',
      subtitle: '2-Day Weekend Workshop (Delhi/ Noida)',
      image: '/static/flight.svg',
      items: [
        'Presentation Skills',
        'Communication Skills',
        'Interpersonal Skills',
        'Work Place Etiquette',
        'Meeting / Telephone / Group Etiquette',
        'Body Language',
        'Self Confidence',
        'Positive Attitude',
        'Self-Motivation',
        'Powerful Presentation Techniques',
        'Time management',
        'Voice modulation',
        'Stress Management',
        'Creative Thinking',
        'Executive Corporate Attire',
      ],
    },
    {
      title: 'Export-Import & Documentation Workshop',
      subtitle: '2-Day Weekend Workshop (Delhi/ Noida)',
      image: '/static/meeting.svg',
      items: [
        'Important Steps for Starters',
        'Role of Government Agencies',
        'Export Marketing',
        'Export & Import',
        'Export-Import Documentation',
        'Payment Terms, Incoterms',
        'Methods of Financing',
        'Process of an Export Order',
        'Containerization & Transportation',
      ],
    },
    {
      title: 'Money Laundering & Anti-Money Laundering Act Workshop',
      subtitle: '2-Day Weekend Workshop (Delhi/ Noida)',
      image: '/static/money.svg',
      items: [
        'Concept of money laundering & how it works',
        'Stages and various forms of money laundering',
        'Impact of money laundering- social, economic & political',
        'Methods adopted for money laundering',
        'Role of government agencies to curb and prevent it',
        'Money laundering act',
        'Case studies',
      ],
    },
  ]

  return (
    <div className="bg-white">
      <Header />
      <MotionSection
        className="w-full bg-[#fafafa] py-12 sm:py-16"
      
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-center text-4xl sm:text-4xl font-semibold tracking-wide text-[#111111]"
            style={{
              lineHeight: '100%',
            }}
            custom="left"
            variants={cardVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ amount: 0.2, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            WORKSHOPS
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <motion.article
                key={workshop.title}
                className={`bg-white shadow-lg border border-gray-100 overflow-hidden h-full ${
                  index === 2 ? "md:col-span-2 md:mx-auto md:w-[70%] xl:col-span-1 xl:w-auto" : ""
                }`}
                style={{
                  borderTopLeftRadius: index === 0 ? '60px' : '0px',
                  borderBottomRightRadius: index === 0 ? '60px' : '0px',
                  borderTopRightRadius: index > 0 ? '60px' : '0px',
                  borderBottomLeftRadius: index > 0 ? '60px' : '0px',
                  borderWidth: '1px',
                }}
                custom={index % 2 === 0 ? "left" : "right"}
                variants={cardVariants}
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "show"}
                viewport={{ amount: 0.2, once: false }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              >
                <div className="h-[220px] sm:h-[240px] md:h-[260px] w-auto font-medium">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-6 py-6">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {workshop.title}
                  </h3>
                  <p
                    className="mt-2 text-center text-sm text-[#11111199] font-light"
                    style={{
                      textTransform: 'capitalize',
                      lineHeight: '100%',
                    }}
                  >
                    {workshop.subtitle}
                  </p>
                  <div className="mt-4 h-px w-full bg-gray-200" />
                  <ul className="mt-4 text-sm text-[#00000099] space-y-2 list-none pl-4 font-light">
                    {workshop.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>
      
      <ContactBanner />
      <TrustedSection />
      <QueryFormSection />
      <Footer/>
      
    </div>
  )
}
