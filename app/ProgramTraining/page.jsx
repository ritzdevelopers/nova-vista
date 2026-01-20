import React from 'react'
import Header from '../_components/header/Header'
import ContactBanner from '../_components/programtraining/ContactBanner'
import TrustedSection from '../_components/programtraining/TrustedSection'
import QueryFormSection from '../_components/programtraining/QueryFormSection'


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
    <div className="bg-white" style={{ fontFamily: 'Montserrat' }}>
      <Header />
      <section className="w-full bg-[#fafafa] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-4xl font-semibold tracking-wide text-[#11111] w-[254px] mx-auto h-[44px]"style={{
            case:"titleCase",
            lineHeight:'100%',
          }}>
            WORKSHOPS
          </h2>
          <div className="mt-10 flex justify-center gap-6">
            {workshops.map((workshop, index) => (
              <article
                key={workshop.title}
                className="bg-white shadow-lg border border-gray-100 overflow-hidden"
                style={{
                  width: '400px',
                  height: index === 0 ? '961px' : '962px',
                  borderTopLeftRadius: index === 0 ? '60px' : '0px',
                  borderBottomRightRadius: index === 0 ? '60px' : '0px',
                  borderTopRightRadius: index > 0 ? '60px' : '0px',
                  borderBottomLeftRadius: index > 0 ? '60px' : '0px',
                  borderWidth: '1px',
                  position: 'relative',
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
                  <p className="mt-2 text-center text-sm text-[#11111199] w-[300px] h-[50px]"style={{
                    case:"titleCase",
                    lineHeight:'100%',
                  }}>
                    {workshop.subtitle}
                  </p>
                  <div className="mt-4 h-px w-full bg-gray-200" />
                  <ul 
                    className="text-sm text-gray-600"
                    style={{
                      width: '314px',
                      height: '40px',
                      position: 'absolute',
                      top: '390px',
                      left: '52px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                    }}
                  >
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
      
    </div>
  )
}
