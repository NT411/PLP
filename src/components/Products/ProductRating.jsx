function ProductRating({ rating = 0 }) {
  // Clamps and rounds incoming values so the star display never renders invalid counts.
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)))

  return (
    <div className="product-rating" aria-label={`${safeRating} out of 5 stars`}>
      <span className="product-rating-stars" aria-hidden="true">
        {'★'.repeat(safeRating)}
        {'☆'.repeat(5 - safeRating)}
      </span>
      <span className="product-rating-value">{safeRating}/5</span>
    </div>
  )
}

export default ProductRating
