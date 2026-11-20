const excavatorImage = 'https://www.dropbox.com/scl/fi/pdd80b6e2a8mxv8um75mx/fondo_excavadora_jd_excavations.webp?rlkey=a3k7neqbzay8j6lcsfl8fpym1&st=urkn6m9v&raw=1'
const trenchImage = 'https://www.dropbox.com/scl/fi/kxyjkfa41ssz9pos6cny7/WhatsApp-Image-2026-11-19-at-12.38.43-PM.jpeg?rlkey=myllxrvp3kl563qx2rbm9z8ua&st=g38hl2k9&raw=1'
const vermeerImage = 'https://www.dropbox.com/scl/fi/48uu2pjw7872gahg6kfdh/Perforadora-Vermeer-y-trabajador-de-seguridad.png?rlkey=jqeygbi5qqkmwaf805trg7e6w&st=1275s8wh&raw=1'

// Replace src (and mobileSrc where applicable) with the final image URLs.
// A null src displays the placeholder for that slot.
export const homeImages = {
  HERO_BACKGROUND: { src: excavatorImage, alt: '' },
  DIRECTIONAL_BORING: {
    src: vermeerImage,
    alt: 'Vermeer D20x22 directional boring machine at a job site',
  },
  EXCAVATION: { src: excavatorImage, alt: 'JCB excavator on a dirt job site at sunset' },
  UTILITY_TRENCHING: {
    src: trenchImage,
    alt: 'Open utility trench marked with yellow caution tape in a front yard',
  },
  UNDERGROUND_UTILITIES: {
    src: 'https://www.dropbox.com/scl/fi/o2wuhyee8uh8bjr1h3xpv/WhatsApp-Image-2026-11-19-at-12.38.39-PM-1.jpeg?rlkey=5g2l6twbwv9ypn7u8o8omkkcc&st=n8vfxv78&raw=1',
    alt: 'White utility pipes mounted on metal supports inside an underground excavation',
  },
  RESIDENTIAL_TRENCHING: { src: trenchImage, alt: 'Utility trench and yellow caution tape in front of a house' },
  ABOUT_EQUIPMENT: { src: vermeerImage, alt: 'Side view of JD Excavation’s Vermeer D20x22 directional boring machine' },
}
