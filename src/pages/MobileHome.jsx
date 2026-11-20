import { useEffect, useRef, useState } from 'react'
import { MobileHeader, MobileTabBar } from '../components/layout/MobileNavigation.jsx'
import HomeMedia from '../components/common/HomeMedia.jsx'
import MobileIcon from '../components/ui/MobileIcon.jsx'
import { contact, equipment, projectsPath, services, servicesPath } from '../data/site.js'
import '../styles/mobile-home.css'

const slides = [
  { slot: 'HERO_BACKGROUND', title: 'Excavation' },
  { slot: 'DIRECTIONAL_BORING', title: 'Directional boring' },
  { slot: 'RESIDENTIAL_TRENCHING', title: 'Utility trenching' },
]

const featuredServices = [
  { id: 'boring', slot: 'DIRECTIONAL_BORING' },
  { id: 'excavation', slot: 'EXCAVATION' },
  { id: 'trenching', slot: 'UTILITY_TRENCHING' },
  { id: 'pipe', slot: 'UNDERGROUND_UTILITIES', title: 'Pipe Rehabilitation' },
]

const serviceById = Object.fromEntries(services.map((service) => [service.icon, service]))

function MobileHero() {
  const [active, setActive] = useState(0)

  return (
    <section id="home" className="mobile-hero" data-mobile-section aria-labelledby="mobile-hero-title">
      <div className="mobile-hero-stage" id="mobile-hero-stage" data-slide={active}>
        <HomeMedia slot={slides[active].slot} className="mobile-hero-photo" priority />
        <div className="mobile-hero-copy">
          <p className="mobile-hero-kicker">Excavation &amp; Underground Utilities</p>
          <h1 id="mobile-hero-title">Solid work.<br />From the<br /><span>ground down.</span></h1>
          <p className="mobile-hero-location"><MobileIcon name="pin" /> Serving Dallas, Texas</p>
        </div>
      </div>
      <div className="mobile-hero-actions">
        <a className="mobile-action" href={contact.whatsappHref}>{contact.quoteLabel} <MobileIcon name="arrow" /></a>
        <a className="mobile-action mobile-action--outline" href={contact.phoneHref}>Call now <MobileIcon name="arrow" /></a>
      </div>
      <div className="mobile-hero-dots" aria-label="Hero images" role="group">
        {slides.map(({ title }, index) => (
          <button key={title} type="button" aria-controls="mobile-hero-stage" aria-pressed={index === active} aria-label={`Show ${title} image`} onClick={() => setActive(index)} />
        ))}
      </div>
    </section>
  )
}

function MobileServices() {
  return (
    <section id="services" className="mobile-services" data-mobile-section aria-labelledby="mobile-services-title">
      <div className="mobile-section-heading">
        <h2 id="mobile-services-title">Our Services</h2>
        <a className="mobile-action mobile-action--outline" href={servicesPath}>View all <MobileIcon name="arrow" /></a>
      </div>
      <div className="mobile-service-grid">
        {featuredServices.map(({ id, slot, title = serviceById[id].name }) => (
          <details key={id} id={`service-${id}`} className={`mobile-service mobile-service--${id}`} name="mobile-featured-services">
            <summary aria-label={title}>
              <HomeMedia slot={slot} className="mobile-service-photo" />
              <span>{title} <MobileIcon name="arrow" /></span>
            </summary>
            <p>{serviceById[id].description}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function MobileFleetPanel({ dialog }) {
  return (
    <dialog ref={dialog} className="mobile-panel" aria-labelledby="mobile-fleet-panel-title">
      <div className="mobile-panel-heading">
        <h2 id="mobile-fleet-panel-title">Our fleet</h2>
        <button type="button" className="mobile-icon-button" aria-label="Close" onClick={() => dialog.current.close()}><MobileIcon name="close" /></button>
      </div>
      <HomeMedia slot="ABOUT_EQUIPMENT" className="mobile-panel-photo" />
      <ul className="mobile-panel-list">{equipment.map(({ name }) => <li key={name}>{name}</li>)}</ul>
    </dialog>
  )
}

export default function MobileHome() {
  const main = useRef(null)
  const dialog = useRef(null)
  const [section, setSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setSection(visible.target.id)
    }, { rootMargin: '-22% 0px -57% 0px' })

    main.current.querySelectorAll('[data-mobile-section]').forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.location.hash === '#projects') window.location.replace(projectsPath)
  }, [])

  return (
    <div className="mobile-site">
      <MobileHeader />
      <main id="main-content" ref={main} tabIndex={-1}>
        <MobileHero />
        <ul className="mobile-sectors" aria-label="Industries served">
          <li><MobileIcon name="commercial" />Commercial</li>
          <li><MobileIcon name="municipal" />Municipal</li>
          <li><MobileIcon name="pipe" />Infrastructure</li>
        </ul>
        <MobileServices />
        <section id="about" className="mobile-fleet" aria-labelledby="mobile-fleet-title">
          <div id="equipment" className="mobile-split" data-mobile-section>
            <HomeMedia slot="ABOUT_EQUIPMENT" className="mobile-split-photo" />
            <div className="mobile-split-copy">
              <h2 id="mobile-fleet-title"><span>Powerful equipment.</span><br />Precision results.</h2>
              <p>A reliable fleet for demanding projects.</p>
              <button className="mobile-action" type="button" aria-haspopup="dialog" onClick={() => dialog.current.showModal()}>Explore our fleet <MobileIcon name="arrow" /></button>
            </div>
          </div>
        </section>
        <section className="mobile-values" aria-labelledby="mobile-values-title">
          <div className="mobile-shield"><MobileIcon name="shield" /></div>
          <div><h2 id="mobile-values-title">Safety. Quality.<br />Commitment.</h2><p>Experienced crews. Reliable execution.</p></div>
        </section>
        <section id="contact" className="mobile-dallas mobile-split" data-mobile-section aria-labelledby="mobile-dallas-title">
          <HomeMedia slot="UNDERGROUND_UTILITIES" className="mobile-split-photo" />
          <div className="mobile-split-copy">
            <h2 id="mobile-dallas-title"><MobileIcon name="pin" /> Built for Dallas.</h2>
            <p>Excavation, tunneling and underground utility solutions.</p>
            <a className="mobile-action mobile-action--outline" href={contact.whatsappHref}>{contact.quoteLabel} <MobileIcon name="arrow" /></a>
          </div>
        </section>
      </main>
      <MobileTabBar activeSection={section} onNavigate={setSection} />
      <MobileFleetPanel dialog={dialog} />
    </div>
  )
}
