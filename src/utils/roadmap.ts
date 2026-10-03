import type { Roadmap, Topic } from "../types/roadmap";
export function flattenTopics(topics: Topic[]): Topic[] {
  return topics.flatMap((t) => [
    t,
    ...(t.children ? flattenTopics(t.children) : []),
  ]);
}
export function getRoadmapProgress(
  roadmap: Roadmap,
  progress: Record<string, boolean>,
) {
  const all = flattenTopics(roadmap.topics);
  const done = all.filter((t) => progress[t.id]).length;
  return {
    done,
    total: all.length,
    percent: all.length ? Math.round((done / all.length) * 100) : 0,
  };
}
