import SectionHeading from '../../components/common/SectionHeading.jsx'
import { services } from '../../data/site.js'

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section" aria-labelledby="services-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading id="services-title">Our Services</SectionHeading>
        <div className="service-grid">
          {services.map(({ name, description, icon }) => (
            <article id={`service-${icon}`} className="service-card" key={name} data-reveal>
              <div className="service-icon-frame" aria-hidden="true"><span className={`service-icon service-icon--${icon}`} /></div>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

