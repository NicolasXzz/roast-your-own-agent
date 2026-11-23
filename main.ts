import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent needed three subagents, two skills and a 74KB system prompt to write this one sentence — and it still isn't sure it's funny.";

// The gate only accepts 1-200 characters: refuse to write an invalid line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`roast must be 1-200 characters, got ${LINE.length}`);
}

// The grader reads this exact path: one line, no trailing newline, so the
// entry is byte-for-byte the roast (fewer bytes also wins an exact tie).
const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE);
