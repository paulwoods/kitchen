# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **The homeowner** (primary): plans a galley kitchen remodel and settles every dimension, cabinet, appliance and electrical decision before anything is ordered or built.
- **The cabinet maker**: reads cabinet codes, widths, panels, fillers and the order summary.
- **Contractors and trades** (electrician, plumber, countertop fabricator, installer): read the appliance, electrical and clearance details that affect their work.

## Product Purpose

A single source of truth for one kitchen remodel. Every measurement, cabinet, appliance and decision lives here, and the sketches, documentation and 3D model must agree with each other. Success means nothing is ordered or cut until the pages agree, and every open inconsistency is listed on the issues page.

## Positioning

It is the plan for this one kitchen, not a general kitchen-design tool: real model numbers, real spec-sheet dimensions, dated decisions, and an explicit list of what is still unresolved.

## Operating Context

- Opened locally from the project folder or `python3 -m http.server`; not published.
- Read on a computer while planning, and handed to trades as a reference for quoting and building.
- Pages: `index.html`; sketches (`sketch-island-front.html`, `sketch-wall-front.html`, `sketch-top.html`); 3D model (`model.html`); documentation (`issues.html`, `appliances.html`, `cabinets.html`, `electrical.html`).
- Sketches are drawn on graph paper by `sketch.js` (1 square = 6", bold line every 30").

## Capabilities and Constraints

- Plain static HTML, CSS and JavaScript; no build step. The 3D model loads three.js from a CDN, so it needs a network connection.
- All dimensions in inches only, never feet.
- Each page that lists cabinets holds its own copy of the runs; they must be kept in sync when the layout changes.
- Assumed values (riser thickness, hood depth, appliance depths, counter overhangs) are marked as assumed until confirmed.

## Evidence on Hand

- Appliance model numbers and spec-sheet dimensions in `appliances.html`.
- Electrical requirements in `electrical.html`.
- Cabinet list and order summary in `cabinets.html`.
- Dated decisions and resolved / open inconsistencies in `issues.html`.
- No photos of the existing room, contractor quotes or final cabinet-maker drawings are in the repo; do not invent them.

## Product Principles

1. **One truth.** When a dimension or decision changes, every page that shows it changes with it.
2. **Precise over pretty.** Exact inches, codes and model numbers outrank decoration.
3. **Show what is unsettled.** Assumptions are labeled and open inconsistencies are listed, never hidden.
4. **Readable by trades.** A cabinet maker or electrician should find their numbers without being walked through it.
