import SectionHeading from '../../components/common/SectionHeading.jsx'
import { contact } from '../../data/site.js'

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="container contact-grid">
        <div>
          <SectionHeading id="contact-title" eyebrow="Contact">JD Excavation</SectionHeading>
          <div className="button-group" data-reveal>
            <a className="button button--dark" href={contact.phoneHref}>Call Us <span className="button-arrow" aria-hidden="true">↗</span></a>
            <a className="button button--outline" href={contact.websiteHref}>Contact via Website <span className="button-arrow" aria-hidden="true">↗</span></a>
          </div>
        </div>
        <dl className="contact-details" data-reveal>
          <div><dt>Phone</dt><dd><a href={contact.phoneHref}>{contact.phone}</a></dd></div>
          <div><dt>Website</dt><dd><a href={contact.websiteHref}>{contact.website}</a></dd></div>
          <div><dt>Service Area</dt><dd>{contact.area}</dd></div>
        </dl>
      </div>
    </section>
  )
}

