import { contact } from '../../data/site.js'

const heroImageUrl = 'https://ucdf80facb98278312fdaa1156ab.previews.dropboxusercontent.com/p/thumb/ADQPT6SVnPSwO-SJgqaBi8f9Q7eNj-JVNqTFS6j5B2LwIxnEn2Y_wXM7hS2Yk3zmUun9Jz4sqms7o_gzpJqg50WYSUQHWAuglQA4YEykXVxKGwUx5QUHZ4kI6HgiXCwNihL3qrSorS7A-YguHrdDtFVWDI7Nb27V76rtNoX7NTAHlE0S6xL-jph1AEvi47fcp3zjGhzJSGyZxBR7_Q9fOfPi92LSPHOw2g3F6Qpe9b9aNyZmsWS7LVNi6sSWmyGsHNIEeWqEOO5EbOWtgGR2ovDV-o4fv6tMzxd2AA0Pv_UgCHwpMlI1LSZKl3UzpI1Y25k1SdTKvtrc9crKjLxj_56wW85wBGhBCDc0CAIcLuQPXvzXHo_yxlaqTuE01sMCZJY/p.png?is_prewarmed=true'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-photo">
          <img src={heroImageUrl} width="1680" height="945" alt="" fetchPriority="high" decoding="async" />
        </div>
        <div className="hero-contours" />
      </div>
      <div className="container hero-inner">
        <p className="eyebrow hero-enter">Dallas, Texas</p>
        <h1 id="hero-title">
          <span>Professional</span>{' '}
          <span>Excavation &amp;</span>{' '}
          <span>Tunneling Services.</span>
        </h1>
        <p className="hero-tagline hero-enter">Safety. Efficiency. Commitment.</p>
        <p className="hero-description hero-enter">Reliable construction, excavation and underground utility services for commercial and infrastructure projects.</p>
        <div className="button-group">
          <a className="button button--yellow hero-enter" href="#contact">
            Request a Quote <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="button button--outline hero-enter" href={contact.phoneHref}>
            Call Us <span className="hero-phone">{contact.phone}</span>
          </a>
        </div>
      </div>
      <div className="hero-stripe" aria-hidden="true" />
    </section>
  )
}
