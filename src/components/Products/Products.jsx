import './products.css'
import ProductRating from './ProductRating.jsx'

function ProductPrice({ product }) {
  // Renders either a single current price or the full discount stack when sale data exists.
  if (!product.onDiscount) {
    return <span className="product-price-current">{product.price}</span>
  }

  return (
    <div className="product-price-group" aria-label="Discounted price">
      <span className="product-price-old">{product.originalPrice}</span>
      <span className="product-price-current">{product.price}</span>
      <span className="product-price-badge">-{product.discountPercent}%</span>
    </div>
  )
}

function Products({
  categoryHeader,
  displayedProducts,
  totalVisibleProducts,
  visibleProductCount,
  isNavHidden,
  onOpenFilters,
  onOpenSort,
  onOpenProduct,
  onAddToCart,
  onShowMore,
  canShowMore,
  isThemeInverted,
}) {
  // Switches action icons so they preserve contrast against the current theme.
  const actionIcons = {
    view: isThemeInverted ? '/icons/actions/viewBlack.png' : '/icons/actions/viewWhite.png',
    add: isThemeInverted ? '/icons/actions/addToCartPlusBlack.png' : '/icons/actions/addToCartPlusWhite.png',
  }

  return (
    <section className="section product-section sheet" id="products" aria-labelledby="productsTitle">
      <div className="section-content">
        <div className="catalog-toolbar">
          <div className="category-header-copy">
            <span className="category-kicker ui-mono-sm-caps">Category</span>
            <h2 id="productsTitle">{categoryHeader.label}</h2>
            <p className="category-description">{categoryHeader.description}</p>
          </div>
        </div>
        <div className="catalog-layout">
          {/* Sticky controls stay visible while the grid scrolls, with nav state adjusting their offset class. */}
          <div className={['catalog-sticky-bar', isNavHidden ? 'is-nav-hidden' : ''].filter(Boolean).join(' ')}>
            <div className="catalog-toolbar-controls">
              <div className="active-filters">
                <button className="active-filters-button" type="button" onClick={onOpenFilters}>Filters</button>
                <button className="active-filters-button catalog-sort-button" type="button" onClick={onOpenSort}>Sort by</button>
              </div>
            </div>
          </div>
          <div className="catalog-main">
            <div className="product-status" aria-live="polite">
              <div className="product-count">
                {Math.min(visibleProductCount, totalVisibleProducts)} out of {totalVisibleProducts} products displayed
              </div>
            </div>
            <div className="product-grid" aria-live="polite">
              {/* Product cards stay dumb: they render catalog data and emit actions back to the parent shell. */}
              {displayedProducts.length > 0 ? displayedProducts.map((product) => (
                <article className="product-card" key={product.anchorId}>
                  <div className="product-meta">
                    <span>{product.label}</span>
                    <ProductPrice product={product} />
                  </div>
                  <img className="product-image" src={product.image} alt={product.alt} />
                  <b className="product-title">{product.name}</b>
                  <ProductRating rating={product.rating} />
                  <span className="product-copy">{product.description}</span>
                  <div className="product-card-actions">
                    <button className="product-view-button ui-link" type="button" onClick={() => onOpenProduct(product)}>
                      <span>View</span>
                      <img className="product-action-icon" src={actionIcons.view} alt="" aria-hidden="true" />
                    </button>
                    <button className="product-link ui-link" type="button" onClick={() => onAddToCart(product)}>
                      <span>Add</span>
                      <img className="product-action-icon" src={actionIcons.add} alt="" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              )) : (
                <p className="products-empty">No products match the selected filters.</p>
              )}
            </div>
            <div className="product-actions" hidden={!canShowMore}>
              <button className="view-button" type="button" hidden={!canShowMore} onClick={onShowMore}>View more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
