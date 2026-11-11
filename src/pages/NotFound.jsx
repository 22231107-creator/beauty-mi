import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section container empty-state">
      <p className="big-404">404</p>
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn">Go home</Link>
    </section>
  );
}

export default NotFound;
