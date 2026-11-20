import officialLogo from '../../assets/logos/Logotipo Excavations en Amarillo y Cromo.png'

export default function Brand({ footer = false, fullLogo = false, onClick }) {
  if (fullLogo) {
    return (
      <a className="brand" href="#home" onClick={onClick} aria-label="JD Excavation home">
        <img className="brand-lockup" src={officialLogo} alt="" width="1536" height="1024" loading={footer ? 'lazy' : 'eager'} />
      </a>
    )
  }

  return (
    <a className="brand" href="#home" onClick={onClick} aria-label="JD Excavation home">
      <span className="brand-mark" aria-hidden="true">
        <img src={officialLogo} alt="" width="1536" height="1024" loading={footer ? 'lazy' : 'eager'} />
      </span>
      <span className="brand-copy">
        <strong>JD Excavation</strong>
        {footer && <span>Dallas, Texas</span>}
      </span>
    </a>
  )
}

