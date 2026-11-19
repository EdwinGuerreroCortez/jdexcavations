import Brand from '../common/Brand.jsx'
import { contact, navigation, services } from '../../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand lazy />
            <p>JD Excavation</p>
            <p>{contact.area}</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Navigate</h2>
            <ul>
              {navigation.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
            </ul>
          </nav>
          <div>
            <h2>Services</h2>
            <ul>
              {services.slice(0, 4).map(({ name, icon }) => <li key={icon}><a href={`#service-${icon}`}>{name}</a></li>)}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={contact.websiteHref}>{contact.website}</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-legal">© {new Date().getFullYear()} JD Excavation. All rights reserved.</p>
      </div>
    </footer>
  )
}

