import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import type { Roadmap } from "../../types/roadmap";
import { getRoadmapProgress } from "../../utils/roadmap";
export function RoadmapCard({
  roadmap,
  progress,
}: {
  roadmap: Roadmap;
  progress: Record<string, boolean>;
}) {
  const p = getRoadmapProgress(roadmap, progress);
  return (
    <Link to={`/roadmap/${roadmap.slug}`} className="roadmap-card">
      <div className="card-top">
        <span
          className="path-icon"
          style={{ "--accent": roadmap.accent } as CSSProperties}
        >
          {roadmap.title[0]}
        </span>
        <span className="category">{roadmap.category}</span>
        <ArrowUpRight size={17} className="card-arrow" />
      </div>
      <h3>{roadmap.title}</h3>
      <p>{roadmap.description}</p>
      <div className="card-meta">
        <span>
          <Clock3 size={14} />
          {roadmap.duration}
        </span>
        <span>{roadmap.level}</span>
      </div>
      <div className="progress-track">
        <span style={{ width: `${p.percent}%` }} />
      </div>
      <div className="progress-caption">
        <span>{p.percent}% complete</span>
        <span>
          {p.done}/{p.total} topics
        </span>
      </div>
    </Link>
  );
}
