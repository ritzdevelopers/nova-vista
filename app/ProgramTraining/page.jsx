import React from 'react'
import Header from '../_components/header/Header'
import ContactBanner from '../_components/programtraining/ContactBanner'
import TrustedSection from '../_components/programtraining/TrustedSection'
import QueryFormSection from '../_components/programtraining/QueryFormSection'
import Footer from '../_components/footer/Footer'

export default function ProgramTraining() {
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
      <section
        className="w-full bg-[#fafafa] py-12 sm:py-16"
        style={{ fontFamily: 'Montserrat' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2
            className="text-center text-3xl sm:text-4xl font-semibold tracking-wide text-[#11111]"
            style={{
              case: 'titleCase',
              lineHeight: '100%',
            }}
          >
            WORKSHOPS
          </h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <article
                key={workshop.title}
                className="bg-white shadow-lg border border-gray-100 overflow-hidden h-full"
                style={{
                  borderTopLeftRadius: index === 0 ? '60px' : '0px',
                  borderBottomRightRadius: index === 0 ? '60px' : '0px',
                  borderTopRightRadius: index > 0 ? '60px' : '0px',
                  borderBottomLeftRadius: index > 0 ? '60px' : '0px',
                  borderWidth: '1px',
                }}
              >
                <div className="h-48 w-full">
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
                    className="mt-2 text-center text-sm text-[#11111199]"
                    style={{
                      case: 'titleCase',
                      lineHeight: '100%',
                    }}
                  >
                    {workshop.subtitle}
                  </p>
                  <div className="mt-4 h-px w-full bg-gray-200" />
                  <ul className="mt-4 text-sm text-gray-600 space-y-2 list-disc pl-5">
                    {workshop.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <ContactBanner />
      <TrustedSection />
      <QueryFormSection />
      <Footer/>
      
    </div>
  )
}
