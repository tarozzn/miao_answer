import { readFile, writeFile } from "node:fs/promises";

const source = await readFile(new URL("../app.js", import.meta.url), "utf8");
const start = source.indexOf("const answerBook = ");
const end = source.indexOf("\n\nconst matchRules");

if (start < 0 || end < 0) {
  throw new Error("没有找到 answerBook 数据");
}

const objectSource = source.slice(start + "const answerBook = ".length, end).replace(/;\s*$/, "");
const answerBook = Function(`"use strict"; return (${objectSource});`)();
const rows = Object.entries(answerBook.oracleAnswers).flatMap(([mood, answers]) =>
  answers.map((text) => ({ mood, text })),
);

function sql(value) {
  return String(value).replace(/'/g, "''");
}

const values = rows.map((row) => `('${sql(row.mood)}', '${sql(row.text)}', true)`).join(",\n");
const output = `-- Run supabase-schema.sql first.\n-- This seed imports ${rows.length} oracle answers from app.js.\n\ninsert into answers (mood, text, active)\nvalues\n${values};\n`;

await writeFile(new URL("../supabase-seed-answers.sql", import.meta.url), output, "utf8");
console.log(`Generated supabase-seed-answers.sql with ${rows.length} answers.`);
