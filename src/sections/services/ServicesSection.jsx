import HomeMedia from '../../components/common/HomeMedia.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import InterfaceIcon from '../../components/ui/MobileIcon.jsx'
import { contact, services, servicesPath } from '../../data/site.js'
import './services.css'

const featuredServices = [
  { id: 'boring', slot: 'DIRECTIONAL_BORING', icon: 'fleet', summary: 'Create underground utility paths with minimal surface disruption.' },
  { id: 'trenching', slot: 'UTILITY_TRENCHING', icon: 'pipe', title: 'Trenching', summary: 'Cut trenches for utility lines, drainage and underground installations.' },
  { id: 'excavation', slot: 'EXCAVATION', icon: 'fleet', summary: 'Move earth and prepare sites for commercial and infrastructure work.' },
  { id: 'pipe', slot: 'UNDERGROUND_UTILITIES', icon: 'layers', title: 'Pipe Rehabilitation', summary: 'Repair or upgrade underground pipes to restore reliable flow.' },
]

const serviceById = Object.fromEntries(services.map((service) => [service.icon, service]))

function ServiceCard({ id, slot, icon, summary, title = serviceById[id].name }) {
  const titleId = `service-${id}-title`
  const descriptionId = `service-${id}-description`

  return (
    <details id={`service-${id}`} name="featured-services" className="service-card" data-reveal>
      <summary aria-labelledby={titleId} aria-describedby={descriptionId}>
        <HomeMedia slot={slot} className="service-media" />
        <span className="service-card-label">
          <InterfaceIcon name={icon} className="service-card-icon" />
          <strong id={titleId} className="service-name">{title}</strong>
          <span id={descriptionId} className="service-description">{summary}</span>
          <span className="service-arrow" aria-hidden="true">→</span>
        </span>
      </summary>
      <div className="service-card-details">
        <a href={contact.whatsappHref}>{contact.quoteLabel} <span aria-hidden="true">↗</span></a>
      </div>
    </details>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section" aria-labelledby="services-title" tabIndex={-1}>
      <div className="container">
        <div className="services-heading">
          <SectionHeading id="services-title" eyebrow="Sitework & Underground Utilities">Our Services</SectionHeading>
          <a className="all-services-button text-link" href={servicesPath}>
            <span>View all services</span> <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="service-grid">
          {featuredServices.map((service) => <ServiceCard key={service.id} {...service} />)}
        </div>
      </div>
    </section>
  )
}
