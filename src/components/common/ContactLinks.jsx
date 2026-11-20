import InterfaceIcon from '../ui/MobileIcon.jsx'
import { contact } from '../../data/site.js'
import './contact-links.css'

export default function ContactLinks() {
  return (
    <ul className="contact-links" aria-label="Contact details">
      <li><InterfaceIcon name="phone" /><a href={contact.phoneHref}>{contact.phone}</a></li>
      <li><InterfaceIcon name="globe" /><a href={contact.websiteHref}>{contact.website}</a></li>
      <li><InterfaceIcon name="pin" /><span>{contact.area}</span></li>
    </ul>
  )
}
