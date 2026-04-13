import Image from 'next/image'
import { getSiteImages } from '@/lib/contentful'
import { getMessages } from '@/lib/locale'
import { getServerLocale } from '@/lib/locale.server'

export default async function About() {
  const { profileImageUrl } = await getSiteImages()
  const locale = await getServerLocale()
  const messages = getMessages(locale)

  const timeline = [
    {
      ...messages.about.timeline[0],
      icon: '🚀',
    },
    {
      ...messages.about.timeline[1],
      icon: '💻',
    },
    {
      ...messages.about.timeline[2],
      icon: '🎨',
    },
  ]

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold text-dark-gray mb-4"
            data-aos="fade-up"
          >
            {messages.about.title}
          </h1>
          <p
            className="text-xl text-medium-gray max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {messages.about.intro}
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Image */}
          <div data-aos="fade-right" className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-md aspect-[4/5] md:max-w-none md:min-h-[560px] rounded-xl overflow-hidden bg-light-gray shadow-xl">
              <Image
                src={profileImageUrl}
                alt="Profile"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold text-dark-gray mb-6">
              {messages.about.profileTitle}
            </h2>
            <p className="text-lg text-medium-gray leading-relaxed mb-6">{messages.about.paragraphs[0]}</p>
            <p className="text-lg text-medium-gray leading-relaxed mb-6">{messages.about.paragraphs[1]}</p>
            <ul className="space-y-3 mb-8">
              {messages.about.specialties.map((item) => (
                <li key={item} className="flex items-center gap-3 text-dark-gray">
                  <span className="w-2 h-2 bg-primary-blue rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2
            className="text-4xl font-bold text-dark-gray mb-12 text-center"
            data-aos="fade-up"
          >
            {messages.about.timelineTitle}
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.period}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-start ${
                  index % 2 === 0 ? '' : 'md:grid-cols-3'
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Left side */}
                    <div>
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <div className="md:text-right">
                        <h3 className="text-2xl font-bold text-primary-blue mb-2">{item.period}</h3>
                        <p className="text-lg font-semibold text-dark-gray">{item.title}</p>
                      </div>
                    </div>

                    {/* Middle - Timeline dot */}
                    <div className="hidden md:flex justify-center">
                      <div className="relative">
                        <div className="w-4 h-4 bg-primary-blue rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-light-gray"></div>
                        )}
                      </div>
                    </div>

                    {/* Right side - Description */}
                    <div>
                      <p className="text-medium-gray leading-relaxed">{item.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left side - Description (reversed) */}
                    <div>
                      <p className="text-medium-gray leading-relaxed">{item.description}</p>
                    </div>

                    {/* Middle - Timeline dot */}
                    <div className="hidden md:flex justify-center">
                      <div className="relative">
                        <div className="w-4 h-4 bg-primary-blue rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-light-gray"></div>
                        )}
                      </div>
                    </div>

                    {/* Right side */}
                    <div>
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-blue mb-2">{item.period}</h3>
                        <p className="text-lg font-semibold text-dark-gray">{item.title}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h2
            className="text-4xl font-bold text-dark-gray mb-12 text-center"
            data-aos="fade-up"
          >
            {messages.about.skillsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {messages.about.skillGroups.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="p-8 bg-light-gray rounded-xl"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="text-xl font-bold text-dark-gray mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="text-medium-gray">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
