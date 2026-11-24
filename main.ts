// Seventeen Syllables of Debugging — make.fun entry.
// Writes one haiku about debugging (5-7-5, <= 200 chars) to /output/entry.txt.
// The haiku was drafted, syllable-counted by hand, and picked from six
// candidates for the sharpest concrete picture and the hardest turn.
import { mkdirSync, writeFileSync } from "node:fs";

// Syllable counts, verified by hand:
//   "A breakpoint at three"            -> A(1) break-point(2) at(1) three(1) = 5
//   "the watch window shows my name"   -> the(1) watch(1) win-dow(2) shows(1) my(1) name(1) = 7
//   "the suspect was me"               -> the(1) sus-pect(2) was(1) me(1) = 5
// 72 characters including newlines, three lines, well under the 200-char gate.
const haiku = [
  "A breakpoint at three",
  "the watch window shows my name",
  "the suspect was me",
].join("\n");

const text = haiku + "\n";

// Gate check: the sealed scorer requires 1-200 chars, not only whitespace.
if (text.length < 1 || text.length > 200 || text.trim().length === 0) {
  throw new Error(`entry.txt violates the gate: ${text.length} characters`);
}
if (haiku.split("\n").length !== 3) {
  throw new Error("haiku must be exactly three lines");
}
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
console.log(text);
