import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0)

  const images = project.images || []
  const total = images.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [current])

  return createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <button className="modal__close" onClick={onClose} aria-label="Fermer">✕</button>

        <div className="modal__header">
          <p className="modal__category">{project.category}</p>
          <h2 className="modal__title">{project.title}</h2>
          <p className="modal__description">{project.description}</p>
          <div className="modal__tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="projects__tag">{tag}</span>
            ))}
          </div>
        </div>

        {total > 0 && (
          <div className="modal__gallery">
            <div className="modal__image-wrapper">
              <img
                key={current}
                src={images[current]}
                alt={`${project.title} — visuel ${current + 1}`}
                className="modal__image"
              />
            </div>

            {total > 1 && (
              <>
                <button className="modal__nav modal__nav--prev" onClick={prev} aria-label="Précédent">‹</button>
                <button className="modal__nav modal__nav--next" onClick={next} aria-label="Suivant">›</button>

                <div className="modal__dots">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      className={`modal__dot ${i === current ? 'modal__dot--active' : ''}`}
                      onClick={() => setCurrent(i)}
                      aria-label={`Image ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="modal__thumbnails">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      className={`modal__thumb ${i === current ? 'modal__thumb--active' : ''}`}
                      onClick={() => setCurrent(i)}
                    >
                      <img src={img} alt={`Miniature ${i + 1}`} />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

      </div>
    </div>,
    document.body
  )
}
