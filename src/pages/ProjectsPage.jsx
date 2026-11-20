import HomeMedia from '../components/common/HomeMedia.jsx'
import { galleryPhotos } from '../data/projects.js'
import { contact } from '../data/site.js'
import ProjectGallery from '../sections/projects/ProjectGallery.jsx'
import '../styles/projects-page.css'

export default function ProjectsPage() {
  return (
    <main id="main-content" className="projects-page" tabIndex={-1}>
      <section className="projects-page-hero" aria-labelledby="projects-page-title">
        <div className="container projects-page-intro">
          <div>
            <p className="eyebrow">{contact.area}</p>
            <h1 id="projects-page-title">Our <span>Projects</span></h1>
            <p>Explore our residential trenching, underground utility, and directional boring work in the Dallas area.</p>
          </div>
          <div className="projects-page-hero-photo" aria-hidden="true">
            <HomeMedia slot="UNDERGROUND_UTILITIES" priority />
          </div>
        </div>
      </section>

      <section className="container projects-page-gallery" aria-labelledby="project-gallery-title">
        <h2 id="project-gallery-title">Project gallery</h2>
        <ProjectGallery photos={galleryPhotos} />
        <div className="projects-page-quote">
          <a className="text-link" href={contact.whatsappHref}>
            <span>{contact.quoteLabel}</span><span className="button-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}
