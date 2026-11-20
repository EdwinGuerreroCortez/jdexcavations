import { useEffect, useRef, useState } from 'react'
import CatalogDialog from '../../components/common/CatalogDialog.jsx'
import HomeMedia from '../../components/common/HomeMedia.jsx'
import InterfaceIcon from '../../components/ui/MobileIcon.jsx'
import { contact } from '../../data/site.js'
import './coverage.css'

const counties = [
  'Dallas County', 'Rockwall County', 'Tarrant County', 'Kaufman County',
  'Collin County', 'Ellis County', 'Denton County', 'Johnson County',
]

const projectTypes = [
  'Commercial', 'Municipal', 'Infrastructure', 'Underground Services',
  'Site Preparation', 'Civil Construction',
]

function DallasSkyline() {
  return (
    <svg className="coverage-skyline" viewBox="0 0 452 122" fill="currentColor" aria-hidden="true">
      <path d="M8 113h13v-8h7v-9h10v-7h10v5h11V75h8V62l9-10 9 10v15h12V58l7-8 7 8v25h10V60h9V48l9-12 9 12v29h10V50l9-9V28h2v13l10 9v31h9V63l8-9 8 9v25h9V46l9-10V22h2v14l10 10v48h7V20h6v-8h10V4h2v8h9v8h6v77h8V43l10-9h10l11 9v56h10V61l8-6v-7h2v7l9 6v39h10V79l8-11v-9h2v9l10 11v34h17v4H8Z" />
      <circle cx="104" cy="42" r="13" />
      <path d="M101 53h6v60h-6zM317 103h130v3H317zM321 113h123v3H321zM381 52h4v65h-4zM397 54h4v63h-4zM379 47h8v8h-8zM395 49h8v8h-8z" />
      <path d="m383 55-66 48m66-44-56 44m56-40-45 40m45-36-33 36m33-32-22 32m38-49 48 49m-48-45 40 45m-40-41 32 41m-32-37 24 37m-24-33 16 33" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 117h452v2H0Z" />
    </svg>
  )
}

function OptionList({ items, onSelect }) {
  return (
    <ul className="coverage-options">
      {items.map((label) => (
        <li key={label}>
          <button type="button" aria-haspopup="dialog" onClick={() => onSelect(label)}>
            <span>{label}</span><span className="coverage-option-arrow" aria-hidden="true">→</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default function CoverageSection() {
  const dialog = useRef(null)
  const [selection, setSelection] = useState(null)

  useEffect(() => {
    if (selection && !dialog.current.open) dialog.current.showModal()
  }, [selection])

  return (
    <section id="coverage" className="coverage-section" aria-label="Service area and project types">
      <div className="coverage-container">
        <div className="coverage-grid">
          <div className="coverage-panel coverage-panel--counties" data-reveal>
            <div className="coverage-panel-heading">
              <InterfaceIcon name="mapPin" />
              <h2>Counties near<br />Dallas, TX</h2>
              <span className="coverage-count">{counties.length} counties</span>
            </div>
            <OptionList items={counties} onSelect={(label) => setSelection({ label, isCounty: true })} />
            <div className="coverage-location">
              <DallasSkyline />
              <p><span>Serving Dallas<br />and surrounding counties</span></p>
            </div>
          </div>
          <div className="coverage-panel coverage-panel--projects" data-reveal>
            <div className="coverage-panel-heading">
              <InterfaceIcon name="hardhat" />
              <h2>Your project type</h2>
              <span className="coverage-count">{projectTypes.length} categories</span>
            </div>
            <OptionList items={projectTypes} onSelect={(label) => setSelection({ label, isCounty: false })} />
            <HomeMedia slot="EXCAVATION" className="coverage-photo" />
          </div>
        </div>
        <div className="coverage-cta" data-reveal>
          <div className="coverage-cta-title"><InterfaceIcon name="hardhat" /><h2>Ready to start your project?</h2></div>
          <p>Tell us what you need and get a free quote.</p>
          <a className="button button--yellow coverage-quote" href={contact.whatsappHref}>{contact.quoteLabel} <InterfaceIcon name="arrow" /></a>
        </div>
      </div>
      <CatalogDialog dialogRef={dialog} title={selection?.label ?? contact.quoteLabel} onClose={() => setSelection(null)}>
        <p className="coverage-dialog-copy">
          {selection?.isCounty
            ? 'Share your job site address and the work you need so we can prepare your quote.'
            : 'Tell us where the project is and what you need done so we can prepare your quote.'}
        </p>
        <a className="button button--yellow coverage-quote" href={contact.whatsappHref}>{contact.quoteLabel} <InterfaceIcon name="arrow" /></a>
      </CatalogDialog>
    </section>
  )
}
