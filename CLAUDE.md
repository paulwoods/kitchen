# markdown

# Memory

Store all project memories in this file (not in ~/.claude memory).

## Workflow

- After every change, reload and check the affected pages in a browser (screenshot). Playwright blocks `file:`, so serve the folder with `python3 -m http.server` and delete `.playwright-mcp/` afterwards.

- Git: work on the `develop` branch (do not rename to `main`). Remote `origin` is `git@github.com:paulwoods/kitchen.git` (SSH; HTTPS has no credentials).

## Kitchen

- Galley kitchen with two sides: **island** and **wall**.
- `index.html` has two sections: Sketches (island, wall) and Documentation (`anomalies.html`, `appliances.html`, `cabinets.html`, `electrical.html`). `cabinets.html` documents every cabinet, panel and filler per run plus an order summary; update it whenever the sketches change. `anomalies.html` lists open inconsistencies between the appliance/electrical docs and the sketches; keep it current.
- Each side is a sketch: `sketch-island-front.html`, `sketch-wall-front.html`. Both use `sketch.js`, which draws a front elevation on graph paper (1 square = 6", bold line every 30", measured from the left end of the run and the floor). A ruler on the right marks the toe kick, countertop, shelf tops, tops of the upper cabinets and the 96" ceiling.
- `sketch-island-top.html` is a top view (plan) of the island via `plan(title, run, { riser: true })` in `sketch.js`: counter front at the bottom, depths measured from it. Island counter 25" deep (1" over the 24" cabinets); riser drawn 4.5" thick (assumed); cooktop (31" x 21 1/4") centered on the counter (assumed); sink (33.5" x 19") 2" from the counter front (moved 1" forward, 2026-10-24). Faucet (Kohler K-R30937-BMB) is drawn in both island sketches as `faucet: { h: 22.4375, reach: 9.5, back: 3 }` on the sink item: centered on the SB42, 3" from the riser face (moved 1" back, 2026-10-24).
- Show all dimensions in inches only (never feet).
- Cabinets are listed left to right in each html file as `{ name, code, w, kind }`. `kind` is one of `drawers` (with `n`), `door`, `sink`, `base` (drawer over one door), `oven`, `gap` (with `tag`, e.g. DW/REF), `panel`, `pantry`, `filler` (plain base-height strip). Items with `h` are tall (panels, pantry, fridge space) and get no countertop; the counter covers each stretch of base-height items. Add `cooktop: true` to draw a cooktop on the counter.
- Default sizes: cabinets 34.5" tall, 4.5" toe kick, 3 cm (1.25") quartzite countertop (35.75" counter height), 1" counter overhang at each end.
- Only label a cabinet with a name when the user gives one.
- Island run (192"): spices DB24-3, cooktop DB36-3, plates DB24-3, trash TRB18FH, sink SB42, dishwasher 24" gap, cabinet a B24-2.
- Island hood: Bosch HIB82651UC, drawn over the cooktop as an upper `{ hood: true, w: 42.0625, h: 2.375, at: 66.1875, chimney: 12.125 }`: 42 1/16" x 2 3/8" canopy with its bottom at 66 3/16", and a 12 1/8" wide chimney up to the ceiling (Bosch spec sheet).
- Island riser: a wall behind the island counter, from 35.75" to 42" (bar height), 192" long (the cabinet run, no overhang). Drawn via `sketch(title, run, { riser: 42 })`. The island counter has a 1" overhang at each end (assumed).
- B24-2 is one drawer over one door (confirmed).
- Wall run (192"): TEP, fridge 36" gap (W362424 above, hung at 72"; items take `upper: [ { code, h, at, glass } | { shelf: true, at } | { filler: true, h, at } | { microwave: true, w, h, at } | { coffee: true, w, h, at } | { appliance, w, h, at, dx } ]`), TEP, pantry PC36 (36" wide; upper door pair over shelves, 30" lower door pair over three roll-out trays, in line with the base cabinets), 1.5" filler (96" tall, to the ceiling), oven B33 (33" wide, per OW-B33-FH; above it a 22" x 13" countertop microwave on the counter, shelves at 51" and 66" (shelf tops) and a W3315 glass cabinet at 81"), 1.5" filler (with a strip above the counter from 35.75" to the ceiling), Toaster DB27-3, Air Fryer DB27-3, Coffee DB27-3 (each with a W2727 at 54" and a W2715 glass cabinet at 81" above it; on the counter: Breville BOV900BSS toaster oven 21.5" W x 12.7" H over Toaster, Ninja Air Fryer XL AF150 11" W x 14.75" H over Air Fryer, Breville BDC650BSS coffee maker 8.5" W x 16.3" H over Coffee; 18.25" clear between counter and W2727).
- Ceiling is 96". TEP panels, the PC36 pantry and the filler left of the oven are 96" tall (to the ceiling).
- TEP panels are 1.5" wide; the fridge is drawn 70" tall (confirmed).
- Decisions (2026-10-24) that override `appliances.html`: the cooktop base is a DB36-3 (not ASB36); there is only one Cabinet A, at the right end of the island; the oven junction box goes in the Toaster cabinet; the toaster oven and air fryer sit on the counter over their own cabinets and get pulled forward, out from under the W2727s, to use them.
