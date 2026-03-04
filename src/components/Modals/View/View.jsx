import { useState } from 'react'
import './view.css'
import ModalShell from '../ModalShell.jsx'
import ProductRating from '../../Products/ProductRating.jsx'
import { getProductColorsForCategory, getProductSizesForCategory, getSwatchColor } from '../../../data/products.js'

function View({ isOpen, product, onClose, onAddToCart }) {
  const sizes = product ? getProductSizesForCategory(product.category) : []
  const colors = product ? getProductColorsForCategory(product.category) : []
  // Local state tracks the shopper's temporary choices while this modal instance is mounted.
  const [selectedSize, setSelectedSize] = useState(() => sizes[1] || sizes[0] || '')
  const [selectedColor, setSelectedColor] = useState(() => colors[0] || '')

  if (!product) {
    return null
  }

  return (
    <ModalShell labelledBy="productModalTitle" isOpen={isOpen} onClose={onClose}>
      <div className="modal-card product-modal-card sheet">
        <div className="modal-head product-modal-head">
          <span className="product-modal-kicker ui-mono-sm-caps">Product</span>
          <button className="modal-close ui-mono-sm-caps" type="button" aria-label="Close product view modal" onClick={onClose}>Close</button>
        </div>
        <div className="product-modal-body">
          <section>
            <div className="product-modal-kicker ui-mono-sm-caps">{product.label}</div>
            <h2 className="product-modal-title" id="productModalTitle">{product.name}</h2>
            <p className="product-modal-price">{product.price}</p>
            <ProductRating rating={product.rating} />
            <div className="product-modal-desc-title ui-mono-sm-caps">Description</div>
            <p className="product-modal-copy">{product.description}</p>
            <div className="product-modal-accordion">
              <details className="product-modal-details">
                <summary className="product-modal-summary ui-mono-sm-caps">
                  <span>Materials</span>
                  <span className="product-modal-chevron" aria-hidden="true">+</span>
                </summary>
                <div className="product-modal-panel-text">{product.materialDetails}</div>
              </details>
              <details className="product-modal-details">
                <summary className="product-modal-summary ui-mono-sm-caps">
                  <span>Shipping</span>
                  <span className="product-modal-chevron" aria-hidden="true">+</span>
                </summary>
                <div className="product-modal-panel-text">Delivery timing, local pickup, and returns can be wired to your full store flow later. For now this product preview stays presentation-only.</div>
              </details>
            </div>
          </section>
          <section className="product-modal-hero" aria-label="Product preview">
            <div className="product-modal-badge ui-mono-sm-caps">{product.label}</div>
            <div className="product-modal-image-frame">
              <img className="product-modal-image" src={product.image} alt={product.alt} />
            </div>
          </section>
          <aside className="product-modal-side" aria-label="Purchase options">
            <div className="product-modal-block">
              <div className="product-modal-block-title">
                <span className="ui-mono-sm-caps">Size</span>
                <a className="product-modal-size-guide ui-link" href="#contact">Size guide</a>
              </div>
              <div className="product-modal-sizes" role="group" aria-label="Sizes">
                {sizes.map((size) => (
                  <button
                    className="product-modal-size ui-mono-sm-caps"
                    type="button"
                    key={size}
                    aria-pressed={String(selectedSize === size)}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="product-modal-block">
              <div className="product-modal-block-title">
                <span className="ui-mono-sm-caps">Color</span>
              </div>
              <div className="product-modal-colors" role="listbox" aria-label="Colors">
                {colors.map((color) => (
                  <button
                    className="product-modal-swatch"
                    type="button"
                    key={color}
                    aria-selected={String(selectedColor === color)}
                    role="option"
                    onClick={() => setSelectedColor(color)}
                  >
                    <span className="product-modal-swatch-dot" aria-hidden="true" style={{ background: getSwatchColor(color) }}></span>
                    <span className="product-modal-swatch-name">{color}</span>
                  </button>
                ))}
              </div>
              <div className="product-modal-actions">
                <button className="product-modal-action ui-mono-sm-caps" type="button">Favorite</button>
                <button className="product-modal-action ui-mono-sm-caps" type="button" onClick={() => onAddToCart(product)}>Add to cart</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </ModalShell>
  )
}

export default View
