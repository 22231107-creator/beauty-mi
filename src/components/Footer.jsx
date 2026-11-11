import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="logo footer-logo">
            Beauty <span>by</span> MI&amp;I
          </p>
          <p className="footer-text">
            Your glow, our passion. Skincare and makeup made with care in Lebanon.
          </p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/products?category=Skincare">Skincare</Link></li>
            <li><Link to="/products?category=Makeup">Makeup</Link></li>
            <li><Link to="/cart">My cart</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Visit us</h4>
          <p className="footer-text">
            Beirut, Lebanon
            <br />
            +961 76 123 456
            <br />
            hello@beautybymii.com
          </p>
        </div>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Beauty by MI&amp;I. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
