# Memory

Store all project memories in this file (not in ~/.claude memory).

## Workflow

- After every change, reload and check the affected pages in a browser (screenshot). Playwright blocks `file:`, so serve the folder with `python3 -m http.server` and delete `.playwright-mcp/` afterwards.

- Git: work on the `develop` branch (do not rename to `main`). Remote `origin` is `git@github.com:paulwoods/kitchen.git` (SSH; HTTPS has no credentials).

## Kitchen

- Folders (2026-10-31): `index.html`, `nav.js` and `favicon.svg` stay at the root; `drawings/` holds the sketches, `sketch.js` and `model.html`; `docs/` the documentation pages, `lighting.md` and `order-summary.js`; `pricing/` the price, comparison and quote pages with their `quote-*.js` data files; `cabinets/` (vendor notes) and `manuals/` (PDFs). Pages in a folder link with relative paths (`../index.html`, `../docs/cabinets.html`) and load `../nav.js`, which builds its links from its own location. File names below are given without their folder.
- Galley kitchen with two sides: **island** and **wall**.
- Where things are recorded: sizes, positions and models in `cabinets.html`, `appliances.html` and `electrical.html`; decisions and their history in `issues.html`; assumptions in those pages or in a comment beside the value in the drawing code. Add new detail there, not here.

### Keeping pages in step

- `index.html` is a cover sheet: plan date, a status box, then Drawings and model (top view, island front, wall front, `model.html`), Documentation (`issues.html`, `cabinets.html`, `appliances.html`, `electrical.html`, `lighting.html`, `review1.html`), Pricing (`price.html`, `comparison.html`, quote pages) and For the trades (cabinet maker, electrician, plumber, countertop; links into `cabinets.html#island`, `#wall`, `#order-summary`). Keep those trade lines true when the docs change.
- `cabinets.html` documents every cabinet, panel and filler per run plus an order summary (its rows in `order-summary.js`); update it whenever the sketches change.
- `issues.html` lists open inconsistencies between the appliance/electrical docs and the sketches under "Open" (or "None, as of <date>") and dated decisions under "Resolved"; keep it current. Open items go in an `<ol>` right after `h2#open` (a `<p>` when there are none), resolved items in the `<ul>` after `h2#resolved`: `index.html` counts them with `fetch()` and takes the latest date in the page as "Plan as of". Its typed status text is only the fallback when opened from the folder (`file:`), so update it too.
- `sketch-top.html` and `model.html` have their own copies of the runs; update them when the sketches change.
- Review 1 answers are written under each item in `review1.html` as a `p.answer` "Answer (date):".
- Every page starts with `<html lang="en">` and a viewport meta, followed by `<script src="nav.js" defer></script>`: a row of links across the top, the current page in bold. `nav.js` also adds the favicon. Keep its list in step with `index.html`; it goes inside `model.html`'s header so the canvas height still fits. On phones (under 600px) the cabinet and appliance tables stack each row. `model.html` sizes its canvas from the viewport (`clientWidth`), not `innerWidth`.
- Page headings match their index link and tabs read "Page · Galley Kitchen".

### Pricing

- Quotes are `quote-<vendor>.html` pages with a `quote-<vendor>.js` data file (`quotes.push({ url, label, rank, lines, resized })`; the quote page shows the same file). A new quote needs its script tag added to `comparison.html`, loaded with plain `<script src>` so it works from `file:`.
- `comparison.html`: one row per order-summary line, one column per quote, in `rank` order (1 first; ranks are set by the user), each cell the sale and regular price × qty and the vendor code, red when its size differs from the plan (the quote's `resized` list of "planned / code" lines, which also gives the quote table its "size" column). It stays pre-discount.
- `price.html`: `[item, qty, each, notes]` rows, `null` each = TBD. Cabinets are the Colonial sale total read from `quote-cabinets-colonial.js`.
- Each quote page has a Construction section (a "What sets it apart" line, then box, back, fronts, shelves, drawer boxes and inside sizes, glides, hinges, sides, warranty).
- Vendors sell no dishwasher front: the `DW panel` order-summary row is priced as the vendor's base decorative door or end panel (their DWR panels are 3" returns).

### Drawing conventions

- Show all dimensions in inches only (never feet).
- Only label a cabinet with a name when the user gives one.
- Default sizes: cabinets 34.5" tall, toe kick 4.5" tall and 3" deep, 3 cm (1.25") quartzite countertop (35.75" counter height), 96" ceiling, 1" counter overhang at each end.
- Front sketches (`sketch.js`, `sketch()`): graph paper, 1 square = 6", bold line every 30", measured from the left end of the run and the floor. Upper cabinet codes go in the margin above the ceiling, the top cabinet first; a ruler is on the right. Every sketch has a tape measure (`tape()`, set up by `page()`).
- `sketch-top.html` (`plan(title, island, wall)` in `sketch.js`): island at the top facing down, wall run at the bottom facing up, flipped about its own length so it reads right to left and its Coffee end lines up with the island's spices end, also in `model.html`. 48" aisle between cabinet fronts, depths measured from the wall. Upper cabinets are dotted (`d` deep, else 12"). Countertop appliances are not drawn.
- `sketch-top.html` also passes `opts.extra` to `plan()` for the work areas and lights (a callback `plan()` hands `text` and page-coordinate helpers `ix`/`iy`/`wx`/`wy`). Light groups: T task, A ambient, X accent (toe kick and glass cabinets), UC under-cabinet; each has a legend checkbox, off by default, that hides its marks, arrows and shadows; a `people` checkbox, also off by default, hides the 74" people and all the shadows (class `l-T` etc.).
- Island positions (faucet, button, sink, cooktop) are measured from the cabinet backs. The counter is 25" deep plus a strip past the cabinet backs: 19 1/2" behind spices, cooktop and plates (15" past the back wall; `back: 19.5` on those items), 5 1/2" behind the rest (the `back` argument of `side()` in `sketch.js` and `model.html`). The hood is centered on the 25" counter; the cooktop is 2" back from centered.
- Cabinets are listed left to right in each html file as `{ name, code, w, kind }`. `kind` is one of `drawers` (with `n`), `door`, `sink`, `base` (drawer over one door), `oven` (the tall OVD3393, with the HBL87M53UC combination oven in it), `gap` (with `tag`, e.g. DW/REF), `panel`, `pantry`, `space` (empty and unlabeled, with `h`). Items with `h` are tall and get no countertop; the counter covers each stretch of base-height items.
- Other item fields: `upper: [ { code, h, at, glass, w, dx, d } | { appliance, w, h, at, dx, off } | { coffee: true, w, h, at, off } | { light, w, h, at, inside } | { hood: true, w, h, at, chimney } | { riser: true, h, at, w, dx, d, side } ]`; `inside: [{ label, w, h, at, dx, within }]` for things hidden in a cabinet, drawn dashed (center `at` off the floor, `dx` from the item's left end); `cooktop`, `falseTop`, `dishwasher`, `fridge`, `bowl`, `faucet`, `airSwitch`, `receptacle`, `backReceptacle`, `back`, and `drop: n` (moves labels n rows down). `off: true` starts an appliance hidden.
- `sketch()` options on the wall front: `toggles` (appliance checkboxes), `walls` (the side wall at Coffee: drops the counter's end overhangs, moves the ruler right).
- Colors: Colonial Maple Alabaster #ebeae6 on the upper cabinets, pantry, OVD3393, REP panels and skin (`.alabaster`, `M.alabaster`); Haze #bec6bd on everything else (`.box`/`.front`, `M.box`/`M.front`/`M.base`). All pulls are black, 8" long (`.pull`, `M.pull`). The door's recessed panels are not drawn.

### The runs

- Island (192"): spices DB24-3, cooktop DB36-3 (false top drawer), plates DB24-3, trash TRB18FH, sink SB42, dishwasher 24" gap, cabinet a B24-2. A 4 1/2" back wall (2x4 studs, 1/2" drywall both sides, 34.5" tall) runs the full length, with five receptacles facing away from the aisle in it, and the cooktop junction box and trash cabinet receptacle opening into those cabinets; no riser.
- Wall (190.25"): FP2496 skin, REP2496-1.5, 1/2" space, fridge 36" gap, 1/2" space (RW3721 above, 37" wide across the fridge and both spaces), REP2496-1.5, pantry UT362493ROT4 (93" tall, 4 doors, 4 roll-out trays), oven OVD3393 (93" tall, HBL87M53UC combination oven), Toaster DB27-3, Air Fryer DB27-3, Coffee DB27-3 (each W2727 and W2712 glass above), then the side wall.
