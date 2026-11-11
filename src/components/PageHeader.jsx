// Small banner shown at the top of inner pages (Shop, About, Contact, Cart).
function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="page-header">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
