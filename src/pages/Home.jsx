import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import heroImg from "../assets/images/hero.jpg";
import skincareImg from "../assets/images/hydrating-cream.jpg";
import makeupImg from "../assets/images/eyeshadow-palette.jpg";

const promises = [
  { icon: "🌿", title: "Natural ingredients", text: "Plant-based formulas for healthy, glowing skin." },
  { icon: "🐰", title: "Cruelty-free", text: "We never test on animals – not now, not ever." },
  { icon: "🚚", title: "Fast delivery", text: "2–3 days anywhere in Lebanon, worldwide shipping." },
  { icon: "💗", title: "Made with care", text: "Every product is tested by our team first." },
];

function Home() {
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">New season · Skincare &amp; Makeup</p>
            <h1>
              Radiant skin <em>starts here.</em>
            </h1>
            <p className="hero-lead">
              Gentle skincare and bold makeup, made cruelty-free in Lebanon. Find
              the routine that makes you feel like you – only brighter.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn">Shop now</Link>
              <Link to="/about" className="btn btn-outline">Our story</Link>
            </div>
            <ul className="hero-stats">
              <li><strong>8</strong> signature products</li>
              <li><strong>100%</strong> cruelty-free</li>
              <li><strong>2–3</strong> day delivery</li>
            </ul>
          </div>

          <div className="hero-image">
            <img src={heroImg} alt="Woman applying moisturising cream" />
            <div className="hero-chip">
              <span>✨</span> Vitamin C Serum is back in stock
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section container">
        <div className="section-head">
          <p className="eyebrow">Shop by category</p>
          <h2>Two ways to glow</h2>
        </div>
        <div className="category-grid">
          <Link to="/products?category=Skincare" className="category-card">
            <img src={skincareImg} alt="Skincare products" loading="lazy" />
            <div className="category-overlay">
              <h3>Skincare</h3>
              <p>Creams, serums &amp; glow drops</p>
              <span>Explore →</span>
            </div>
          </Link>
          <Link to="/products?category=Makeup" className="category-card">
            <img src={makeupImg} alt="Makeup products" loading="lazy" />
            <div className="category-overlay">
              <h3>Makeup</h3>
              <p>Bold colours &amp; smooth textures</p>
              <span>Explore →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="section section-tinted">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <p className="eyebrow">Loved by our customers</p>
              <h2>Best sellers</h2>
            </div>
            <Link to="/products" className="text-link">View all products →</Link>
          </div>
          <div className="product-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PROMISES */}
      <section className="section container">
        <div className="section-head">
          <p className="eyebrow">The MI&amp;I promise</p>
          <h2>Beauty you can feel good about</h2>
        </div>
        <div className="promise-grid">
          {promises.map((item) => (
            <div className="promise" key={item.title}>
              <span className="promise-icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta container">
        <div>
          <h2>Not sure where to start?</h2>
          <p>Tell us about your skin and we’ll suggest a simple routine.</p>
        </div>
        <Link to="/contact" className="btn btn-light">Ask our team</Link>
      </section>
    </>
  );
}

export default Home;
