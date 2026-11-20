import HomeMedia from '../../components/common/HomeMedia.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import { services } from '../../data/site.js'

const featuredServices = [
  { id: 'boring', slot: 'DIRECTIONAL_BORING' },
  { id: 'excavation', slot: 'EXCAVATION' },
  { id: 'trenching', slot: 'UTILITY_TRENCHING' },
]

const additionalServices = ['site', 'grading', 'foundation', 'water']
const serviceById = Object.fromEntries(services.map((service) => [service.icon, service]))

function ServiceCard({ id, slot, number }) {
  const { name, description } = serviceById[id]
  const relatedService = id === 'trenching' ? serviceById.pipe : null

  return (
    <details id={`service-${id}`} name="featured-services" className="service-card" data-reveal>
      <summary aria-label={name}>
        <HomeMedia slot={slot} className="service-media" />
        <span className="service-card-label">
          <span>
            <span className="service-number" aria-hidden="true">{number}</span>
            <span className="service-name">{name}</span>
          </span>
          <span className="service-arrow" aria-hidden="true">→</span>
        </span>
      </summary>
      <div className="service-card-details">
        <p>{description}</p>
        {relatedService && (
          <div id="service-pipe" className="related-service">
            <h3>{relatedService.name}</h3>
            <p>{relatedService.description}</p>
          </div>
        )}
      </div>
    </details>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section" aria-labelledby="services-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading id="services-title">
          Solid ground.<br /><span className="accent">Smarter solutions.</span>
        </SectionHeading>
        <div className="service-grid">
          {featuredServices.map(({ id, slot }, index) => <ServiceCard key={id} id={id} slot={slot} number={`0${index + 1}`} />)}
        </div>
        <div className="additional-services" data-reveal>
          <p>Also providing:</p>
          <ul>
            {additionalServices.map((id) => (
              <li key={id}>
                <details id={`service-${id}`}>
                  <summary>{serviceById[id].name}</summary>
                  <p>{serviceById[id].description}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
