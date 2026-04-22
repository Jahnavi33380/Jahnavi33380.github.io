import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="h-px w-[80%] bg-slate-300" />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <SectionDivider />
      <Experience />

      <SectionDivider />
      <Skills />

      <SectionDivider />
      <Projects />

      <SectionDivider />
      <Contact />

      <Footer />
    </div>
  )
}

export default App