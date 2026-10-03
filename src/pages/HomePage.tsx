import { useMemo, useState } from "react";
import { ArrowRight, BookOpenCheck, Search, Sparkles } from "lucide-react";
import { roadmaps } from "../data/roadmaps";
import { RoadmapCard } from "../components/roadmap/RoadmapCard";
import { useProgress } from "../hooks/useProgress";
export function HomePage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const { progress } = useProgress();
  const shown = useMemo(
    () =>
      roadmaps.filter(
        (r) =>
          (filter === "All" || r.category === filter) &&
          `${r.title} ${r.description}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [filter, query],
  );
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">
          <Sparkles size={14} /> YOUR DEVELOPER LEARNING COMPANION
        </div>
        <h1>
          Build your skills.
          <br />
          <span>Map your journey.</span>
        </h1>
        <p className="hero-copy">
          Structured, practical roadmaps to help you move from where you are to
          where you want to be.
        </p>
        <a href="#explore" className="primary-btn">
          Explore roadmaps <ArrowRight size={16} />
        </a>
        <div className="hero-stats">
          <div>
            <strong>{roadmaps.length}</strong>
            <span>Learning paths</span>
          </div>
          <i />
          <div>
            <strong>100+</strong>
            <span>Learning topics</span>
          </div>
          <i />
          <div>
            <strong>Free</strong>
            <span>Always accessible</span>
          </div>
        </div>
      </section>
      <section id="explore" className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow muted">FIND YOUR DIRECTION</div>
            <h2>Explore roadmaps</h2>
            <p>Choose a role or focus on a specific skill.</p>
          </div>
          <div className="result-count">
            <BookOpenCheck size={15} />
            {shown.length} paths
          </div>
        </div>
        <div className="toolbar">
          <label className="searchbox">
            <Search size={17} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roadmaps..."
              aria-label="Search roadmaps"
            />
          </label>
          <div className="filters">
            {["All", "Role", "Skill"].map((v) => (
              <button
                key={v}
                className={filter === v ? "active" : ""}
                aria-pressed={filter === v}
                onClick={() => setFilter(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        {shown.length ? (
          <div className="roadmap-grid">
            {shown.map((r) => (
              <RoadmapCard key={r.slug} roadmap={r} progress={progress} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h3>No paths found</h3>
            <p>Try another search or clear the selected filter.</p>
            <button
              onClick={() => {
                setQuery("");
                setFilter("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
      <section className="learning-banner">
        <div>
          <h3>Learn at your own pace</h3>
          <p>
            Check off topics as you learn. Progress stays saved on this device.
          </p>
        </div>
        <a href="/roadmap/frontend">
          Start learning <ArrowRight size={15} />
        </a>
      </section>
    </main>
  );
}
