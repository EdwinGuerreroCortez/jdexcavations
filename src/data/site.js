const contactPhone = '469 251 6415'
const contactNumber = `1${contactPhone.replaceAll(' ', '')}`

export const contact = {
  phone: contactPhone,
  phoneHref: `tel:+${contactNumber}`,
  whatsappHref: `https://wa.me/${contactNumber}`,
  quoteLabel: 'Request a free quote',
  website: 'www.jdtunneling.com',
  websiteHref: 'https://www.jdtunneling.com',
  area: 'Dallas, Texas',
}

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'equipment', label: 'Equipment' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const servicesPath = `${import.meta.env.BASE_URL}services/`
export const projectsPath = `${import.meta.env.BASE_URL}projects/`

const pagePaths = { services: servicesPath, projects: projectsPath }

export function navigationHref(id, currentPage) {
  return pagePaths[id] ?? `${currentPage ? import.meta.env.BASE_URL : ''}#${id}`
}

export const equipment = [
  { name: 'JCB Excavators', slot: 'EXCAVATION', description: 'Powerful and versatile excavators for digging, trenching and site work.' },
  { name: 'Vermeer D20x22', slot: 'ABOUT_EQUIPMENT', description: 'Directional drilling equipment for efficient, low-impact utility installation.' },
  { name: 'Construction Equipment' },
]

export const services = [
  { name: 'Directional Boring', icon: 'boring', description: 'Create underground paths for utilities with limited surface disruption.' },
  { name: 'Utility Trenching', icon: 'trenching', description: 'Cut trenches for utility lines, drainage and other underground installations.' },
  { name: 'Excavation', icon: 'excavation', description: 'Remove earth and prepare work areas for commercial and infrastructure construction.' },
  { name: 'Site Preparation', icon: 'site', description: 'Prepare and shape the site for the next phase of construction.' },
  { name: 'Foundation Work', icon: 'foundation', description: 'Prepare foundation excavations and subgrades for construction.' },
  { name: 'Grading', icon: 'grading', description: 'Shape and level ground to meet grade and drainage requirements.' },
  { name: 'Pipe Rehabilitation & Repairs', icon: 'pipe', description: 'Repair and rehabilitate existing underground piping.' },
  { name: 'Water Infrastructure', icon: 'water', description: 'Support underground construction for water lines and related infrastructure.' },
]

