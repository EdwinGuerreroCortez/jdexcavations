import { useRef } from 'react'
import CatalogDialog from '../../components/common/CatalogDialog.jsx'
import HomeMedia from '../../components/common/HomeMedia.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'
import { equipment } from '../../data/site.js'
import './equipment.css'

const featuredEquipment = equipment.filter(({ slot }) => slot)

export default function EquipmentSection() {
  const allEquipment = useRef(null)

  return (
    <section id="equipment" className="section equipment-section" aria-labelledby="equipment-title" tabIndex={-1}>
      <div className="container">
        <div className="equipment-heading">
          <SectionHeading id="equipment-title" eyebrow="Equipment">Equipment</SectionHeading>
          <button className="equipment-view-all text-link" type="button" aria-haspopup="dialog" onClick={() => allEquipment.current.showModal()}>
            <span>View all equipment</span> <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="equipment-grid">
          {featuredEquipment.map(({ name, slot, description }) => (
            <figure className="equipment-card" key={name} data-reveal>
              <HomeMedia slot={slot} className="equipment-photo" />
              <figcaption>
                <h3>{name}</h3>
                <p>{description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <CatalogDialog dialogRef={allEquipment} title="All equipment">
          <ul>
            {equipment.map(({ name, description }) => (
              <li key={name}>
                <h3>{name}</h3>
                {description && <p>{description}</p>}
              </li>
            ))}
          </ul>
        </CatalogDialog>
      </div>
    </section>
  )
}
