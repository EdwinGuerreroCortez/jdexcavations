import MediaPlaceholder from '../../components/common/MediaPlaceholder.jsx'
import SectionHeading from '../../components/common/SectionHeading.jsx'

const equipment = [
  { name: 'JCB Excavators', variant: 'site' },
  { name: 'Vermeer D20x22', variant: 'bore' },
  { name: 'Construction Equipment', variant: 'grid' },
]

export default function EquipmentSection() {
  return (
    <section id="equipment" className="section equipment-section" aria-labelledby="equipment-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading id="equipment-title" description="Equipment photography pending.">Equipment</SectionHeading>
        <div className="equipment-grid">
          {equipment.map(({ name, variant }) => (
            <article className="equipment-card" key={name}>
              <MediaPlaceholder variant={variant} />
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

