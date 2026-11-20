import Brand from '../common/Brand.jsx'

import { contact, navigation, navigationHref } from '../../data/site.js'

export default function Header({ currentPage }) {
  return (
    <header className="site-header site-header--desktop">
      <div className="container header-inner">
        <Brand fullLogo href={navigationHref('home', currentPage)} />
        <nav className="main-navigation" aria-label="Main navigation">
          <ul>
            {navigation.map(({ id, label }) => (
              <li key={id}>
                <a href={navigationHref(id, currentPage)} aria-current={currentPage === id ? 'page' : undefined}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="button button--yellow header-quote" href={contact.whatsappHref}>
            {contact.quoteLabel} <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
