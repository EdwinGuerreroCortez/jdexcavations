import HomeMedia from '../components/common/HomeMedia.jsx'
import MobileIcon from '../components/ui/MobileIcon.jsx'
import { contact, services } from '../data/site.js'
import '../styles/services-page.css'

const servicePhotos = {
  boring: 'DIRECTIONAL_BORING',
  trenching: 'UTILITY_TRENCHING',
  excavation: 'EXCAVATION',
  pipe: 'UNDERGROUND_UTILITIES',
}

const featuredServices = services.filter(({ icon }) => servicePhotos[icon])
const supportingServices = services.filter(({ icon }) => !servicePhotos[icon])

export default function ServicesPage() {
  return (
    <main id="main-content" className="services-page" tabIndex={-1}>
      <section className="services-page-hero" aria-labelledby="service-page-title">
        <div className="services-page-backdrop" aria-hidden="true">
          <HomeMedia slot="HERO_BACKGROUND" priority />
        </div>
        <div className="container services-page-intro">
          <p className="eyebrow">{contact.area}</p>
          <h1 id="service-page-title">Excavation &amp;<br /><span>Underground Services</span></h1>
          <p className="services-page-lead">Construction and underground utility work for commercial, municipal, and infrastructure projects in the Dallas area.</p>
          <a className="button button--yellow" href={contact.whatsappHref}>
            {contact.quoteLabel} <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="container services-page-catalog" aria-labelledby="featured-services-title">
        <h2 id="featured-services-title">Excavation and utility work</h2>
        <div className="service-catalog-grid">
          {featuredServices.map(({ icon, name, description }) => (
            <article className="service-catalog-card" id={`service-${icon}`} key={icon}>
              <HomeMedia className="service-catalog-photo" slot={servicePhotos[icon]} />
              <div className="service-catalog-copy">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-support" aria-labelledby="supporting-services-title">
        <div className="container">
          <h2 id="supporting-services-title">Site and infrastructure services</h2>
          <ul className="service-support-list">
            {supportingServices.map(({ icon, name, description }) => (
              <li id={`service-${icon}`} key={icon}>
                <MobileIcon name="layers" />
                <div><h3>{name}</h3><p>{description}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
