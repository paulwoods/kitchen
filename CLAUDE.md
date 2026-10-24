# markdown

# Memory

Store all project memories in this file (not in ~/.claude memory).

## Workflow

- After every change, reload and check the affected pages in a browser (screenshot). Playwright blocks `file:`, so serve the folder with `python3 -m http.server` and delete `.playwright-mcp/` afterwards.

- Git: work on the `develop` branch (do not rename to `main`). Remote `origin` is `git@github.com:paulwoods/kitchen.git` (SSH; HTTPS has no credentials).

## Kitchen

- Galley kitchen with two sides: **island** and **wall**.
- `index.html` has two sections: Sketches (island, wall) and Documentation (`anomalies.html`, `appliances.html`, `electrical.html`; HTML copies of `appliances.md` and `electrical.md` — keep both in sync). `anomalies.html` lists open inconsistencies between the appliance/electrical docs and the sketches; keep it current.
- Each side is a sketch: `sketch-island.html`, `sketch-wall.html`. Both use `sketch.js`, which draws a front elevation on graph paper (1 square = 6", bold line every 30", measured from the left end of the run and the floor).
- Show all dimensions in inches only (never feet).
- Cabinets are listed left to right in each html file as `{ name, code, w, kind }`. `kind` is one of `drawers` (with `n`), `door`, `sink`, `base`, `oven`, `gap` (with `tag`, e.g. DW/REF), `panel`, `pantry`. Items with `h` are tall (panels, pantry, fridge space) and get no countertop; the counter covers each stretch of base-height items. Add `cooktop: true` to draw a cooktop on the counter.
- Default sizes: cabinets 34.5" tall, 4.5" toe kick, 3 cm (1.25") quartzite countertop (35.75" counter height), 1" counter overhang at each end.
- Only label a cabinet with a name when the user gives one.
- Island run (192"): spices DB24-3, cooktop DB36-3, plates DB24-3, trash TRB18FH, sink SB42, dishwasher 24" gap, cabinet a B24-2.
- Assumption not yet confirmed: B24-2 is drawn as one drawer over two doors.
- Wall run (183"): TEP, fridge 36" gap, TEP, pantry PC30, oven B33 (33" wide, per OW-B33-FH), Toaster DB27-3, Air Fryer DB27-3, Coffee DB27-3.
- Wall assumptions not yet confirmed: TEP 1.5" wide × 84" tall; PC30 84" tall; fridge drawn 70" tall.
- Decisions (2026-10-24) that override `appliances.md`: the cooktop base is a DB36-3 (not ASB36); there is only one Cabinet A, at the right end of the island.
