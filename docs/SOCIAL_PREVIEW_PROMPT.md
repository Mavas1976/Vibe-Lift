# Vibe Lift social preview — prompt and provenance

## Generation tool

- Tool: built-in `image_gen`
- Calls: 1
- Mode: generation (no input images)
- Taxonomy: `ads-marketing`
- Generated source: `C:\Users\markv\.codex\generated_images\01a09599-d468-70d1-80f6-feb2f93602f7\exec-ad5dc40d-f11c-421e-94a4-2091f560e1d2.png`
- Generated source dimensions: 1730 × 909 px
- Final output: `C:\dev\VIBE\visual-assets\vibe-lift-social-preview.png`

## Exact prompt supplied to the tool

```text
Use case: ads-marketing
Asset type: final 1200 × 630 landscape social-sharing preview card for the Dutch brand Vibe Lift.

Primary request: Create one premium editorial 3D social card that expresses strong digital weightlessness. The central artwork is an original translucent white-glass ribbon floating freely and forming an upward, open V / lift gesture. Add only a few floating pearl and polished chrome spheres plus a few paper-light abstract petals. Nothing touches a floor; every object is suspended.

Scene/backdrop: seamless pale ice-blue background, exact visual target #eff5fc, airy and spacious, with no horizon line, no room, no floor, no pedestal and no platform.

Style/medium: refined high-end editorial 3D render; elegant, minimal, tactile translucent glass, soft refraction, restrained glossy highlights, subtle depth and soft floating shadows; premium contemporary Dutch digital-design campaign.

Composition/framing: exact 1200 × 630 landscape canvas, 1.9048:1 ratio. Keep all text entirely within the left 45% of the canvas, left-aligned, with at least 90 px safe margin from the left and at least 75 px safe margin from top and bottom. Place the floating ribbon artwork entirely within the right 50%, with ample breathing room from every edge. Preserve clean negative space around the copy so common social crops keep every character. No overlap between artwork and text.

Lighting/mood: soft luminous studio lighting with an ethereal weightless feel; crisp enough for thumbnail viewing; sophisticated rather than playful.

Color palette: pale ice-blue #eff5fc background; deep navy #192d4d typography; translucent white glass; pearl white and chrome; only tiny restrained peach accents.

Materials/textures: smooth optical white glass ribbon, translucent edges, pearl and mirror-chrome spheres, very thin matte paper petals.

Text (verbatim, render exactly once each and in this exact order):
"Vibe Lift"
"Digitale gewichtloosheid."
"Van idee naar een live website met AI."

Typography: crisp modern sans-serif, deep navy #192d4d, highly legible. The headline “Vibe Lift” is the largest and boldest. The subheading “Digitale gewichtloosheid.” is smaller but prominent. The supporting line “Van idee naar een live website met AI.” is smallest but still easily readable. Use normal Dutch capitalization and punctuation exactly as written.

Exact-text contract: render V-i-b-e [space] L-i-f-t; D-i-g-i-t-a-l-e [space] g-e-w-i-c-h-t-l-o-o-s-h-e-i-d followed by one period; V-a-n [space] i-d-e-e [space] n-a-a-r [space] e-e-n [space] l-i-v-e [space] w-e-b-s-i-t-e [space] m-e-t [space] A-I followed by one period. No duplicate text, no missing accents, no substitutions, no extra punctuation.

Constraints: one finished card only; generous safe margins; all text fully visible; clean hierarchy; artwork visually supports an upward lift gesture; no cropping of text or ribbon.

Avoid: any other words, letters, numbers, logos, monograms, watermarks, interface chrome, fake badges, labels, captions, tiny text, signatures, extra decorative typography, floor, pedestal, platform, horizon line, people, devices, screens, buildings, clutter.
```

## Finalization

The final 1200 × 630 px canvas uses a clean 70 px background strip from the generated source, stretched across the canvas. Source pixels `x=900..1729` were fitted into the right-side rectangle `x=600..1199`, with a 120 px feather at the left edge. The three approved lines were then typeset deterministically in Segoe UI using `#192d4d`: 74 px bold at `(84,190)`, 34 px bold at `(84,315)`, and 24 px regular at `(84,384)`. Their measured right edges are at or before `x=514`, inside the 540 px left-45% boundary. This guarantees the saved copy exactly matches the requested capitalization and punctuation. The generated 3D artwork remains the sole visual source.
