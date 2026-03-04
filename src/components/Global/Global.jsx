function Global({ message, visible }) {
  // Appends the visibility modifier so the toast can animate in and out with CSS.
  const className = ['cart-toast', visible ? 'is-visible' : ''].filter(Boolean).join(' ')

  return <div className={className} aria-live="polite" aria-atomic="true">{message}</div>
}

export default Global
