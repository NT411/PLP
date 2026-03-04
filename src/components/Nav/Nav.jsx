import './nav.css'

function Nav({
  navRef,
  isThemeInverted,
  isNavHidden,
  isMobileNavOpen,
  cartCount,
  onToggleTheme,
  onProfileClick,
  onCartClick,
  onToggleMobileNav,
  onOpenAbout,
  onOpenContact,
  onCloseAllOverlays,
}) {
  // Adds a state class so CSS can switch nav layout and visibility for mobile mode.
  const navClassName = ['nav', isMobileNavOpen ? 'nav-mobile-open' : '', isNavHidden ? 'nav-hidden' : ''].filter(Boolean).join(' ')
  // Chooses the correct menu icon variant based on both theme and open/closed state.
  const mobileMenuIcon = isThemeInverted
    ? (isMobileNavOpen ? '/icons/navigation/hamburgerCloseWhite.png' : '/icons/navigation/hamburgerMenuWhite.png')
    : (isMobileNavOpen ? '/icons/navigation/hamburgerCloseBlack.png' : '/icons/navigation/hamburgerMenuBlack.png')

  return (
    <nav className={navClassName} aria-label="Primary navigation" ref={navRef}>
      <a className="logo ui-link" href="#top" onClick={onCloseAllOverlays}><strong>Simple</strong></a>
      <div className="nav-buttons">
        {/* Icon buttons forward intent back to App, which owns all cross-page UI state. */}
        <button className="nav-icon-button" type="button" aria-label="Toggle theme" aria-pressed={String(isThemeInverted)} onClick={onToggleTheme}>
          <img className="icon icon-image" src={isThemeInverted ? '/icons/navigation/sunLight.png' : '/icons/navigation/sunDark.png'} alt="" aria-hidden="true" />
        </button>
        <button className="nav-icon-button" type="button" aria-label="Profile" onClick={onProfileClick}>
          <img className="icon icon-image" src={isThemeInverted ? '/icons/navigation/profileLight.png' : '/icons/navigation/profileDark.png'} alt="" aria-hidden="true" />
        </button>
        <button className="nav-icon-button" type="button" aria-label="Cart" onClick={onCartClick}>
          <img className="icon icon-image" src={isThemeInverted ? '/icons/cart/cartEmptyWhite.png' : '/icons/cart/cartEmptyBlack.png'} alt="" aria-hidden="true" />
          <span className="cart-count-badge" hidden={cartCount === 0}>{cartCount}</span>
        </button>
        <button
          className="nav-icon-button"
          type="button"
          aria-label={isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobileNavLinks"
          aria-expanded={String(isMobileNavOpen)}
          onClick={onToggleMobileNav}
        >
          <img className="icon icon-image" src={mobileMenuIcon} alt="" aria-hidden="true" />
        </button>
      </div>
      {/* Mobile navigation stays mounted and is shown purely through stateful CSS classes. */}
      <div className="nav-links nav-links-mobile" id="mobileNavLinks" aria-label="Primary navigation menu">
        <button className="ui-link filter-toggle" type="button" onClick={onOpenAbout}><strong>About</strong></button>
        <a className="ui-link" href="/"><strong>Terms</strong></a>
        <a className="ui-link" href="/"><strong>Privacy</strong></a>
        <button className="ui-link filter-toggle" type="button" onClick={onOpenContact}><strong>Contact</strong></button>
        <a className="ui-link" href="#products"><strong>Products</strong></a>
      </div>
    </nav>
  )
}

export default Nav
