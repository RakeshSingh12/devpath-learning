import { useEffect, useState } from "react";
import type { ProgressMap } from "../types/roadmap";
const KEY = "devpath-progress-v1";
function load(): ProgressMap {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}
export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>(load);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress));
    } catch {
      /* storage may be disabled */
    }
  }, [progress]);
  const toggle = (id: string) => setProgress((p) => ({ ...p, [id]: !p[id] }));
  const reset = (ids: string[]) =>
    setProgress((p) => {
      const next = { ...p };
      ids.forEach((id) => delete next[id]);
      return next;
    });
  return { progress, toggle, reset };
}
