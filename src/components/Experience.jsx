import experienceData from '../data/experience.json'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section className="experience section section--dark" id="experience" ref={ref}>
      <div className="container">
        <p className="section__label">Parcours</p>
        <h2 className="section__title">{experienceData.subtitle}</h2>

        <div className="experience__columns">

          {/* Expériences pro */}
          <div className="experience__col">
            <h3 className="experience__col-title">Expériences</h3>
            <div className="experience__timeline">
              {experienceData.experiences.map((item, i) => (
                <div key={i} className="experience__item">
                  <div className="experience__meta">
                    <span className="experience__period">{item.period}</span>
                    <span className="experience__type">{item.type}</span>
                  </div>
                  <h4 className="experience__title">{item.title}</h4>
                  <p className="experience__org">{item.organization}</p>
                  <p className="experience__desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formation + Certifications */}
          <div className="experience__col">
            <h3 className="experience__col-title">Formation</h3>
            <div className="experience__timeline">
              {experienceData.formations.map((item, i) => (
                <div key={i} className="experience__item experience__item--formation">
                  <span className="experience__period">{item.period}</span>
                  <h4 className="experience__title">{item.title}</h4>
                  <p className="experience__org">{item.organization}</p>
                </div>
              ))}
            </div>

            <h3 className="experience__col-title experience__col-title--spaced">Certifications</h3>
            <div className="experience__certs">
              {experienceData.certifications.map((cert, i) => (
                <div key={i} className="experience__cert">
                  <span className="experience__cert-title">{cert.title}</span>
                  <span className="experience__cert-detail">{cert.detail}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
