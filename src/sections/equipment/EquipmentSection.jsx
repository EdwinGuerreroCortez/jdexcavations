const equipment = ['JCB Excavators', 'Vermeer D20x22', 'Construction Equipment']

export default function EquipmentSection() {
  return (
    <details id="equipment" className="equipment-section">
      <summary className="text-link">
        <span>Meet JD Excavation</span> <span className="button-arrow" aria-hidden="true">↗</span>
      </summary>
      <p>Our fleet</p>
      <ul>
        {equipment.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </details>
  )
}
