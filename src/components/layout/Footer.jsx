import Brand from '../common/Brand.jsx'
import ContactLinks from '../common/ContactLinks.jsx'
import { contact, navigation, navigationHref, servicesPath } from '../../data/site.js'
import './footer.css'

const serviceLinks = [
  { id: 'service-boring', label: 'Directional Boring' },
  { id: 'service-trenching', label: 'Trenching' },
  { id: 'service-excavation', label: 'Excavation' },
  { id: 'service-pipe', label: 'Pipe Rehabilitation' },
]

function FooterNavigation({ title, links }) {
  return (
    <nav aria-label={title}>
      <h2>{title}</h2>
      <ul className="footer-links">
        {links.map(({ href, label }) => <li key={href}><a href={href}>{label}</a></li>)}
      </ul>
    </nav>
  )
}

export default function Footer({ currentPage }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Brand footer fullLogo href={navigationHref('home', currentPage)} />
          <p>JD Excavation<br />{contact.area}</p>
        </div>
        <FooterNavigation title="Navigate" links={navigation.map(({ id, label }) => ({ label, href: navigationHref(id, currentPage) }))} />
        <FooterNavigation title="Services" links={serviceLinks.map(({ id, label }) => ({ label, href: `${servicesPath}#${id}` }))} />
        <div className="footer-contact">
          <h2>Contact</h2>
          <ContactLinks />
        </div>
      </div>
    </footer>
  )
}
