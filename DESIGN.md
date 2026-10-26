---
name: Galley Kitchen
description: The plan for one galley kitchen remodel, on graph paper, in inches.
colors:
  link-blue: "#2a5d9f"
  ink: "#223"
  slate: "#667"
  paper: "#fbfaf5"
  sheet: "#fff"
  rule: "#ccd"
  header-mist: "#eef2f7"
  grid-blue: "#bcd3ea"
  grid-bold: "#8fb2d6"
  maple: "#f3ead9"
  front-cream: "#fffdf7"
  riser-sand: "#e4dccb"
  toe-slate: "#556"
  counter-stone: "#8a8f99"
  steel: "#c9ccd2"
  glass: "#dbe9f2"
  faucet-black: "#2b2b2b"
  brass: "#b08d57"
  tape-yellow: "#f5c400"
typography:
  headline:
    fontFamily: "system-ui, sans-serif"
    fontSize: "2em"
    fontWeight: 700
  title:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1.25em"
    fontWeight: 700
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "system-ui, sans-serif"
    fontSize: "2.2px"
    fontWeight: 400
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "28px"
components:
  link:
    textColor: "{colors.link-blue}"
  table-header:
    backgroundColor: "{colors.header-mist}"
    textColor: "{colors.ink}"
    padding: "8px 10px"
  table-cell:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    padding: "8px 10px"
  sketch-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
---

# Design System: Galley Kitchen

## Overview

**Creative North Star: "The Graph-Paper Plan"**

A homeowner's careful plan, drawn on graph paper and made exact. Every page reads like a sheet pulled from the same folder: warm off-white paper, dark ink, one blue for links, and drawings ruled in pale blue squares. The site is quiet and technical. The numbers do the talking; color, type and space stay out of their way.

Density is moderate. Documentation pages are plain text, lists and bordered tables at a comfortable reading width. Sketches are scaled drawings where one SVG unit is one inch, so every shape is a real measurement. Nothing is decorative: if a color appears, it stands for a material, a state or a link.

**Key Characteristics:**
- Warm paper background, dark blue-black ink, one link blue.
- System font only, default browser hierarchy, no web fonts.
- Flat surfaces with square corners and thin 1px rules.
- Drawings on a 6" grid with a bolder line every 30", measured in inches.
- Material colors in drawings (maple boxes, cream fronts, stone counter, steel appliances) are muted and literal.

## Colors

A near-monochrome paper-and-ink palette with one functional blue, plus a small set of muted material colors used only inside drawings.

### Primary
- **Drafting Blue** (link-blue): every link and nothing else. It marks where you can go, not what matters.

### Neutral
- **Ink** (ink): all body text, headings, outlines in drawings, and the dark strokes of the plan.
- **Pencil Gray** (slate): secondary text: subtitles, captions, dimensions and ruler labels.
- **Plan Paper** (paper): the page background on every page.
- **Clean Sheet** (sheet): table bodies and the sketch sheet, a step brighter than the page.
- **Hairline** (rule): table borders.
- **Header Mist** (header-mist): table header cells.

### Drawing materials
- **Grid Blue** (grid-blue) and **Bold Grid** (grid-bold): the 6" squares and the 30" lines of the graph paper.
- **Maple** (maple): cabinet boxes, panels, shelves.
- **Front Cream** (front-cream): doors and drawer fronts.
- **Riser Sand** (riser-sand): the island riser and the room wall.
- **Toe Slate** (toe-slate): toe kicks.
- **Counter Stone** (counter-stone): the countertop edge in elevation.
- **Steel** (steel): appliances, hood, sink.
- **Glass** (glass): glass cabinet doors.
- **Faucet Black** (faucet-black) with **Brass** (brass): the Kohler matte black and brushed brass faucet.
- **Tape Yellow** (tape-yellow): the blade of the tape measure, at 85% opacity so the drawing shows through.

### Named Rules
**The One Blue Rule.** Drafting Blue is for links only. Never use it for emphasis, headings or decoration.

**The Literal Material Rule.** In drawings, a color names a material. A new element gets the color of what it is made of, not a color that makes it stand out.

## Typography

**Body Font:** system-ui (with sans-serif)

**Character:** The operating system's own sans, used at default browser sizes. It reads like a printed spec sheet and loads nothing.

### Hierarchy
- **Headline** (700, 2em): the page title, one per page.
- **Title** (700, 1.25em): section headings, a 1.25× step over body.
- **Body** (400, 16px, line-height 1.5): text, list items and table cells. Reading pages cap at 760px; table pages at 1100px.
- **Label** (400, 2.2px in drawing units, about 11px on screen): cabinet codes in sketches. Names are bold at 2.4px, dimensions 2px in Pencil Gray.

### Named Rules
**The Inches Rule.** Every dimension is written in inches with the inch mark (36", 66.1875"), never in feet.

## Layout

Pages are single-column documents with a 24px margin and no navigation chrome beyond an "index" link under the title. Page headings match their index link, and every tab reads "Page · Galley Kitchen" (the index is just "Galley Kitchen"). Lists, prose and the index cap at 760px, wide tables at 1100px; sketches run full width. Spacing steps are small and repeated: 4px under a title, 8px in lists and cell padding, 16px before tables, 24px page margin, 28px above section headings.

Sketches are SVG drawn at 5px per inch and scale down to the page width. The grid starts at the left end of the run and the floor (elevations) or the wall (plan), so a bold line always falls on a 30" mark. A vertical ruler on the right labels the important heights or depths.

## Elevation & Depth

Flat. Depth comes from tone, not shadow: Clean Sheet tables and drawings sit on Plan Paper. The only shadow is a soft lift under the sketch sheet so it reads as a sheet laid on the desk.

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: 0 1px 4px #0002`): the sketch SVG only.

## Shapes

Square corners everywhere. Tables use 1px Hairline borders with collapsed edges. Drawings use thin strokes (0.1–0.4 inch) with dashed lines for hidden or under-counter items and dotted lines for upper cabinets seen from above.

## Components

### Links
- **Style:** Drafting Blue, default underline. No hover color change.

### Tables
- **Style:** Clean Sheet body, Header Mist header row, 1px Hairline borders, 8px × 10px cell padding, text aligned left and top. Code and size columns don't wrap.

### Lists
- **Style:** plain bullet lists with 6–8px between items; used for the index and the issues log.

### Sketch Sheet (signature)
- **Style:** a Clean Sheet SVG on graph paper (Grid Blue squares every 6", Bold Grid every 30"), with Sheet lift. Cabinets are labeled below the run: bold name, code, width in Pencil Gray. A ruler on the right marks the toe kick, counter, riser, hood, uppers and ceiling (elevations) or the wall, cabinet fronts and riser (plan).

### Tape measure (sketches)
- **Style:** drag on any sketch to pull a Tape Yellow blade with an Ink hook, ink ticks every inch (every 6" when an inch is under 4px on screen) and an Ink chip with the length in Front Cream, to the nearest 1/16" (≈ when the true value is off the 1/16 marks). Ends snap to drawing edges within 8 screen px, which are drawn bolder while snapped. A near-level or near-plumb drag locks; Shift always locks. The line under the subtitle reads the pointer's position in inches. Tap a tape to remove it; Esc or Clear tapes removes all.

### Status box (index)
- **Style:** a Clean Sheet panel with a 1px Hairline border, 8px × 12px padding, square corners and no shadow. Holds the open-issue count (bold, linked) and the resolved count.

### View buttons (3D model)
- **Style:** native browser buttons in a row under the subtitle. No custom styling.

## Do's and Don'ts

### Do:
- **Do** keep every page on Plan Paper with Ink text and the system font.
- **Do** give every drawing element its material color and every measurement in inches.
- **Do** mark hidden items with dashed lines and upper cabinets in plan with dotted lines.
- **Do** put new documentation in plain lists or Hairline tables at 760px / 1100px width.

### Don't:
- **Don't** use Drafting Blue for anything but links.
- **Don't** add shadows except the sheet lift under drawings.
- **Don't** round corners.
- **Don't** write dimensions in feet.
