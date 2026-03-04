import { useEffect, useRef, useState } from 'react'
import Global from './components/Global/Global.jsx'
import Nav from './components/Nav/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'
import Products from './components/Products/Products.jsx'
import About from './components/Modals/About/About.jsx'
import Contact from './components/Modals/Contact/Contact.jsx'
import Filter from './components/Modals/Filter/Filter.jsx'
import Sort from './components/Modals/Sort/Sort.jsx'
import View from './components/Modals/View/View.jsx'
import Cart from './components/Modals/Cart/Cart.jsx'
import LogIn from './components/Modals/Profile/LogIn.jsx'
import Register from './components/Modals/Profile/Register.jsx'
import Reset from './components/Modals/Profile/Reset.jsx'
import Footer from './components/Footer/Footer.jsx'
import { getCategoryMeta, getSortedProducts, getVisibleProducts, INITIAL_PRODUCT_COUNT, PRODUCTS } from './data/products.js'

const INITIAL_FILTERS = {
  type: [],
  color: [],
  size: [],
}

function App() {
  // Stores the nav element so the app can measure its height after render.
  const navRef = useRef(null)
  // Stores the timeout id so a new toast can cancel the old one.
  const toastTimerRef = useRef(null)
  // Stores the timeout id used to temporarily keep the nav visible after cart actions.
  const navRevealTimerRef = useRef(null)
  // Stores the last scroll position so the nav can react to scroll direction.
  const lastScrollYRef = useRef(0)
  // Keeps overlay state available to delayed callbacks without relying on stale closures.
  const overlayStateRef = useRef({
    isFilterOpen: false,
    isMobileNavOpen: false,
    activeModal: null,
  })

  // Central app state for theme, overlays, filters, selected product, cart, and toast.
  const [isThemeInverted, setIsThemeInverted] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null)
  const [activeFilters, setActiveFilters] = useState(INITIAL_FILTERS)
  const [activeSort, setActiveSort] = useState('relevance')
  const [visibleProductCount, setVisibleProductCount] = useState(INITIAL_PRODUCT_COUNT)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [toastMessage, setToastMessage] = useState('')
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [isNavHidden, setIsNavHidden] = useState(false)

  // Derived values keep render logic simple and avoid recalculating in child components.
  const visibleProducts = getSortedProducts(getVisibleProducts(PRODUCTS, activeFilters), activeSort)
  const displayedProducts = visibleProducts.slice(0, visibleProductCount)
  const categoryHeader = activeFilters.type.length === 1 ? getCategoryMeta(activeFilters.type[0]) : getCategoryMeta(null)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartSubtotal = cartItems.reduce((total, item) => total + (item.priceValue * item.quantity), 0)

  useEffect(() => {
    overlayStateRef.current = {
      isFilterOpen,
      isMobileNavOpen,
      activeModal,
    }
  }, [activeModal, isFilterOpen, isMobileNavOpen])

  useEffect(() => {
    // Syncs global body classes with app state so CSS can react to theme and open overlays.
    document.body.classList.toggle('theme-inverted', isThemeInverted)
    document.body.classList.toggle('modal-open', isFilterOpen || Boolean(activeModal))

    return () => {
      document.body.classList.remove('theme-inverted')
      document.body.classList.remove('modal-open')
    }
  }, [activeModal, isFilterOpen, isThemeInverted])

  useEffect(() => {
    // Writes the current nav height into a CSS variable so layout spacing stays accurate on resize.
    const syncLayoutMeasurements = () => {
      if (!navRef.current) {
        return
      }

      document.documentElement.style.setProperty('--nav-height', `${navRef.current.offsetHeight}px`)
    }

    syncLayoutMeasurements()
    window.addEventListener('resize', syncLayoutMeasurements)
    return () => window.removeEventListener('resize', syncLayoutMeasurements)
  }, [])

  useEffect(() => {
    // Adds one Escape key handler that clears every open overlay state directly.
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsFilterOpen(false)
        setIsMobileNavOpen(false)
        setActiveModal(null)
        setSelectedProduct(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => () => {
    // Prevents a stale timeout from firing after the component unmounts.
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current)
    }

    if (navRevealTimerRef.current) {
      window.clearTimeout(navRevealTimerRef.current)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollYRef.current

      if (currentScrollY <= 24) {
        setIsNavHidden(false)
        lastScrollYRef.current = currentScrollY
        return
      }

      if (isFilterOpen || isMobileNavOpen || activeModal) {
        setIsNavHidden(false)
        lastScrollYRef.current = currentScrollY
        return
      }

      if (delta > 8) {
        setIsNavHidden(true)
      } else if (delta < -8) {
        setIsNavHidden(false)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeModal, isFilterOpen, isMobileNavOpen])

  function closeModal() {
    // Closes the active modal and clears the product detail state.
    setActiveModal(null)
    setSelectedProduct(null)
  }

  function closeAllOverlays() {
    // Resets every overlay state so keyboard, backdrop, and nav actions share one close path.
    setIsFilterOpen(false)
    setIsMobileNavOpen(false)
    closeModal()
  }

  const openModal = (modalName) => {
    // Opens one named modal and collapses the other overlay types to avoid stacked panels.
    setIsFilterOpen(false)
    setIsMobileNavOpen(false)
    setActiveModal(modalName)
  }

  const openProductModal = (product) => {
    // Saves the clicked product so the detail modal can render it.
    setSelectedProduct(product)
    openModal('product')
  }

  const toggleMobileNav = () => {
    setIsFilterOpen(false)
    setActiveModal(null)
    setIsMobileNavOpen((current) => !current)
  }

  const openToolbarFilters = () => {
    setActiveModal(null)
    setIsMobileNavOpen(false)
    setIsFilterOpen(true)
  }

  const openSortModal = () => {
    setIsFilterOpen(false)
    setIsMobileNavOpen(false)
    setActiveModal('sort')
  }

  const toggleTheme = () => {
    // Inverts the global theme class between default and alternate palettes.
    setIsThemeInverted((current) => !current)
  }

  const showToast = (message) => {
    // Replaces any current toast and starts a fresh auto-hide timer.
    setToastMessage(message)
    setIsToastVisible(true)

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current)
    }

    toastTimerRef.current = window.setTimeout(() => {
      setIsToastVisible(false)
    }, 1600)
  }

  const revealNavTemporarily = () => {
    setIsNavHidden(false)

    if (navRevealTimerRef.current) {
      window.clearTimeout(navRevealTimerRef.current)
    }

    navRevealTimerRef.current = window.setTimeout(() => {
      const { isFilterOpen: isFilterCurrentlyOpen, isMobileNavOpen: isMobileNavCurrentlyOpen, activeModal: currentActiveModal } = overlayStateRef.current

      if (window.scrollY > 24 && !isFilterCurrentlyOpen && !isMobileNavCurrentlyOpen && !currentActiveModal) {
        setIsNavHidden(true)
      }
    }, 1400)
  }

  const addToCart = (product) => {
    setCartItems((current) => {
      // Merges duplicate cart entries by anchorId instead of creating multiple rows for the same product.
      const existingItem = current.find((item) => item.anchorId === product.anchorId)

      if (existingItem) {
        return current.map((item) => (
          item.anchorId === product.anchorId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ))
      }

      return [
        ...current,
        {
          anchorId: product.anchorId,
          name: product.name,
          image: product.image,
          alt: product.alt,
          label: product.label,
          price: product.price,
          priceValue: product.priceValue,
          quantity: 1,
        },
      ]
    })

    showToast(`${product.name} added to cart`)
    revealNavTemporarily()
  }

  const updateCartQuantity = (anchorId, change) => {
    // Applies a quantity delta and drops the item entirely when the next quantity would be zero.
    setCartItems((current) => current.flatMap((item) => {
      if (item.anchorId !== anchorId) {
        return [item]
      }

      const nextQuantity = item.quantity + change
      return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : []
    }))
  }

  const removeCartItem = (anchorId) => {
    setCartItems((current) => current.filter((item) => item.anchorId !== anchorId))
  }

  const toggleCartModal = () => {
    if (activeModal === 'cart') {
      closeModal()
      return
    }

    openModal('cart')
  }

  const toggleFilterValue = (filterGroup, filterValue) => {
    setActiveFilters((current) => {
      const currentValues = current[filterGroup]

      if (filterGroup === 'type') {
        return {
          ...current,
          [filterGroup]: currentValues.includes(filterValue) ? [] : [filterValue],
        }
      }

      return {
        ...current,
        [filterGroup]: currentValues.includes(filterValue)
          ? currentValues.filter((value) => value !== filterValue)
          : [...currentValues, filterValue],
      }
    })

    setVisibleProductCount(INITIAL_PRODUCT_COUNT)
  }

  const clearFilters = () => {
    // Resets filter state and pagination so the catalog returns to its default view.
    setActiveFilters(INITIAL_FILTERS)
    setVisibleProductCount(INITIAL_PRODUCT_COUNT)
  }

  const clearCategoryFilter = () => {
    setActiveFilters((current) => ({
      ...current,
      type: [],
    }))
    setVisibleProductCount(INITIAL_PRODUCT_COUNT)
  }

  const showMoreProducts = () => {
    // Increases pagination by one page using the shared initial page size.
    setVisibleProductCount((current) => current + INITIAL_PRODUCT_COUNT)
  }

  return (
    <>
      <Global message={toastMessage} visible={isToastVisible} />
        <Nav
          navRef={navRef}
          isThemeInverted={isThemeInverted}
          isNavHidden={isNavHidden}
          isMobileNavOpen={isMobileNavOpen}
          cartCount={cartCount}
          onToggleTheme={toggleTheme}
          onProfileClick={() => openModal('login')}
          onCartClick={toggleCartModal}
          onToggleMobileNav={toggleMobileNav}
          onOpenAbout={() => openModal('about')}
          onOpenContact={() => openModal('contact')}
          onCloseAllOverlays={closeAllOverlays}
        />
      <main>
        <Hero />
        <Products
          categoryHeader={categoryHeader}
          displayedProducts={displayedProducts}
          totalVisibleProducts={visibleProducts.length}
          visibleProductCount={visibleProductCount}
          isNavHidden={isNavHidden}
          onOpenFilters={openToolbarFilters}
          onOpenSort={openSortModal}
          onOpenProduct={openProductModal}
          onAddToCart={addToCart}
          onShowMore={showMoreProducts}
          canShowMore={visibleProductCount < visibleProducts.length}
          isThemeInverted={isThemeInverted}
        />
      </main>
      <About isOpen={activeModal === 'about'} onClose={closeModal} />
      <Contact isOpen={activeModal === 'contact'} onClose={closeModal} />
      <Filter
        isOpen={isFilterOpen}
        activeFilters={activeFilters}
        onToggleFilter={toggleFilterValue}
        onClearCategory={clearCategoryFilter}
        onClearFilters={clearFilters}
        onClose={closeAllOverlays}
      />
      <Sort
        isOpen={activeModal === 'sort'}
        selectedSort={activeSort}
        onSelectSort={setActiveSort}
        onClose={closeModal}
      />
      <View
        key={selectedProduct?.anchorId ?? 'product-empty'}
        isOpen={activeModal === 'product'}
        product={selectedProduct}
        onClose={closeModal}
        onAddToCart={addToCart}
      />
      <Cart
        isOpen={activeModal === 'cart'}
        cartItems={cartItems}
        cartCount={cartCount}
        cartSubtotal={cartSubtotal}
        onClose={closeModal}
        onDecrease={updateCartQuantity}
        onIncrease={updateCartQuantity}
        onRemove={removeCartItem}
      />
      <LogIn
        isOpen={activeModal === 'login'}
        onClose={closeModal}
        onOpenRegister={() => openModal('register')}
        onOpenReset={() => openModal('reset')}
      />
      <Register
        isOpen={activeModal === 'register'}
        onClose={closeModal}
        onOpenLogin={() => openModal('login')}
      />
      <Reset
        isOpen={activeModal === 'reset'}
        onClose={closeModal}
        onOpenLogin={() => openModal('login')}
      />
      <Footer onOpenContact={() => openModal('contact')} />
    </>
  )
}

export default App
