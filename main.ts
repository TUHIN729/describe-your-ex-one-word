// describe-your-ex-one-word: writes the one-word verdict to /output/entry.txt
// The verdict is a single word, borrowed from product recalls: the ex was
// a defective unit, pulled off the market. One word, no punctuation tricks.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Recalled";

// Gate: the entry must be exactly one word, 1-111 UTF-8 characters,
// not only whitespace, with nothing else attached.
if (!/^\S{1,111}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
