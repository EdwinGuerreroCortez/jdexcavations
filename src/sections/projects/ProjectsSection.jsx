import MediaPlaceholder from '../../components/common/MediaPlaceholder.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading id="projects-title" description="Project photography pending.">Projects</SectionHeading>
        <div className="project-grid" aria-hidden="true">
          <MediaPlaceholder variant="bore" />
          <MediaPlaceholder variant="grid" />
          <MediaPlaceholder variant="site" />
        </div>
      </div>
    </section>
  )
}

