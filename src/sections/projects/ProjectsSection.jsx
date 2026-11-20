import { useRef } from 'react'
import CatalogDialog from '../../components/common/CatalogDialog.jsx'
import HomeMedia from '../../components/common/HomeMedia.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import InterfaceIcon from '../../components/ui/MobileIcon.jsx'
import { homeImages } from '../../data/homeImages.js'
import { projects } from '../../data/projects.js'
import ProjectGallery from './ProjectGallery.jsx'
import './projects.css'

const featuredProjects = [
  { title: 'Residential Trenching', slot: 'RESIDENTIAL_TRENCHING' },
  { title: 'Underground Utilities', slot: 'UNDERGROUND_UTILITIES' },
  { title: 'Directional Boring', slot: 'DIRECTIONAL_BORING' },
]

const featuredPhotos = featuredProjects.map(({ title, slot }) => ({ ...homeImages[slot], title }))
const galleryPhotos = [...new Map([...featuredPhotos, ...projects].map((photo) => [photo.src, photo])).values()]

export default function ProjectsSection() {
  const allProjects = useRef(null)

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="container">
        <div className="projects-heading">
          <SectionHeading id="projects-title" eyebrow="Projects">Projects</SectionHeading>
          <button className="projects-view-all text-link" type="button" aria-haspopup="dialog" onClick={() => allProjects.current.showModal()}>
            <span>View all projects</span> <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="featured-projects">
          {featuredProjects.map(({ title, slot }) => (
            <figure className="featured-project" key={slot} data-project={slot} data-reveal>
              <HomeMedia slot={slot} className="featured-project-media" />
              <figcaption><InterfaceIcon name="pin" /><h3>{title}</h3></figcaption>
            </figure>
          ))}
        </div>
        <CatalogDialog dialogRef={allProjects} title="All projects">
          <ProjectGallery photos={galleryPhotos} visibleCount={galleryPhotos.length} />
        </CatalogDialog>
      </div>
    </section>
  )
}
