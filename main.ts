import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Gate from the bounty kit: /output/entry.txt, UTF-8, 1-200 characters,
// not only whitespace, a single funny line.
const OUT_PATH = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 200;

// One funny line in the voice of a smug self-checkout machine:
// petty about the basket, one twist, no padding.
const ENTRY =
  "Twelve yoghurts and one banana, for balance. Beep — your basket has the nutritional range of a vending machine.";

function validateEntry(text: string): void {
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, gate is ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, ENTRY, "utf8");
  // Read the file back byte-for-byte to prove what the grader will see.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: file differs from entry");
  }
  console.log(`wrote ${[...ENTRY].length} characters to ${OUT_PATH}`);
}

main();
