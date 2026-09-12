import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const html = await readFile(resolve(root, "dist/index.html"), "utf8");
const image = await readFile(resolve(root, "dist/og.png"));
const expectedUrl = "https://lift-van-idee-naar-live.markvanasten.chatgpt.site/";
const expectedImage = `${expectedUrl}og.png`;

const required = [
  `<link rel="canonical" href="${expectedUrl}">`,
  '<meta name="description" content="Digitale gewichtloosheid. Bouw zo ver als je kan denken. Ontdek AI coding en vibe coding: van jouw idee naar een website, met voorbeelden en promptgenerators.">',
  '<meta property="og:type" content="website">',
  '<meta property="og:locale" content="nl_NL">',
  '<meta property="og:site_name" content="Vibe Lift">',
  `<meta property="og:url" content="${expectedUrl}">`,
  `<meta property="og:image" content="${expectedImage}">`,
  '<meta property="og:image:width" content="1200">',
  '<meta property="og:image:height" content="630">',
  '<meta name="twitter:card" content="summary_large_image">',
  `<meta name="twitter:image" content="${expectedImage}">`,
  '<link rel="icon" href="assets/favicon.svg" sizes="any" type="image/svg+xml">',
];

const missing = required.filter((tag) => !html.includes(tag));
if (missing.length) {
  throw new Error(`Ontbrekende deelmetadata:\n${missing.join("\n")}`);
}

const pngSignature = image.subarray(0, 8).toString("hex");
if (pngSignature !== "89504e470d0a1a0a") {
  throw new Error("dist/og.png is geen geldig PNG-bestand.");
}

const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width !== 1200 || height !== 630) {
  throw new Error(`Deelafbeelding is ${width} × ${height}; verwacht 1200 × 630.`);
}

console.log(`Social-preview gecontroleerd: ${width} × ${height}, Open Graph, X en favicon.`);
