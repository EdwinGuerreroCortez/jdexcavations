import MediaPlaceholder from '../../components/common/MediaPlaceholder.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title" tabIndex={-1}>
      <div className="container about-grid">
        <MediaPlaceholder variant="site" className="about-media">Site photography pending</MediaPlaceholder>
        <div className="about-copy">
          <SectionHeading id="about-title" eyebrow="About Us">Who We Are</SectionHeading>
          <p data-reveal>JD Excavation provides construction and underground infrastructure services, focusing on safety, efficiency and customer commitment.</p>
        </div>
      </div>
    </section>
  )
}

