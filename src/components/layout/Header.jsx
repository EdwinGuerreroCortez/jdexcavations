import { useRef, useState } from 'react'
import Brand from '../common/Brand.jsx'
import { navigation } from '../../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef(null)

  function closeOnEscape(event) {
    if (open && event.key === 'Escape') {
      setOpen(false)
      toggle.current.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <div className="container header-inner">
        <Brand onClick={() => setOpen(false)} />
        <button
          type="button"
          className="menu-toggle"
          ref={toggle}
          aria-controls="main-navigation"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="main-navigation" className="main-navigation" data-open={open} aria-label="Main navigation">
          <ul>
            {navigation.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
            ))}
          </ul>
          <a className="button button--yellow header-quote" href="#contact" onClick={() => setOpen(false)}>
            Get a quote
          </a>
        </nav>
      </div>
    </header>
  )
}

