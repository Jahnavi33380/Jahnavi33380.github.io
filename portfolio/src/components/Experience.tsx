import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

type TagVariant = 'cyan' | 'purple'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'JPMorgan Chase & Co.',
    period: 'June 2023 – July 2024',
    location: 'Hyderabad, India',
    type: 'Full-time',
    bullets: [
      'Modernized legacy applications by migrating to React, Spring Boot, and AWS, resulting in a 40% reduction in maintenance costs and significant system performance improvements.',
      'Implemented end-to-end testing (Cypress), contract testing (Pact Flow), and component testing (Cucumber), enhancing test coverage by 45% and reducing production defects by 30%.',
      'Integrated Kafka for real-time message streaming between microservices, improving data processing speed by 50%.',
      'Built an AWS Lambda solution to auto deploy Cypress tests in Spinnaker CI/CD pipelines, reducing deployment times by 25%.',
    ],
    tags: ['React', 'Spring Boot', 'AWS', 'Kafka', 'Cypress', 'CI/CD', 'Kubernetes'],
    accent: '#06b6d4',
    tagClass: 'cyan' as TagVariant,
  },
  {
    role: 'Software Engineer Intern',
    company: 'JPMorgan Chase & Co.',
    period: 'May 2022 – Jul 2022  ·  Feb 2023 – May 2023',
    location: 'Hyderabad, India',
    type: 'Internship',
    bullets: [
      'Conducted unit and regression testing for high-availability mainframe applications, reducing post-release defects.',
      'Configured AWS CloudWatch dashboards and alerting rules, preventing approximately 80% of potential production incidents.',
      'Improved system uptime and performance by 30% through targeted monitoring and Agile development practices.',
      'Gained hands-on experience with Spring Boot microservices and Oracle SQL, contributing to backend API development.',
    ],
    tags: ['AWS CloudWatch', 'JUnit', 'Spring Boot', 'Oracle SQL', 'Agile', 'Monitoring'],
    accent: '#8b5cf6',
    tagClass: 'purple' as TagVariant,
  },
]

const tagStyles: Record<TagVariant, string> = {
  cyan: 'bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100',
  purple: 'bg-violet-50 text-violet-700 ring-1 ring-violet-100',
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-600 text-xs font-semibold tracking-[0.35em] uppercase font-mono mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500">History</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
            My professional journey building production systems at JPMorgan Chase
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="h-full"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col">
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{
                    background: `linear-gradient(90deg, ${exp.accent}, ${exp.accent}99)`,
                  }}
                />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-sm"
                    style={{ background: exp.accent }}
                  >
                    JP
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-[15px] leading-tight">
                      {exp.company}
                    </p>
                    <span
                      className="inline-flex mt-1 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{
                        background: `${exp.accent}15`,
                        color: exp.accent,
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="text-slate-900 font-extrabold text-2xl leading-tight mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap text-slate-500 text-sm">
                    <span className="flex items-center gap-1.5 font-mono font-semibold">
                      <FiCalendar size={13} /> {exp.period}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <FiMapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 mb-5" />

                <ul className="space-y-3 mb-6 flex-1">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-slate-600 text-[15px] leading-relaxed"
                    >
                      <span
                        className="mt-2.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: exp.accent }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${tagStyles[exp.tagClass]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}