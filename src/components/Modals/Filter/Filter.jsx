import './filter.css'
import ModalShell from '../ModalShell.jsx'
import { FILTER_OPTIONS } from '../../../data/products.js'

function renderLabel(value) {
  // Converts stored filter ids into readable button labels.
  return value.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

function Filter({ isOpen, activeFilters, onToggleFilter, onClearCategory, onClearFilters, onClose }) {
  return (
    <ModalShell labelledBy="filterModalTitle" isOpen={isOpen} onClose={onClose}>
      <div className="modal-card filter-modal-card sheet" id="filterPanel">
        <div className="modal-head filter-panel-header">
          <div className="filter-title" id="filterModalTitle">Filter</div>
          <button className="modal-close filter-close ui-mono-sm-caps" type="button" aria-label="Close filters" onClick={onClose}>Close</button>
        </div>
        <div className="filter-list" aria-label="Product filters">
          <section className="filter-group" aria-labelledby="filterTypeLabel">
            <div className="filter-group-label" id="filterTypeLabel">Category</div>
            <div className="filter-group-options">
              <button
                className={['filter-chip', activeFilters.type.length === 0 ? 'is-active' : ''].filter(Boolean).join(' ')}
                type="button"
                aria-pressed={String(activeFilters.type.length === 0)}
                onClick={onClearCategory}
              >
                All Products
              </button>
              {FILTER_OPTIONS.type.map((value) => (
                <button
                  className={['filter-chip', activeFilters.type.includes(value) ? 'is-active' : ''].filter(Boolean).join(' ')}
                  type="button"
                  key={value}
                  aria-pressed={String(activeFilters.type.includes(value))}
                  onClick={() => onToggleFilter('type', value)}
                >
                  {renderLabel(value)}
                </button>
              ))}
            </div>
          </section>
          <section className="filter-group" aria-labelledby="filterColorLabel">
            <div className="filter-group-label" id="filterColorLabel">Color</div>
            <div className="filter-group-options">
              {FILTER_OPTIONS.color.map((value) => (
                <button
                  className={['filter-chip', activeFilters.color.includes(value) ? 'is-active' : ''].filter(Boolean).join(' ')}
                  type="button"
                  key={value}
                  aria-pressed={String(activeFilters.color.includes(value))}
                  onClick={() => onToggleFilter('color', value)}
                >
                  {renderLabel(value)}
                </button>
              ))}
            </div>
          </section>
          <section className="filter-group" aria-labelledby="filterSizeLabel">
            <div className="filter-group-label" id="filterSizeLabel">Size</div>
            <div className="filter-group-options">
              {FILTER_OPTIONS.size.map((value) => (
                <button
                  className={['filter-chip', activeFilters.size.includes(value) ? 'is-active' : ''].filter(Boolean).join(' ')}
                  type="button"
                  key={value}
                  aria-pressed={String(activeFilters.size.includes(value))}
                  onClick={() => onToggleFilter('size', value)}
                >
                  {value.toUpperCase()}
                </button>
              ))}
            </div>
          </section>
          <button className="filter-reset" type="button" onClick={onClearFilters}>Clear all</button>
        </div>
      </div>
    </ModalShell>
  )
}

export default Filter
