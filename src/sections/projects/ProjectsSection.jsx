import HomeMedia from '../../components/common/HomeMedia.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import InterfaceIcon from '../../components/ui/MobileIcon.jsx'
import { featuredProjects } from '../../data/projects.js'
import { projectsPath } from '../../data/site.js'
import './projects.css'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="container">
        <div className="projects-heading">
          <SectionHeading id="projects-title" eyebrow="In the Field">Projects</SectionHeading>
          <a className="projects-view-all text-link" href={projectsPath}>
            <span>View all projects</span> <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="featured-projects">
          {featuredProjects.map(({ title, slot }) => (
            <figure className="featured-project" key={slot} data-project={slot} data-reveal>
              <HomeMedia slot={slot} className="featured-project-media" />
              <figcaption><InterfaceIcon name="pin" /><h3>{title}</h3></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
