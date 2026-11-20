import { useEffect, useRef, useState } from 'react'

export default function ProjectGallery({ photos, visibleCount }) {
  const dialogRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null)
  const activePhoto = activeIndex === null ? null : photos[activeIndex]
  const canBrowse = photos.length > 1

  useEffect(() => {
    const dialog = dialogRef.current
    if (activeIndex !== null && !dialog.open) dialog.showModal()
  }, [activeIndex])

  function movePhoto(direction) {
    setActiveIndex((index) => (index + direction + photos.length) % photos.length)
  }

  function handleKeyDown(event) {
    if (!canBrowse || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return

    event.preventDefault()
    movePhoto(event.key === 'ArrowLeft' ? -1 : 1)
  }

  return (
    <>
      <ul className="project-grid">
        {photos.map(({ src, alt, title, caption }, index) => (
          <li key={src} hidden={index >= visibleCount} data-reveal>
            <button
              className="project-card"
              type="button"
              aria-haspopup="dialog"
              aria-label={`View photo: ${title}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="project-card-image">
                <img src={src} alt={alt} loading="lazy" decoding="async" />
              </span>
              <span className="project-card-copy">
                <span className="project-card-title">{title}</span>
                {caption && <span className="project-card-caption">{caption}</span>}
              </span>
              <span className="project-card-open" aria-hidden="true">↗</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="project-viewer"
        aria-labelledby="project-viewer-title"
        onClose={() => setActiveIndex(null)}
        onKeyDown={handleKeyDown}
      >
        <div className="project-viewer-header">
          <h3 id="project-viewer-title">{activePhoto?.title}</h3>
          <button type="button" className="project-viewer-control" onClick={() => dialogRef.current.close()}>
            Close
          </button>
        </div>
        {activePhoto && (
          <>
            <img className="project-viewer-image" src={activePhoto.src} alt={activePhoto.alt} />
            {activePhoto.caption && <p className="project-viewer-caption">{activePhoto.caption}</p>}
          </>
        )}
        {canBrowse && (
          <div className="project-viewer-navigation">
            <button type="button" className="project-viewer-control" onClick={() => movePhoto(-1)}>Previous</button>
            <span aria-live="polite">{activeIndex !== null && `${activeIndex + 1} / ${photos.length}`}</span>
            <button type="button" className="project-viewer-control" onClick={() => movePhoto(1)}>Next</button>
          </div>
        )}
      </dialog>
    </>
  )
}
