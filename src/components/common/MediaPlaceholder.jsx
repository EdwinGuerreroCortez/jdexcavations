export default function MediaPlaceholder({ children, variant, className = '' }) {
  return (
    <div className={`media-placeholder media-placeholder--${variant} ${className}`} data-reveal>
      {children && <span>{children}</span>}
    </div>
  )
}

