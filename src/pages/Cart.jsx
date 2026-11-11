import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useCart } from "../context/CartContext";
import { formatPrice, getProductById } from "../data/products";

const FREE_DELIVERY = 50;
const DELIVERY_FEE = 4;

function Cart() {
  const { items, updateQty, removeFromCart, clearCart } = useCart();
  const [orderNumber, setOrderNumber] = useState(null);

  // Join each cart item with its full product information
  const lines = items
    .map((item) => ({ ...getProductById(item.id), qty: item.qty }))
    .filter((line) => line.id);

  const subtotal = lines.reduce((sum, line) => sum + line.price * line.qty, 0);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;
  const missing = Math.max(0, FREE_DELIVERY - subtotal);

  function placeOrder() {
    setOrderNumber("MII-" + Math.floor(10000 + Math.random() * 90000));
    clearCart();
  }

  if (orderNumber) {
    return (
      <section className="section container empty-state">
        <span className="success-icon">✓</span>
        <h1>Order placed!</h1>
        <p>
          Your order number is <strong>{orderNumber}</strong>. (Demo only – no payment was taken.)
        </p>
        <Link to="/products" className="btn">Continue shopping</Link>
      </section>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Your bag" title="Shopping cart" />

      <section className="section container">
        {lines.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty.</p>
            <Link to="/products" className="btn">Start shopping</Link>
          </div>
        ) : (
          <div className="cart-grid">
            <ul className="cart-list">
              {lines.map((line) => (
                <li className="cart-item" key={line.id}>
                  <Link to={`/products/${line.id}`}>
                    <img src={line.image} alt={line.name} />
                  </Link>
                  <div className="cart-item-info">
                    <Link to={`/products/${line.id}`} className="cart-item-name">{line.name}</Link>
                    <p>{line.category} · {formatPrice(line.price)}</p>
                    <button className="remove" onClick={() => removeFromCart(line.id)}>Remove</button>
                  </div>
                  <div className="qty qty-small">
                    <button onClick={() => updateQty(line.id, line.qty - 1)} aria-label="Decrease">−</button>
                    <span>{line.qty}</span>
                    <button onClick={() => updateQty(line.id, line.qty + 1)} aria-label="Increase">+</button>
                  </div>
                  <strong className="cart-line-total">{formatPrice(line.price * line.qty)}</strong>
                </li>
              ))}
            </ul>

            <aside className="summary">
              <h2>Order summary</h2>
              {missing > 0 ? (
                <div className="delivery-bar">
                  <p>Add <strong>{formatPrice(missing)}</strong> more for free delivery</p>
                  <div className="bar"><span style={{ width: `${(subtotal / FREE_DELIVERY) * 100}%` }} /></div>
                </div>
              ) : (
                <p className="free-note">🎉 You get free delivery!</p>
              )}
              <dl>
                <div><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
                <div><dt>Delivery</dt><dd>{delivery === 0 ? "Free" : formatPrice(delivery)}</dd></div>
                <div className="summary-total"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
              </dl>
              <button className="btn btn-wide" onClick={placeOrder}>Place order</button>
              <button className="btn btn-ghost btn-wide" onClick={clearCart}>Empty cart</button>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}

export default Cart;
