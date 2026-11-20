import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal.js'
import Hero from '../sections/home/Hero.jsx'
import AboutSection from '../sections/about/AboutSection.jsx'
import EquipmentSection from '../sections/equipment/EquipmentSection.jsx'
import ServicesSection from '../sections/services/ServicesSection.jsx'
import ProjectsSection from '../sections/projects/ProjectsSection.jsx'
import CoverageSection from '../sections/coverage/CoverageSection.jsx'
import ContactSection from '../sections/contact/ContactSection.jsx'
import ValuesStrip from '../sections/home/ValuesStrip.jsx'

export default function HomePage() {
  const mainRef = useRef(null)
  useScrollReveal(mainRef)

  return (
    <main id="main-content" ref={mainRef} tabIndex={-1}>
      <Hero />
      <ValuesStrip />
      <AboutSection />
      <ServicesSection />
      <EquipmentSection />
      <ProjectsSection />
      <CoverageSection />
      <ContactSection />
    </main>
  )
}

