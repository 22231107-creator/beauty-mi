import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import aboutImg from "../assets/images/about.jpg";

const values = [
  { title: "Quality first", text: "We pick ingredients that are gentle, effective and proven." },
  { title: "Kind to animals", text: "Every product is 100% cruelty-free. We never test on animals." },
  { title: "Honest beauty", text: "Clear labels and simple routines – no confusing promises." },
];

const timeline = [
  { year: "2024", text: "MI&I starts as a small idea between friends in Beirut." },
  { year: "2025", text: "First skincare line launches: Hydrating Cream and Vitamin C Serum." },
  { year: "2026", text: "Makeup collection arrives and we begin shipping worldwide." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About our brand"
        title="Who we are"
        subtitle="Beauty is confidence – and everyone deserves to feel it."
      />

      <section className="section container about-grid">
        <div className="about-image">
          <img src={aboutImg} alt="Smiling woman with skincare cream" />
        </div>
        <div className="about-text">
          <h2>Bringing high-quality beauty to everyone</h2>
          <p>
            Beauty by MI&amp;I was created to bring high-quality skincare and
            cosmetics to everyone. We believe beauty is confidence, and that a
            good routine should feel simple, not overwhelming.
          </p>
          <p>
            Our products are tested with care, and we never test on animals. We
            are based in Lebanon and ship worldwide.
          </p>
          <blockquote>
            “Your skin is your best accessory.”
            <cite>– MI&amp;I</cite>
          </blockquote>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we stand for</p>
            <h2>Our values</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={v.title}>
                <span className="value-number">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <p className="eyebrow">Our journey</p>
          <h2>How it started</h2>
        </div>
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.year}>
              <span className="timeline-year">{item.year}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
        <div className="center">
          <Link to="/products" className="btn">Discover the collection</Link>
        </div>
      </section>
    </>
  );
}

export default About;
