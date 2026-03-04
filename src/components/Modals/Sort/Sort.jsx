import './sort.css'
import ModalShell from '../ModalShell.jsx'

// The values map directly to the sorting helper in the catalog data module.
const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'new-in', label: 'New in' },
  { value: 'price-low-high', label: 'Price (low-high)' },
  { value: 'price-high-low', label: 'Price (high-low)' },
  { value: 'on-discount', label: 'On discount' },
  { value: 'brand-a-z', label: 'Products (A-Z)' },
  { value: 'brand-z-a', label: 'Products (Z-A)' },
  { value: 'text-relevance', label: 'Text Relevance' },
]

function Sort({ isOpen, selectedSort, onSelectSort, onClose }) {
  return (
    <ModalShell labelledBy="sortModalTitle" isOpen={isOpen} onClose={onClose}>
      <div className="modal-card sort-modal-card sheet">
        <div className="modal-head sort-modal-head">
          <div className="sort-title" id="sortModalTitle">Sort by</div>
          <button className="modal-close sort-close ui-mono-sm-caps" type="button" aria-label="Close sort options" onClick={onClose}>Close</button>
        </div>
        <div className="sort-list" role="listbox" aria-label="Sort products">
          {SORT_OPTIONS.map((option) => (
            <button
              className="sort-option"
              type="button"
              key={option.value}
              role="option"
              aria-selected={String(selectedSort === option.value)}
              onClick={() => {
                // Applies the sort immediately and dismisses the modal so the catalog updates in place.
                onSelectSort(option.value)
                onClose()
              }}
            >
              <span>{option.label}</span>
              <span className={['sort-option-indicator', selectedSort === option.value ? 'is-selected' : ''].filter(Boolean).join(' ')} aria-hidden="true"></span>
            </button>
          ))}
        </div>
      </div>
    </ModalShell>
  )
}

export default Sort
