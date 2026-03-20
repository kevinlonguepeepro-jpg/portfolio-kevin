import { useState } from 'react'
import projectsData from '../data/projects.json'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const ref = useScrollReveal()
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <p className="section__label">Projets</p>
        <h2 className="section__title">{projectsData.subtitle}</h2>

        <div className="projects__grid">
          {projectsData.items.map((project) => (
            <div
              key={project.id}
              className={`projects__card ${hovered === project.id ? 'projects__card--hovered' : ''}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => project.images?.length > 0 && setSelected(project)}
              style={{ cursor: project.images?.length > 0 ? 'pointer' : 'default' }}
            >
              <div className="projects__image">
                {project.cover ? (
                  <img src={project.cover} alt={project.title} />
                ) : (
                  <div className="projects__image-placeholder">
                    <span>{project.category}</span>
                  </div>
                )}
              </div>
              <div className="projects__info">
                <p className="projects__category">{project.category}</p>
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                <div className="projects__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="projects__tag">{tag}</span>
                  ))}
                </div>
                {project.images?.length > 0 && (
                  <p className="projects__cta">Voir le projet →</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
