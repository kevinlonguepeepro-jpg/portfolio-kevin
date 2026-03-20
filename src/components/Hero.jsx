import heroData from '../data/hero.json'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (el) {
      setTimeout(() => el.classList.add('hero--visible'), 100)
    }
  }, [])

  const taglineLines = heroData.tagline.split('\n')

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero__content">
        <p className="hero__eyebrow">Portfolio</p>
        <h1 className="hero__name">
          {taglineLines.map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <p className="hero__subtitle">{heroData.subtitle}</p>
        <div className="hero__ctas">
          <a href="#projects" className="btn btn--primary">{heroData.cta}</a>
          <a href="#contact" className="btn btn--ghost">{heroData.ctaSecondary}</a>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span />
      </div>
    </section>
  )
}
