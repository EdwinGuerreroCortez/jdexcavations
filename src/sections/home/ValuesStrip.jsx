import InterfaceIcon from '../../components/ui/MobileIcon.jsx'

const values = [
  { title: 'Safety first', description: 'A safe work environment in every project.', icon: 'hardhat' },
  { title: 'Experienced crews', description: 'Skilled teams with proven expertise.', icon: 'crew' },
  { title: 'Reliable service', description: 'On-time delivery and quality results.', icon: 'shield' },
  { title: 'Complete solutions', description: 'From excavation to utility installation.', icon: 'layers' },
]

export default function ValuesStrip() {
  return (
    <div className="values-strip values-strip--desktop">
      <ul className="container" aria-label="Our values">
        {values.map(({ title, description, icon }) => (
          <li key={title}>
            <InterfaceIcon name={icon} />
            <strong>{title}</strong>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
