import Brand from '../common/Brand.jsx'

import { navigation } from '../../data/site.js'

export default function Header() {
  return (
    <header className="site-header site-header--desktop">
      <div className="container header-inner">
        <Brand fullLogo />
        <nav className="main-navigation" aria-label="Main navigation">
          <ul>
            {navigation.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
          <a className="button button--yellow header-quote" href="#contact">
            Request a quote <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
