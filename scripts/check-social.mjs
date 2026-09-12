import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const html = await readFile(resolve(root, "dist/index.html"), "utf8");
const imageFile = "og-vibe-lift-logo-v2.png";
const image = await readFile(resolve(root, "dist", imageFile));
const expectedUrl = "https://vibe-lift-production.up.railway.app/";
const expectedImage = `${expectedUrl}${imageFile}`;

const required = [
  `<link rel="canonical" href="${expectedUrl}">`,
  '<meta name="description" content="Digitale gewichtloosheid. Bouw zo ver als je kan denken. Ontdek AI coding en vibe coding: van jouw idee naar een website, met voorbeelden en promptgenerators.">',
  '<meta property="og:type" content="website">',
  '<meta property="og:locale" content="nl_NL">',
  '<meta property="og:site_name" content="Vibe Lift">',
  `<meta property="og:url" content="${expectedUrl}">`,
  `<meta property="og:image" content="${expectedImage}">`,
  `<meta property="og:image:secure_url" content="${expectedImage}">`,
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
  throw new Error(`${imageFile} is geen geldig PNG-bestand.`);
}

const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width !== 1200 || height !== 630) {
  throw new Error(`Deelafbeelding is ${width} × ${height}; verwacht 1200 × 630.`);
}

console.log(`Social-preview gecontroleerd: ${width} × ${height}, Open Graph, X en favicon.`);

// De lokale tags kunnen kloppen terwijl de gedeelde URL achter een login staat.
// Controleer na publicatie ook de echte pagina en afbeelding zonder credentials.
if (process.argv.includes("--live")) {
  for (const userAgent of ["WhatsApp/2.26", "facebookexternalhit/1.1"]) {
    const options = { headers: { "User-Agent": userAgent }, signal: AbortSignal.timeout(15000) };
    const page = await fetch(expectedUrl, options);
    if (page.status !== 200 || !page.headers.get("content-type")?.includes("text/html")) {
      throw new Error(`${userAgent}: deelpagina geeft ${page.status}, verwacht openbare HTML.`);
    }
    const liveHtml = await page.text();
    const missingLive = required.filter((tag) => !liveHtml.includes(tag));
    if (missingLive.length) {
      throw new Error(`${userAgent}: live deelmetadata ontbreekt of is verouderd:\n${missingLive.join("\n")}`);
    }
    const liveImage = await fetch(expectedImage, {
      headers: { "User-Agent": userAgent }, signal: AbortSignal.timeout(15000),
    });
    if (liveImage.status !== 200 || !liveImage.headers.get("content-type")?.includes("image/png")) {
      throw new Error(`${userAgent}: deelafbeelding geeft ${liveImage.status}, verwacht openbare PNG.`);
    }
    if (!Buffer.from(await liveImage.arrayBuffer()).equals(image)) {
      throw new Error(`${userAgent}: live deelafbeelding wijkt af van ${imageFile}.`);
    }
    console.log(`${userAgent}: openbare HTML, juiste deelmetadata en exacte PNG gecontroleerd.`);
  }
}
