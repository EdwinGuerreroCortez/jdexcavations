import { homeImages } from '../../data/homeImages.js'
import MediaPlaceholder from './MediaPlaceholder.jsx'

export default function HomeMedia({ slot, className = '', priority = false }) {
  const { src, mobileSrc, alt, variant } = homeImages[slot]

  if (!src) return <MediaPlaceholder variant={variant} className={className} />

  return (
    <picture className={`home-media ${className}`}>
      {mobileSrc && <source media="(max-width: 640px)" srcSet={mobileSrc} />}
      <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async" />
    </picture>
  )
}
