import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Topic } from "../../types/roadmap";
export function TopicTree({
  topic,
  progress,
  onToggle,
  depth = 0,
}: {
  topic: Topic;
  progress: Record<string, boolean>;
  onToggle: (id: string) => void;
  depth?: number;
}) {
  const [open, setOpen] = useState(true);
  const done = !!progress[topic.id],
    hasChildren = !!topic.children?.length;
  return (
    <div className={`topic-wrap depth-${Math.min(depth, 2)}`}>
      <div className={`topic-row ${done ? "is-done" : ""}`}>
        <button
          className={`check ${done ? "checked" : ""}`}
          onClick={() => onToggle(topic.id)}
          aria-label={`${done ? "Mark incomplete" : "Mark complete"}: ${topic.title}`}
          aria-pressed={done}
        >
          {done && <Check size={13} />}
        </button>
        <button
          className="topic-main"
          onClick={() => hasChildren && setOpen((v) => !v)}
          aria-expanded={hasChildren ? open : undefined}
        >
          <span className="topic-title">{topic.title}</span>
          {topic.description && (
            <span className="topic-description">{topic.description}</span>
          )}
        </button>
        {hasChildren && (
          <button
            className="expand"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Collapse topics" : "Expand topics"}
          >
            <ChevronDown size={16} className={open ? "" : "collapsed"} />
          </button>
        )}
      </div>
      {hasChildren && open && (
        <div className="children">
          {topic.children!.map((child) => (
            <TopicTree
              key={child.id}
              topic={child}
              progress={progress}
              onToggle={onToggle}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
