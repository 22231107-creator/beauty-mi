import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import products, { formatPrice, getProductById } from "../data/products";

// DYNAMIC PAGE: the URL /products/:id decides which product is shown.
function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section className="section container empty-state">
        <h1>Product not found</h1>
        <p>We couldn’t find a product with ID “{id}”.</p>
        <Link to="/products" className="btn">Back to shop</Link>
      </section>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  function handleAdd() {
    addToCart(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <>
      <section className="section container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link> / <Link to="/products">Shop</Link> /{" "}
          <Link to={`/products?category=${product.category}`}>{product.category}</Link> /{" "}
          <span>{product.name}</span>
        </nav>

        <div className="details-grid">
          <div className="details-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="details-info">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="details-tagline">{product.tagline}</p>
            <p className="details-price">
              {formatPrice(product.price)} <span>· {product.size}</span>
            </p>

            <div className="buy-row">
              <div className="qty" aria-label="Quantity">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)} aria-label="Increase">+</button>
              </div>
              <button className="btn btn-wide" onClick={handleAdd}>
                {added ? "Added ✓" : `Add to cart · ${formatPrice(product.price * qty)}`}
              </button>
            </div>

            <ul className="perks">
              <li>✓ Cruelty-free &amp; vegan-friendly</li>
              <li>✓ Free delivery over $50</li>
              <li>✓ 14-day easy returns</li>
            </ul>

            <div className="tabs">
              <div className="tab-buttons" role="tablist">
                {["description", "ingredients", "how to use"].map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={tab === t}
                    className={tab === t ? "tab active" : "tab"}
                    onClick={() => setTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="tab-panel" role="tabpanel">
                {tab === "description" && <p>{product.description}</p>}
                {tab === "ingredients" && (
                  <ul className="ingredient-list">
                    {product.ingredients.map((ing) => (
                      <li key={ing}>{ing}</li>
                    ))}
                  </ul>
                )}
                {tab === "how to use" && <p>{product.howToUse}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-tinted">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">More {product.category.toLowerCase()}</p>
              <h2>You may also like</h2>
            </div>
            <div className="product-grid product-grid-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetails;
