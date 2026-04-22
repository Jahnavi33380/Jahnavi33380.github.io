import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi'

const links = [
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jahnavigona',
    href: 'https://linkedin.com/in/jahnavigona',
    iconBg: '#0077b5',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'jgona@asu.edu',
    href: 'mailto:jgona@asu.edu',
    iconBg: '#6366f1',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Jahnavi33380',
    href: 'https://github.com/Jahnavi33380',
    iconBg: '#1f2937',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto text-center" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-cyan-600 text-xs font-semibold tracking-[0.35em] uppercase font-mono mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500">
              Connect
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-8">
            Open to full time roles, collaborations, and thoughtful conversations about software engineering, AI, and product building.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="https://linkedin.com/in/jahnavigona"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0077b5] text-white font-semibold text-[15px] shadow-lg shadow-sky-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 mb-12"
        >
          Connect on LinkedIn <FiArrowUpRight size={17} />
        </motion.a>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {links.map((link, i) => {
            const Icon = link.icon

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                className="group relative text-left bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-cyan-200 transition-all duration-300"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl opacity-80"
                  style={{ background: link.iconBg }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg mb-4"
                  style={{ background: link.iconBg }}
                >
                  <Icon size={18} color="#fff" />
                </div>

                {/* Label */}
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400 mb-2 font-mono">
                  {link.label}
                </p>

                {/* Value */}
                <p className="text-slate-900 font-semibold text-[15px] leading-6 break-all">
                  {link.value}
                </p>

                {/* CTA row */}
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-cyan-700 transition-colors">
                  Open
                  <FiArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}