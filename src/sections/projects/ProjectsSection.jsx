import { useEffect, useRef, useState } from 'react'
import HomeMedia from '../../components/common/HomeMedia.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import { projects } from '../../data/projects.js'
import ProjectGallery from './ProjectGallery.jsx'
import './projects.css'

const initialVisibleCount = 3
const featuredProjects = [
  { title: 'Underground utilities', slot: 'UNDERGROUND_UTILITIES' },
  { title: 'Residential trenching', slot: 'RESIDENTIAL_TRENCHING' },
]

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false)
  const toggleRef = useRef(null)
  const total = projects.length
  const visibleCount = expanded ? total : Math.min(total, initialVisibleCount)

  useEffect(() => {
    const toggle = toggleRef.current
    if (!expanded && toggle && document.activeElement === toggle) {
      toggle.scrollIntoView({ block: 'nearest', behavior: 'instant' })
    }
  }, [expanded])

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading id="projects-title">The work <span className="accent">speaks.</span></SectionHeading>
        <div className="featured-projects">
          {featuredProjects.map(({ title, slot }) => (
            <figure className="featured-project" key={slot} data-project={slot} data-reveal>
              <HomeMedia slot={slot} className="featured-project-media" />
              <figcaption>
                <h3>{title}</h3>
                <p>Dallas, TX</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {total > 0 && (
          <div className="project-gallery">
            <div id="project-gallery-items">
              <ProjectGallery photos={projects} visibleCount={visibleCount} />
            </div>
            {total > initialVisibleCount && (
              <div className="project-gallery-footer">
                <p>Showing {visibleCount} of {total}</p>
                <button
                  type="button"
                  className="button button--outline project-gallery-toggle"
                  ref={toggleRef}
                  aria-expanded={expanded}
                  aria-controls="project-gallery-items"
                  onClick={() => setExpanded((current) => !current)}
                >
                  {expanded ? 'View Less' : 'View More'}
                  <span aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
