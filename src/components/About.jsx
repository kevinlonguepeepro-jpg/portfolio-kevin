import aboutData from '../data/about.json'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <p className="section__label">À propos</p>
            <h2 className="section__title">Design, photo<br />& communication.</h2>
            {aboutData.bio.map((paragraph, i) => (
              <p key={i} className="about__paragraph">{paragraph}</p>
            ))}
            {aboutData.adobePortfolio && (
              <a
                href={aboutData.adobePortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Voir le portfolio Adobe ↗
              </a>
            )}
          </div>

          <div className="about__side">
            {aboutData.photo && (
              <div className="about__photo-wrapper">
                <img src={aboutData.photo} alt="Kevin Longuepée" className="about__photo" />
              </div>
            )}
            <div className="about__stats">
              {aboutData.stats.map((stat, i) => (
                <div key={i} className="about__stat">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
