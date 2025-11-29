import { useCallback, useEffect, useMemo, useState } from 'react'
import { Loader } from './components/Loader'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { NavBar } from './sections/NavBar'
import type { SectionId } from './utils/constants'

function App() {
  const sectionIds = useMemo<SectionId[]>(() => ['hero', 'about', 'skills', 'projects', 'contact'], [])
  const [progress, setProgress] = useState(10)
  const [showLoader, setShowLoader] = useState(true)
  const [activeSection, setActiveSection] = useState<SectionId>('hero')

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const increment = Math.random() * 18
        return Math.min(prev + increment, 100)
      })
    }, 180)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 100) return
    const timeout = setTimeout(() => setShowLoader(false), 500)
    return () => clearTimeout(timeout)
  }, [progress])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .map((entry) => entry.target.id as SectionId)
        if (visible[0]) {
          setActiveSection(visible[0])
        }
      },
      { threshold: 0.35 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  const handleNavigate = useCallback((section: SectionId) => {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <Loader progress={progress} isVisible={showLoader} />
      <div className="relative">
        <NavBar activeSection={activeSection} onNavigate={handleNavigate} />
        <main className="space-y-12">
          <Hero onNavigate={handleNavigate} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App


