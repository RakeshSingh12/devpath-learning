import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="eyebrow muted">404 · PAGE NOT FOUND</div>
      <h1>That path doesn't exist.</h1>
      <p>Let's get you back to the roadmaps.</p>
      <Link className="primary-btn" to="/">
        Browse roadmaps
      </Link>
    </main>
  );
}
