import { useId } from 'react'
import './catalog-dialog.css'

export default function CatalogDialog({ dialogRef, title, onClose, children }) {
  const titleId = useId()

  return (
    <dialog ref={dialogRef} className="catalog-dialog" aria-labelledby={titleId} onClose={onClose}>
      <div className="catalog-dialog-heading">
        <h2 id={titleId}>{title}</h2>
        <form method="dialog"><button type="submit">Close</button></form>
      </div>
      {children}
    </dialog>
  )
}
