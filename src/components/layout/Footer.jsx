import Brand from '../common/Brand.jsx'
import { navigation } from '../../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Brand footer />
        <nav aria-label="Footer navigation">
          <ul>
            {navigation.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
