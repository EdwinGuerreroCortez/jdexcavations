import { useState } from 'react'
import { contact } from '../../data/site.js'
import './WhatsAppButton.css'

const buttonImageUrl = 'https://uc7ae321c6b2c876bbf3f33a0da5.previews.dropboxusercontent.com/p/thumb/ADRL_czDBeJV6CqARePA-hWWqro87pV3ommzcb9WgqLd8Sl8DySAQu6cp_JObEbpxYrvTTdRpe6wT4DD810tXYYn2ymq3IxQ9A-D0FAONb4LSkc5yP74owKJ6FimgMA-b6tvq5eUABwccLADdoo2hNFo8MsAJ0NhvDKA77qElpGBwEDWMkvQTDynCqkC0iPU2VrweEPwG9LYtX07NYg2KG1pQY-ho_ETCosHmEzftBrVCBrAqp6kU9mc0GbF72u905CtdVXUIMTe7ADazCpn9CQ5LbsAcH0zkPA3D0Vxigp3HmcCggdL7P12mMkfMN_yEEsomplH4SKf-yQtEfLwogbzVGR9W8DhCCi34BOlE7YYU3rZZjWA-31wAvAM5RWUThaCon5xp3LoReNSz7zz3GWP/p.png?is_prewarmed=true'

export default function WhatsAppButton() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <a
      className="whatsapp-button"
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JD Excavation on WhatsApp"
    >
      {imageFailed
        ? <span aria-hidden="true">WA</span>
        : <img src={buttonImageUrl} alt="" width="64" height="64" decoding="async" onError={() => setImageFailed(true)} />}
    </a>
  )
}
