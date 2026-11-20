import { useEffect, useRef, useState } from 'react'
import Brand from '../components/common/Brand.jsx'
import HomeMedia from '../components/common/HomeMedia.jsx'
import MobileIcon from '../components/ui/MobileIcon.jsx'
import { contact, equipment, services } from '../data/site.js'
import { projects } from '../data/projects.js'
import ProjectGallery from '../sections/projects/ProjectGallery.jsx'
import '../styles/mobile-home.css'

const tabs = [
  { id: 'home', title: 'Home', icon: 'home' },
  { id: 'services', title: 'Services', icon: 'grid' },
  { id: 'equipment', title: 'Fleet', icon: 'fleet' },
  { id: 'projects', title: 'Projects', icon: 'hardhat' },
  { id: 'contact', title: 'Contact', icon: 'mail' },
]

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
const panelTitles = { services: 'Our services', equipment: 'Our fleet', projects: 'Our work' }

function MobileHeader({ openProjects }) {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)

  function closeOnEscape(event) {
    if (open && event.key === 'Escape') {
      setOpen(false)
      menuButton.current.focus()
    }
  }

  return (
    <header className="mobile-header" onKeyDown={closeOnEscape}>
      <Brand onClick={() => setOpen(false)} />
      <a className="mobile-header-phone" href={contact.phoneHref} aria-label="Call JD Excavation"><MobileIcon name="phone" /></a>
      <button
        className="mobile-icon-button"
        type="button"
        ref={menuButton}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <MobileIcon name={open ? 'close' : 'menu'} />
      </button>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Main navigation" hidden={!open}>
        {tabs.map(({ id, title }) => id === 'projects' ? (
          <button key={id} type="button" aria-haspopup="dialog" onClick={() => { setOpen(false); menuButton.current.focus(); openProjects() }}>{title}</button>
        ) : <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{title}</a>)}
        <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </nav>
    </header>
  )
}

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
        <a className="mobile-action" href={contact.websiteHref}>Request a quote <MobileIcon name="arrow" /></a>
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

function MobileServices({ openServices }) {
  return (
    <section id="services" className="mobile-services" data-mobile-section aria-labelledby="mobile-services-title">
      <div className="mobile-section-heading">
        <h2 id="mobile-services-title">Our Services</h2>
        <button className="mobile-action mobile-action--outline" type="button" aria-haspopup="dialog" onClick={openServices}>View all <MobileIcon name="arrow" /></button>
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

function MobilePanel({ dialog, panel }) {
  return (
    <dialog ref={dialog} className="mobile-panel" aria-labelledby="mobile-panel-title">
      <div className="mobile-panel-heading">
        <h2 id="mobile-panel-title">{panelTitles[panel]}</h2>
        <button type="button" className="mobile-icon-button" aria-label="Close" onClick={() => dialog.current.close()}><MobileIcon name="close" /></button>
      </div>
      {panel === 'services' && (
        <ul className="mobile-panel-list">
          {services.map(({ name, description }) => <li key={name}><h3>{name}</h3><p>{description}</p></li>)}
        </ul>
      )}
      {panel === 'equipment' && (
        <>
          <HomeMedia slot="ABOUT_EQUIPMENT" className="mobile-panel-photo" />
          <ul className="mobile-panel-list">{equipment.map(({ name }) => <li key={name}>{name}</li>)}</ul>
        </>
      )}
      {panel === 'projects' && (
        <>
          <figure><HomeMedia slot="UNDERGROUND_UTILITIES" className="mobile-panel-photo" /><figcaption>Underground utilities · Dallas, TX</figcaption></figure>
          <figure><HomeMedia slot="RESIDENTIAL_TRENCHING" className="mobile-panel-photo" /><figcaption>Residential trenching · Dallas, TX</figcaption></figure>
          {projects.length > 0 && <ProjectGallery photos={projects} visibleCount={projects.length} />}
        </>
      )}
    </dialog>
  )
}

export default function MobileHome() {
  const main = useRef(null)
  const dialog = useRef(null)
  const [panel, setPanel] = useState(null)
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
    if (panel && !dialog.current.open) dialog.current.showModal()
  }, [panel])

  function openPanel(name) {
    if (panel === name) dialog.current.showModal()
    else setPanel(name)
  }

  return (
    <div className="mobile-site">
      <MobileHeader openProjects={() => openPanel('projects')} />
      <main id="main-content" ref={main} tabIndex={-1}>
        <MobileHero />
        <ul className="mobile-sectors" aria-label="Industries served">
          <li><MobileIcon name="commercial" />Commercial</li>
          <li><MobileIcon name="municipal" />Municipal</li>
          <li><MobileIcon name="pipe" />Infrastructure</li>
        </ul>
        <MobileServices openServices={() => openPanel('services')} />
        <section id="about" className="mobile-fleet" aria-labelledby="mobile-fleet-title">
          <div id="equipment" className="mobile-split" data-mobile-section>
            <HomeMedia slot="ABOUT_EQUIPMENT" className="mobile-split-photo" />
            <div className="mobile-split-copy">
              <h2 id="mobile-fleet-title"><span>Powerful equipment.</span><br />Precision results.</h2>
              <p>A reliable fleet for demanding projects.</p>
              <button className="mobile-action" type="button" aria-haspopup="dialog" onClick={() => openPanel('equipment')}>Explore our fleet <MobileIcon name="arrow" /></button>
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
            <a className="mobile-action mobile-action--outline" href={contact.websiteHref}>Start your project <MobileIcon name="arrow" /></a>
          </div>
        </section>
      </main>
      <nav aria-label="Mobile navigation" className="mobile-tab-bar">
        {tabs.map(({ id, title, icon }) => {
          const label = <><MobileIcon name={icon} /><span>{title}</span></>
          return id === 'projects' ? (
            <button key={id} type="button" aria-haspopup="dialog" onClick={() => openPanel(id)}>{label}</button>
          ) : <a key={id} href={`#${id}`} aria-current={section === id ? 'location' : undefined} onClick={() => setSection(id)}>{label}</a>
        })}
      </nav>
      <MobilePanel dialog={dialog} panel={panel} />
    </div>
  )
}
