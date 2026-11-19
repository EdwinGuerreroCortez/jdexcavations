import officialLogo from '../../assets/logos/Logotipo Excavations en Amarillo y Cromo.png'
import compactLogo from '../../assets/logos/jd-excavation-logo-384.jpg'

export default function Brand({ lazy = false, onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick}>
      <picture>
        <source type="image/jpeg" srcSet={compactLogo} />
        <img src={officialLogo} alt="JD Excavation — Home" width="384" height="256" loading={lazy ? 'lazy' : 'eager'} />
      </picture>
    </a>
  )
}

