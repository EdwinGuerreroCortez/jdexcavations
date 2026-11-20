export default function MediaPlaceholder({ variant = 'site', className = '' }) {
  return (
    <span className={`media-placeholder media-placeholder--${variant} ${className}`} aria-hidden="true" />
  )
}

