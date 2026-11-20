import { useRef, useState } from 'react'
import Brand from '../common/Brand.jsx'
import MobileIcon from '../ui/MobileIcon.jsx'
import { contact, navigationHref } from '../../data/site.js'

const tabs = [
  { id: 'home', title: 'Home', icon: 'home' },
  { id: 'services', title: 'Services', icon: 'grid' },
  { id: 'equipment', title: 'Fleet', icon: 'fleet' },
  { id: 'projects', title: 'Projects', icon: 'hardhat' },
  { id: 'contact', title: 'Contact', icon: 'mail' },
]

export function MobileHeader({ currentPage }) {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)

  function closeMenu() {
    setOpen(false)
  }

  function closeOnEscape(event) {
    if (open && event.key === 'Escape') {
      closeMenu()
      menuButton.current.focus()
    }
  }

  return (
    <header className="mobile-header" onKeyDown={closeOnEscape}>
      <Brand name="JD Excavations" href={navigationHref('home', currentPage)} onClick={closeMenu} />
      <a className="mobile-header-phone" href={contact.phoneHref} aria-label="Call JD Excavation"><MobileIcon name="phone" /></a>
      <button
        className="mobile-icon-button"
        type="button"
        ref={menuButton}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <MobileIcon name={open ? 'close' : 'menu'} />
      </button>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Main navigation" hidden={!open}>
        {tabs.map(({ id, title }) => (
          <a key={id} href={navigationHref(id, currentPage)} aria-current={currentPage === id ? 'page' : undefined} onClick={closeMenu}>{title}</a>
        ))}
        <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </nav>
    </header>
  )
}

export function MobileTabBar({ activeSection, onNavigate, currentPage }) {
  return (
    <nav aria-label="Mobile navigation" className="mobile-tab-bar">
      {tabs.map(({ id, title, icon }) => {
        const href = navigationHref(id, currentPage)
        const isSectionLink = href.startsWith('#')
        const isCurrentSection = isSectionLink && activeSection === id

        return (
          <a
            key={id}
            href={href}
            aria-current={currentPage === id ? 'page' : isCurrentSection ? 'location' : undefined}
            onClick={isSectionLink && onNavigate ? () => onNavigate(id) : undefined}
          ><MobileIcon name={icon} /><span>{title}</span></a>
        )
      })}
    </nav>
  )
}
