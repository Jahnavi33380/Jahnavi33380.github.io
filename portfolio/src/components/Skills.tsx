import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type ColorVariant = 'cyan' | 'purple' | 'green' | 'orange'

const categories: { title: string; color: ColorVariant; emoji: string; skills: string[] }[] = [
  { title: 'Languages',             color: 'cyan',   emoji: '💻', skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3', 'PHP', 'C', 'C++', '.NET'] },
  { title: 'Frontend & Frameworks', color: 'purple', emoji: '🎨', skills: ['ReactJS', 'React Native', 'Angular', 'Spring Boot', 'Maven', 'Django'] },
  { title: 'Tools & Databases',     color: 'green',  emoji: '🛠️', skills: ['MongoDB', 'Oracle SQL', 'PL/SQL', 'Jenkins', 'Nginx', 'Node.js', 'Git', 'Postman', 'JUnit'] },
  { title: 'Cloud & DevOps',        color: 'orange', emoji: '☁️', skills: ['AWS', 'Azure', 'Oracle Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'] },
  { title: 'Monitoring',            color: 'cyan',   emoji: '📊', skills: ['AWS CloudWatch', 'Dynatrace', 'Datadog', 'Splunk'] },
  { title: 'Soft Skills',           color: 'purple', emoji: '🤝', skills: ['Agile', 'Scrum', 'Collaboration', 'Problem Solving', 'Adaptability'] },
]

const tagColors: Record<ColorVariant, string> = {
  cyan: 'bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100',
  purple: 'bg-violet-50 text-violet-700 ring-1 ring-violet-100',
  green: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
  orange: 'bg-orange-50 text-orange-700 ring-1 ring-orange-100',
}

const accentBars: Record<ColorVariant, string> = {
  cyan: 'bg-cyan-400',
  purple: 'bg-violet-400',
  green: 'bg-emerald-400',
  orange: 'bg-orange-400',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-600 text-xs font-semibold tracking-[0.35em] uppercase font-mono mb-3">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500">Stack</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
            Technologies I&apos;ve worked with across 3+ years of professional experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-1 h-7 rounded-full ${accentBars[cat.color]}`} />
                <span className="text-xl">{cat.emoji}</span>
                <h3 className="text-slate-800 font-semibold text-sm md:text-base">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.25, delay: i * 0.06 + j * 0.03 }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${tagColors[cat.color]} hover:scale-105 transition-transform`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}