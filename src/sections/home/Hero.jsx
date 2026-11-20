import HomeMedia from '../../components/common/HomeMedia.jsx'
import InterfaceIcon from '../../components/ui/MobileIcon.jsx'
import { contact } from '../../data/site.js'

export default function Hero() {
  return (
    <section id="home" className="hero hero--desktop" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-art" aria-hidden="true">
        <HomeMedia slot="HERO_BACKGROUND" className="hero-photo" priority />
      </div>
      <div className="container hero-inner">
        <p className="eyebrow hero-enter">{contact.area}</p>
        <h1 id="hero-title" className="hero-enter">
          <span>Professional</span>{' '}
          <span>Excavation &amp;</span>{' '}
          <span>Tunneling Services.</span>
        </h1>
        <p className="hero-tagline hero-enter">Safety, Efficiency, Commitment.</p>
        <p className="hero-description hero-enter">Reliable excavation, tunneling and underground utility services for commercial and infrastructure projects in Dallas and surrounding areas.</p>
        <div className="hero-actions hero-enter">
          <a className="button button--yellow" href="#contact">
            Request a quote <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="button button--outline hero-call" href={contact.phoneHref}>
            <InterfaceIcon name="phone" /> Call us {contact.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
