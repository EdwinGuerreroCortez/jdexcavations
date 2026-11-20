const values = ['Safety first', 'Precision driven', 'Built on commitment']

export default function ValuesStrip() {
  return (
    <div className="values-strip">
      <ul className="container" aria-label="Our values">
        {values.map((value) => <li key={value}>{value}</li>)}
      </ul>
    </div>
  )
}
