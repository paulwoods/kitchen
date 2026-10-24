# markdown

# Memory

Store all project memories in this file (not in ~/.claude memory).

## Workflow

- After every change, reload and check the affected pages in a browser (screenshot). Playwright blocks `file:`, so serve the folder with `python3 -m http.server` and delete `.playwright-mcp/` afterwards.

## Kitchen

- Galley kitchen with two sides: **island** and **wall**.
- `index.html` links to both sketches.
- Each side is a sketch: `sketch-island.html`, `sketch-wall.html`. Both use `sketch.js`, which draws a front elevation on graph paper (1 square = 6", bold line = 12").
- Show all dimensions in inches only (never feet).
- Cabinets are listed left to right in each html file as `{ name, code, w, kind }`. `kind` is one of `drawers` (with `n`), `door`, `sink`, `base`, `gap`. Add `cooktop: true` to draw a cooktop on the counter.
- Default sizes: cabinets 34.5" tall, 4.5" toe kick, 1.5" countertop (36" counter height), 1" counter overhang at each end.
- Only label a cabinet with a name when the user gives one.
- Island run (192"): spices DB24-3, cooktop DB36-3, plates DB24-3, trash TRB18FH, sink SB42, dishwasher 24" gap, cabinet a B24-2.
- Assumption not yet confirmed: B24-2 is drawn as one drawer over two doors.
- Wall: no cabinets yet.
