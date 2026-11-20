import ContactLinks from '../../components/common/ContactLinks.jsx'
import InterfaceIcon from '../../components/ui/MobileIcon.jsx'
import { contact } from '../../data/site.js'
import './contact.css'

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="container contact-inner" data-reveal>
        <div className="contact-intro">
          <p>Let’s build something solid.</p>
          <h2 id="contact-title">JD Excavation</h2>
          <div className="contact-actions">
            <a className="button button--dark" href={contact.phoneHref}>
              <InterfaceIcon name="phone" /> Call us {contact.phone}
            </a>
            <a className="button button--outline" href={contact.websiteHref}>
              Request a quote <span className="button-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="contact-section-details"><ContactLinks /></div>
      </div>
    </section>
  )
}
