import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-slate-200/60'
            : 'bg-white/75 backdrop-blur-xl border-b border-transparent shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Jahnavi Gona
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/jahnavigona"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077b5] text-white text-sm font-semibold shadow-md shadow-sky-200 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <FiLinkedin size={14} /> LinkedIn
            </a>

            <a
              href="https://github.com/Jahnavi33380"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-md shadow-slate-200 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <FiGithub size={14} /> GitHub
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 md:hidden bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-200/70 rounded-3xl p-3"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-2xl text-sm font-semibold text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex gap-3 mt-4 pt-4 border-t border-slate-200">
              <a
                href="https://linkedin.com/in/jahnavigona"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#0077b5] text-white text-sm font-semibold shadow-md"
              >
                <FiLinkedin size={13} /> LinkedIn
              </a>
              <a
                href="https://github.com/Jahnavi33380"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-md"
              >
                <FiGithub size={13} /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}