import HomeMedia from '../../components/common/HomeMedia.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-art" aria-hidden="true">
        <HomeMedia slot="HERO_BACKGROUND" className="hero-photo" priority />
      </div>
      <div className="container hero-inner">
        <p className="eyebrow hero-enter">Dallas, Texas · Excavation &amp; Utilities</p>
        <h1 id="hero-title" className="hero-enter">
          <span>Built below.</span>
          <span>Built to last.</span>
        </h1>
        <p className="hero-description hero-enter">Precision excavation. Reliable underground solutions.</p>
        <div className="hero-actions hero-enter">
          <a className="button button--yellow" href="#contact">
            Start your project <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#services">
            <span>Explore our services</span> <span className="button-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
