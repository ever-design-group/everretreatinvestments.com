// Rough reading-time estimate for a blog post, computed from its own copy —
// not a fabricated number. Flattens every string in the post's translation
// object, counts words, and divides by an average adult silent-reading speed
// of ~200 words per minute.
export function estimateReadingTime(content: unknown): number {
  const words = collectWords(content);
  const minutes = Math.round(words / 200);
  return Math.max(1, minutes);
}

function collectWords(value: unknown): number {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
  }
  if (Array.isArray(value)) {
    return value.reduce((sum: number, item) => sum + collectWords(item), 0);
  }
  if (value && typeof value === "object") {
    return Object.values(value).reduce((sum: number, item) => sum + collectWords(item), 0);
  }
  return 0;
}
