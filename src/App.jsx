import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import { MobileHeader, MobileTabBar } from './components/layout/MobileNavigation.jsx'
import { useSyncExternalStore } from 'react'
import WhatsAppButton from './components/ui/WhatsAppButton.jsx'
import HomePage from './pages/HomePage.jsx'
import MobileHome from './pages/MobileHome.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import './App.css'
import './styles/desktop-home.css'

const mobileQuery = '(max-width: 640px)'
const catalogs = { services: ServicesPage, projects: ProjectsPage }

function subscribeToViewport(onChange) {
  const viewport = window.matchMedia(mobileQuery)
  viewport.addEventListener('change', onChange)
  return () => viewport.removeEventListener('change', onChange)
}

function isMobileViewport() {
  return window.matchMedia(mobileQuery).matches
}

export default function App({ page }) {
  const isMobile = useSyncExternalStore(subscribeToViewport, isMobileViewport)
  const CatalogPage = catalogs[page]
  const currentPage = CatalogPage ? page : undefined
  const Page = CatalogPage ?? HomePage

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      {isMobile ? (CatalogPage ? (
        <div className="mobile-site">
          <MobileHeader currentPage={currentPage} />
          <CatalogPage />
          <Footer currentPage={currentPage} />
          <MobileTabBar currentPage={currentPage} />
        </div>
      ) : <MobileHome />) : (
        <>
          <Header currentPage={currentPage} />
          <Page />
          <Footer currentPage={currentPage} />
          <WhatsAppButton />
        </>
      )}
    </>
  )
}
