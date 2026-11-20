import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import { useSyncExternalStore } from 'react'
import WhatsAppButton from './components/ui/WhatsAppButton.jsx'
import HomePage from './pages/HomePage.jsx'
import MobileHome from './pages/MobileHome.jsx'
import './App.css'

const mobileQuery = '(max-width: 640px)'

function subscribeToViewport(onChange) {
  const viewport = window.matchMedia(mobileQuery)
  viewport.addEventListener('change', onChange)
  return () => viewport.removeEventListener('change', onChange)
}

function isMobileViewport() {
  return window.matchMedia(mobileQuery).matches
}

export default function App() {
  const isMobile = useSyncExternalStore(subscribeToViewport, isMobileViewport)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      {isMobile ? <MobileHome /> : (
        <>
          <Header />
          <HomePage />
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  )
}
