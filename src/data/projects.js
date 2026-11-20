import { homeImages } from './homeImages.js'

export const featuredProjects = [
  { title: 'Residential Trenching', slot: 'RESIDENTIAL_TRENCHING' },
  { title: 'Underground Utilities', slot: 'UNDERGROUND_UTILITIES' },
  { title: 'Directional Boring', slot: 'DIRECTIONAL_BORING' },
]

// Add one entry per photo with src, alt, title and an optional caption.
export const projects = []

const featuredPhotos = featuredProjects.map(({ title, slot }) => ({ ...homeImages[slot], title }))
export const galleryPhotos = [...new Map([...featuredPhotos, ...projects].filter(({ src }) => src).map((photo) => [photo.src, photo])).values()]
