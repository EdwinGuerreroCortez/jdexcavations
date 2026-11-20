import Brand from '../common/Brand.jsx'
import ContactLinks from '../common/ContactLinks.jsx'
import { contact, navigation } from '../../data/site.js'
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
        {links.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Brand footer fullLogo />
          <p>JD Excavation<br />{contact.area}</p>
        </div>
        <FooterNavigation title="Navigate" links={navigation} />
        <FooterNavigation title="Services" links={serviceLinks} />
        <div className="footer-contact">
          <h2>Contact</h2>
          <ContactLinks />
        </div>
      </div>
    </footer>
  )
}
