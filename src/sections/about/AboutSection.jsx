import HomeMedia from '../../components/common/HomeMedia.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import EquipmentSection from '../equipment/EquipmentSection.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title" tabIndex={-1}>
      <div className="container">
        <div className="about-grid">
          <div data-reveal>
            <HomeMedia slot="ABOUT_EQUIPMENT" className="about-media" />
          </div>
          <div className="about-copy">
            <SectionHeading id="about-title">The right team.<br />The right equipment.</SectionHeading>
            <p>A dedicated crew and a modern, reliable fleet built for excavation, tunneling and underground utility construction in Dallas, Texas.</p>
            <EquipmentSection />
          </div>
        </div>
      </div>
    </section>
  )
}
