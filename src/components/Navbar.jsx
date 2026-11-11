import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="announcement">
        Free delivery in Lebanon on orders over $50 · Cruelty-free, always
      </div>

      <nav className="nav-inner container">
        <Link to="/" className="logo" aria-label="Beauty by MI&I home">
          Beauty <span>by</span> MI&amp;I
        </Link>

        <ul className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link to="/cart" className="cart-btn" aria-label={`Cart, ${count} items`}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M6 7h12l-1 13H7L6 7Zm3 0a3 3 0 0 1 6 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {count > 0 && <span className="cart-count">{count}</span>}
          </Link>

          <button
            className={open ? "menu-toggle active" : "menu-toggle"}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
