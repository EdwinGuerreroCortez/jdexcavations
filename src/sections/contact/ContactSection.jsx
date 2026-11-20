import { contact } from '../../data/site.js'

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="container contact-inner" data-reveal>
        <h2 id="contact-title">Let’s build<br />something solid.</h2>
        <a className="button button--dark quote-button" href={contact.websiteHref}>
          Request a quote <span className="button-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
