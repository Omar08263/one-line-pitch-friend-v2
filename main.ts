// One Line Pitch Friend v2 — entry for "A Day of One-Line Pitches" on make.fun.
// Writes one sentence (1-240 chars) to /output/entry.txt.
// Node 22+. No dependencies, no network, plain static code only.
import { mkdirSync, writeFileSync, chmodSync, readFileSync } from "node:fs";

const LINE =
  "Your app idea, in your own words, becomes a real app you can tap tonight — just tell an AI agent on make.fun, free, no code, and walk away if you don't love it.";

// Gate guard: the entry must be 1-240 characters, not only white space.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);

// Read-back check: what the gate will see must be exactly the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the pitch line");
}
console.log(`wrote /output/entry.txt (${LINE.length} chars, verified)`);
