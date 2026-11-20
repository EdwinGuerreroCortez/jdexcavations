import { useState } from 'react'
import { contact } from '../../data/site.js'
import './WhatsAppButton.css'

const buttonImageUrl = 'https://www.dropbox.com/scl/fi/a9jv5li2k7yfugbw8u489/nne11-4c2916fe-135b-4995-95dc-cac1a1751b8d.png?rlkey=vhuvygt3oig6yhks2fimzyr8v&st=dgqzbc9b&raw=1'

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
