import './cart.css'
import ModalShell from '../ModalShell.jsx'
import { formatCurrency } from '../../../data/products.js'

function Cart({ isOpen, cartItems, cartCount, cartSubtotal, onClose, onDecrease, onIncrease, onRemove }) {
  return (
    <ModalShell labelledBy="cartTitle" isOpen={isOpen} onClose={onClose}>
      <div className="modal-card cart-card sheet">
        <div className="modal-head">
          <span className="ui-mono-sm-caps">Cart</span>
          <button className="modal-close ui-mono-sm-caps" type="button" aria-label="Close cart modal" onClick={onClose}>Close</button>
        </div>
        <div className="cart-body">
          <div>
            <h2 className="cart-title" id="cartTitle">Cart</h2>
            <p className="ui-mono-sm-caps">PRODUCTS ({cartCount})</p>
            <div className="cart-list" role="list">
              {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
              ) : cartItems.map((item) => (
                <article className="cart-item" role="listitem" key={item.anchorId}>
                  <img className="cart-thumb" src={item.image} alt={item.alt} />
                  <div>
                    <p className="cart-item-name">{item.name}</p>
                    <div className="cart-item-meta">
                      <span>{item.label}</span>
                    </div>
                  </div>
                  <div className="cart-item-controls">
                    <div className="cart-item-price">{item.price}</div>
                    {/* Quantity changes are delegated to App so cart totals stay derived from a single source of truth. */}
                    <div className="cart-qty" aria-label="Quantity">
                      <button type="button" aria-label="Decrease quantity" onClick={() => onDecrease(item.anchorId, -1)}>-</button>
                      <input type="text" value={item.quantity} inputMode="numeric" aria-label="Item quantity" readOnly />
                      <button type="button" aria-label="Increase quantity" onClick={() => onIncrease(item.anchorId, 1)}>+</button>
                    </div>
                    <button className="cart-remove" type="button" onClick={() => onRemove(item.anchorId)}>Remove</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="cart-summary" aria-label="Order summary">
            <h3>Summary</h3>
            {/* Promo UI is presentational for now and does not modify totals. */}
            <div className="cart-promo" aria-label="Promo code">
              <input type="text" placeholder="Promo code" aria-label="Promo code" />
              <button className="ui-mono-sm-caps" type="button">Apply</button>
            </div>
            <div className="cart-summary-row"><span>Subtotal</span><strong>{formatCurrency(cartSubtotal)}</strong></div>
            <div className="cart-summary-row"><span>Shipping</span><strong>Free</strong></div>
            <div className="cart-summary-row"><span>Discount</span><strong>$0</strong></div>
            <div className="cart-total" aria-label="Total">
              <div className="ui-mono-sm-caps">Total</div>
              <div className="cart-total-value">{formatCurrency(cartSubtotal)}</div>
            </div>
            <div className="cart-actions">
              <button className="cart-action ui-mono-sm-caps" type="button">Proceed to checkout</button>
              <button className="cart-action ui-mono-sm-caps" type="button" onClick={onClose}>Continue shopping</button>
            </div>
          </aside>
        </div>
        <footer className="cart-footer" aria-label="Cart footer callout">
          <div>
            <div className="ui-mono-sm-caps">Need help with your order?</div>
            <div className="cart-footer-copy">Click the Contact button at the top of the screen.</div>
          </div>
          <div className="cart-footer-mark">Less<br />Means<br />More</div>
        </footer>
      </div>
    </ModalShell>
  )
}

export default Cart
