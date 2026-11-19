import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import WhatsAppButton from './components/ui/WhatsAppButton.jsx'
import HomePage from './pages/HomePage.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <HomePage />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
