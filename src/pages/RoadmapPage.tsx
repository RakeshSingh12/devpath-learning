import { useState } from "react";
import { ArrowLeft, CheckCheck, Clock3, RotateCcw } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { roadmaps } from "../data/roadmaps";
import { useProgress } from "../hooks/useProgress";
import { flattenTopics, getRoadmapProgress } from "../utils/roadmap";
import { TopicTree } from "../components/roadmap/TopicTree";
export function RoadmapPage() {
  const { slug } = useParams();
  const roadmap = roadmaps.find((r) => r.slug === slug);
  const { progress, toggle, reset } = useProgress();
  if (!roadmap)
    return (
      <main className="not-found">
        <h1>Roadmap not found</h1>
        <Link to="/">Back to roadmaps</Link>
      </main>
    );
  const p = getRoadmapProgress(roadmap, progress),
    ids = flattenTopics(roadmap.topics).map((t) => t.id);
  return (
    <main className="roadmap-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={15} /> All roadmaps
      </Link>
      <section className="roadmap-hero">
        <div className="roadmap-kicker">
          {roadmap.category.toUpperCase()} PATH · {roadmap.level}
        </div>
        <h1>{roadmap.title}</h1>
        <p>{roadmap.description}</p>
        <div className="detail-meta">
          <span>
            <Clock3 size={15} />
            {roadmap.duration}
          </span>
          <span>
            <CheckCheck size={15} />
            {p.done} of {p.total} topics complete
          </span>
        </div>
        <div className="large-progress">
          <div>
            <span style={{ width: `${p.percent}%` }} />
          </div>
          <strong>{p.percent}%</strong>
        </div>
      </section>
      <div className="content-heading">
        <div>
          <h2>Your learning path</h2>
          <p>Work through the topics and check off each one as you learn.</p>
        </div>
        <button
          className="reset-btn"
          onClick={() => {
            if (window.confirm("Reset progress for this roadmap?")) reset(ids);
          }}
        >
          <RotateCcw size={14} /> Reset progress
        </button>
      </div>
      <section className="topic-list">
        {roadmap.topics.map((topic, i) => (
          <div className="topic-section" key={topic.id}>
            <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
            <div className="topic-section-body">
              <TopicTree topic={topic} progress={progress} onToggle={toggle} />
            </div>
          </div>
        ))}
      </section>
      <p className="bottom-note">
        Progress is stored locally in your browser, not synced across devices.
      </p>
    </main>
  );
}
