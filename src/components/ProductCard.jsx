import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

// Reusable card used on the Home page, Shop page and "You may also like".
function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-img">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.bestSeller && <span className="badge">Best seller</span>}
      </Link>

      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="product-tagline">{product.tagline}</p>

        <div className="product-footer">
          <span className="price">{formatPrice(product.price)}</span>
          <button className="btn btn-small" onClick={() => addToCart(product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
