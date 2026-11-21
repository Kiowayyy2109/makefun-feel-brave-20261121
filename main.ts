import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "Before dawn, a small boat rests on flat water. The lake holds it, dark and even. No wind. No hurry. Rope slack, oars dry, hull steady. It needs no gust to prove it can move. The water holds. When light touches the far shore, it will cross, unhurried.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
