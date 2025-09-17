// Simple Gulf Arabic tokenization + normalization
export function extractWords(text) {
  return text
    .replace(/[^\u0600-\u06FF\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.trim());
}

