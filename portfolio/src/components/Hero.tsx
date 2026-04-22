import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowDown, FiGithub, FiLinkedin, FiMail, FiBriefcase, FiCode, FiAward } from 'react-icons/fi'

const titles = [
  'Software Engineer',
  'Full Stack Developer',
  'Cloud & DevOps Engineer',
  'React Developer',
]

const stats = [
  { icon: FiBriefcase, value: '3+', label: 'Years of Experience' },
  { icon: FiCode, value: '20+', label: 'Technologies' },
  { icon: FiAward, value: '4.0', label: 'MS GPA @ ASU' },
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = titles[titleIndex]

    if (typing) {
      if (charIndex < current.length) {
        timerRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 65)
      } else {
        timerRef.current = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (charIndex > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 38)
      } else {
        setTitleIndex((i) => (i + 1) % titles.length)
        setTyping(true)
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [charIndex, typing, titleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(14,165,233,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div
        className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-50 border border-cyan-100 shadow-sm"
            >
              <span
                className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
              />
              <span className="text-cyan-700 text-xs font-semibold font-mono tracking-wide">
                Available for full-time opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold mb-3 leading-tight tracking-tight text-slate-900"
            >
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500">
                Jahnavi
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-mono mb-5 h-8 flex items-center"
            >
              <span className="text-cyan-600 font-bold">{displayed}</span>
              <span className="ml-1 inline-block w-[10px] h-6 border-r-2 border-cyan-500 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl text-slate-600"
            >
              Software Engineer with{' '}
              <span className="font-semibold text-slate-900">
                3+ years of experience
              </span>{' '}
              building scalable full-stack applications at{' '}
              <span className="font-semibold text-cyan-700">
                JPMorgan Chase
              </span>{' '}
              and deepening expertise at{' '}
              <span className="font-semibold text-slate-900">
                Arizona State University
              </span>{' '}
              with a 4.0 GPA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-cyan-500 text-white font-semibold text-[15px] shadow-lg shadow-cyan-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </a>

              <a
                href="/cv/Jahnavi_Gona_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-slate-800 font-semibold text-[15px] border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <FiDownload size={15} /> Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://linkedin.com/in/jahnavigona"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0077b5] text-white font-semibold text-sm shadow-lg shadow-sky-200 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                <FiLinkedin size={14} /> LinkedIn
              </a>

              <a
                href="https://github.com/Jahnavi33380"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-sm shadow-lg shadow-slate-200 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                <FiGithub size={14} /> GitHub
              </a>

              <a
                href="mailto:jgona@asu.edu"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 transition-all duration-300"
              >
                <FiMail size={14} /> jgona@asu.edu
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="w-[280px] h-[280px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-slate-200 bg-white">
                <img
                  src="/images/about.jpeg"
                  alt="Jahnavi Gona"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-lg"
              >
                <p className="text-cyan-600 text-[11px] font-semibold font-mono tracking-wide">
                  JPMorgan Chase
                </p>
                <p className="text-slate-900 text-sm font-bold">
                  Software Engineer
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full mt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white p-4 text-center rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <Icon className="mx-auto mb-2 text-cyan-500" size={18} />
                  <p className="text-slate-900 font-extrabold text-2xl">{value}</p>
                  <p className="text-slate-500 text-[11px] mt-1 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors"
          >
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase font-mono">
              Scroll
            </span>
            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center bg-white shadow-sm">
              <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                <FiArrowDown size={14} />
              </motion.div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}