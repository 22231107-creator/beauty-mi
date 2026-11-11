import { useState } from "react";
import PageHeader from "../components/PageHeader";
import contactImg from "../assets/images/contact.jpg";

const emptyForm = { name: "", email: "", subject: "General question", message: "" };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate() {
    const newErrors = {};
    if (form.name.trim().length < 2) newErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Please enter a valid email.";
    if (form.message.trim().length < 10)
      newErrors.message = "Your message should be at least 10 characters.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // No backend in Phase 1 – we simply show a confirmation.
    setSent(true);
  }

  function handleReset() {
    setForm(emptyForm);
    setErrors({});
    setSent(false);
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact us"
        subtitle="Questions about a product or your order? We reply within 24 hours."
      />

      <section className="section container contact-grid">
        <aside className="contact-info">
          <img src={contactImg} alt="Email, phone and location icons" className="contact-img" />
          <div className="info-item">
            <span>✉</span>
            <div>
              <h3>Email</h3>
              <p>hello@beautybymii.com</p>
            </div>
          </div>
          <div className="info-item">
            <span>☎</span>
            <div>
              <h3>Phone</h3>
              <p>+961 76 123 456</p>
            </div>
          </div>
          <div className="info-item">
            <span>⌖</span>
            <div>
              <h3>Location</h3>
              <p>Beirut, Lebanon</p>
            </div>
          </div>
          <div className="info-item">
            <span>◷</span>
            <div>
              <h3>Opening hours</h3>
              <p>Mon – Sat, 9:00 – 18:00</p>
            </div>
          </div>
        </aside>

        <div className="contact-form-card">
          {sent ? (
            <div className="success">
              <span className="success-icon">✓</span>
              <h2>Thank you, {form.name.split(" ")[0]}!</h2>
              <p>
                Your message has been received. We’ll reply to <strong>{form.email}</strong> soon.
              </p>
              <button className="btn btn-outline" onClick={handleReset}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
              <h2>Send us a message</h2>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                  <option>General question</option>
                  <option>Product advice</option>
                  <option>My order</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Write your message here…" />
                {errors.message && <p className="error">{errors.message}</p>}
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn">Send message</button>
                <button type="reset" className="btn btn-ghost">Reset form</button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export default Contact;
