export default function SectionHeading({ id, children, eyebrow, description }) {
  return (
    <div className="section-heading" data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

