import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiDownload, FiBriefcase, FiCode, FiAward } from 'react-icons/fi'

const stats = [
  { icon: FiBriefcase, value: '3+', label: 'Years Experience' },
  { icon: FiCode, value: '20+', label: 'Technologies' },
  { icon: FiAward, value: 'JPM', label: 'Chase & Co.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-8 section-alt">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 font-mono">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl shadow-slate-100">
                <img
                  src="/images/about.jpeg"
                  alt="Jahnavi Gona"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating tag */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg"
              >
                 <p className="text-slate-800 text-sm font-bold">Software Engineer</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-slate-700 leading-relaxed mb-5 text-lg">
              I'm a passionate{' '}
              <span className="text-blue-600 font-semibold">Software Engineer</span>{' '}
              with 1.5+ years of experience at JPMorgan Chase, building full-stack
              applications used by millions of customers.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              My work spans React frontends to Java Spring Boot microservices, cloud
              infrastructure on AWS, and CI/CD automation. I care deeply about code
              quality, test coverage, and developer experience — and I've driven
              measurable improvements in all three at JPMorgan Chase.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="card p-4 text-center"
                >
                  <Icon className="text-blue-600 mx-auto mb-2" size={18} />
                  <p className="text-slate-900 font-bold text-xl">{value}</p>
                  <p className="text-slate-400 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="/cv/Jahnavi_Gona_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-100"
            >
              <FiDownload size={14} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
