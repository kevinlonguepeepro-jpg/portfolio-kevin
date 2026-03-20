import skillsData from '../data/skills.json'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section className="skills section section--dark" id="skills" ref={ref}>
      <div className="container">
        <p className="section__label">Compétences</p>
        <h2 className="section__title">{skillsData.subtitle}</h2>

        <div className="skills__grid">
          {skillsData.categories.map((cat, i) => (
            <div key={i} className="skills__card">
              <span className="skills__icon">{cat.icon}</span>
              <h3 className="skills__category">{cat.name}</h3>
              <ul className="skills__list">
                {cat.skills.map((skill, j) => (
                  <li key={j}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
