import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "public");
const entries = [
  "assets",
  "admin.css",
  "admin.html",
  "admin.js",
  "admin.webmanifest",
  "app.js",
  "icon-192.png",
  "icon-512.png",
  "index.html",
  "manifest.webmanifest",
  "styles.css",
  "sw.js",
  "version.json",
];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const entry of entries) {
  await cp(join(root, entry), join(outDir, entry), { recursive: true });
}
