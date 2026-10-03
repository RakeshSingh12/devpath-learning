import { Link, NavLink } from "react-router-dom";
import { Compass, Search } from "lucide-react";
import type { ReactNode } from "react";
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <Compass size={18} />
          </span>
          devpath<span className="brand-dot">.</span>
        </Link>
        <nav>
          <NavLink to="/" end>
            Roadmaps
          </NavLink>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            Community
          </a>
        </nav>
        <a className="top-cta" href="/#explore">
          <Search size={15} /> Explore paths
        </a>
      </header>
      {children}
      <footer className="footer">
        DevPath · Independent learning paths{" "}
        <span>Progress saved in this browser</span>
      </footer>
    </div>
  );
}
