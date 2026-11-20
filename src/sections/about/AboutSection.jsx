import HomeMedia from '../../components/common/HomeMedia.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import AboutIllustration from './AboutIllustration.jsx'

const values = [
  { icon: 'safety', label: 'Safety', continuation: 'focused' },
  { icon: 'commitment', label: 'Project', continuation: 'commitment' },
  { icon: 'location', label: 'Dallas, TX', detail: 'Service Area' },
]

export default function AboutSection() {
  return (
    <section id="about" className="company-about section" aria-labelledby="about-title" tabIndex={-1}>
      <div className="company-about-backdrop" aria-hidden="true">
        <HomeMedia slot="HERO_BACKGROUND" className="company-about-background" />
      </div>
      <div className="container company-about-grid">
        <div className="company-about-visual" data-reveal>
          <div className="company-about-photo-stage">
            <div className="company-about-frame">
              <HomeMedia slot="UNDERGROUND_UTILITIES" className="company-about-photo" />
            </div>
          </div>
        </div>
        <div className="company-about-copy">
          <SectionHeading
            id="about-title"
            eyebrow="About Us"
            description="JD Excavation provides construction and underground infrastructure services, focusing on safety, efficiency and customer commitment."
          >
            Who We <span className="accent">Are</span>
          </SectionHeading>
          <ul className="company-about-values" data-reveal>
            {values.map(({ icon, label, continuation, detail }) => (
              <li key={icon}>
                <AboutIllustration name={icon} />
                <div className="company-about-label">
                  <strong>{label}{continuation && <><br />{continuation}</>}</strong>
                  {detail && <span>{detail}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
