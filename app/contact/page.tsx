'use client'

import { FaLinkedin, FaGithub } from "react-icons/fa6";
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  const contactMethods = [
    {
      title: 'GitHub',
      value: '@RogierOttens',
      icon: FaGithub,
      link: 'https://github.com/sjottens',
    },
    {
      title: 'LinkedIn',
      value: '@RogierOttens',
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/rogier-o-9707119/?locale=en',
    },
  ]

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold text-dark-gray mb-4"
            data-aos="fade-up"
          >
            Get In Touch
          </h1>
          <p
            className="text-xl text-medium-gray max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how
            I can help bring your ideas to life.
          </p>
        </div>

        {/* Contact Form */}
        <div id="contact-form" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-light-gray rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-8 text-center">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-xl border border-light-gray hover:border-primary-blue hover:shadow-lg transition-all transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <Icon size={32} className="text-primary-blue mb-3" />
                <h3 className="text-lg font-semibold text-dark-gray mb-1">{method.title}</h3>
                <p className="text-medium-gray text-sm text-center">{method.value}</p>
              </a>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2
            className="text-3xl font-bold text-dark-gray mb-8 text-center"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'What is your typical response time?',
                answer:
                  "I usually respond to inquiries within 24 hours during business days. For urgent matters, feel free to contact me directly via email or LinkedIn.",
              },
              {
                question: 'Do you work with agencies or only direct clients?',
                answer:
                  'I work with both agencies and direct clients. Each project is evaluated based on its requirements, timeline, and alignment with my expertise.',
              },
              {
                question: 'What is your project process?',
                answer:
                  'I follow a structured approach: discovery, planning, design creation, development, testing, and deployment. Regular communication and feedback loops ensure the final product meets your expectations.',
              },
              {
                question: 'What is your pricing model?',
                answer:
                  'Pricing depends on project scope, complexity, and duration. I offer both project-based and hourly rates. Let\'s discuss your specific needs to find the best arrangement.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-light-gray rounded-lg hover:border-primary-blue transition-all"
                data-aos="fade-up"
                data-aos-delay={`${index * 50}`}
              >
                <h3 className="text-lg font-semibold text-dark-gray mb-2">{faq.question}</h3>
                <p className="text-medium-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
