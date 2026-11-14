// Revision C · 2026-11-13 (raise both when a size or a run changes)
// The kitchen, one source for the drawings and the docs. Inches. A plain script (not a module) so the pages still work when opened from the folder.
// Text pages show these values with <span data-k="name or expression">fallback</span> (nav.js fills them in, e.g. data-k="counter + seat").
const DIMS = {
  toe: 4.5,        // toe kick height (3" deep)
  box: 34.5,       // base cabinet height
  top: 1.25,       // 3 cm quartzite countertop
  depth: 24,       // base cabinet box
  front: 0.5,      // door and drawer fronts (owner, 2026-11-09)
  counter: 25,     // countertop depth: 1" past the cabinet boxes, 1/2" past the fronts (2026-11-09)
  aisle: 56,       // between the finished countertop edges, the required minimum (2026-11-09: keeps the wall behind the wall run on the line of the old kitchen wall; was 56 1/2" between the door and drawer faces from 2026-11-08)
  ceiling: 96,
  wall: 4.5,       // stud walls: 2x4 studs, 1/2" drywall each side (the island's back wall, the side wall, the room wall as drawn)
  seat: 19.5,      // island counter past the cabinet backs behind spices, cooktop and plates (the seating overhang)
  islandBack: 5.5, // island counter past the cabinet backs elsewhere: the back wall, then 1"
  cooktopV: 10.5,  // cooktop and hood centers from the island cabinet backs (2026-11-05)
  outlet: 44,      // center of a wall receptacle off the floor (assumed)
  stools: [14, 42, 70], // counter stool centers from the island's left end, behind spices, cooktop and plates
};
DIMS.counterH = DIMS.box + DIMS.top; // counter height
DIMS.faces = DIMS.aisle + 2 * (DIMS.counter - DIMS.depth - DIMS.front); // between the door and drawer faces across the aisle

// The two runs, the one source for every drawing (the three sketches in sketches.html, and model.html).
// Left to right as seen from the aisle. Each view draws the fields it needs and ignores the rest; fields are listed in CLAUDE.md.
const RUNS = {
  island: [
    { note: `Three-drawer base: 6" top drawer over two equal deep drawers. 1" counter overhang at the left end of the island.`,
      name: 'spices',    code: 'DB24-3',  w: 24, kind: 'drawers', n: 3, back: DIMS.seat, backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 29, dx: 12 }], // GFCI on the island's back wall, behind the cabinet (height assumed)
      upper: [ { spot: true, w: 3, h: 5.625, at: 87.875, dx: 12 } ] }, // VANoopee B0BRMX76K2 at a task light mark on the island top, aimed straight down: head 2.99" x 5.60" per the listing; bottom 87 7/8" off the floor assumes a 1" canopy and 1 1/2" stem
    { note: `Three-drawer base under the Bosch NIT8061UC induction cooktop (decided 2026-10-24). The cooktop body drops 4 1/8" below the counter and needs a 1" air gap, which takes the top drawer's space: the top drawer is a false front (fixed, no drawer box; decided 2026-10-25). The cooktop's junction box (240 V 30 A, hardwired) goes in the back wall behind the cabinet, 3" from its left side, centered 29.5" off the floor behind the false front, below the cooktop's 4" (to 31.75") and above the middle drawer box (moved up from 25.75" 2026-11-11), through a cutout in the cabinet back (2026-11-02); its cover is reached by taking out the middle drawer and reaching up, or by lifting out the cooktop. A 120 V GFCI goes in the back wall behind the cabinet, facing away from the aisle, centered at 29" (2026-11-11).`,
      name: 'cooktop',   code: 'DB36-3',  w: 36, kind: 'drawers', n: 3, cooktop: true, falseTop: true, back: DIMS.seat, backReceptacle: true,
      inside: [{ label: 'j box', w: 4, h: 4, at: 29.5, dx: 3 }, // in the island's back wall, through a cutout in the cabinet back
                { label: '120v', w: 2.75, h: 4.5, at: 29, dx: 18 }, // GFCI on the island's back wall, behind the cabinet, facing away from the aisle (height assumed)
                { label: '', w: 28.875, h: 4.125, at: 32.4375, dx: 18 }], // NIT8061UC body: cutout width, 4 1/8" below the counter
      upper: [ { hood: true, w: 41.5, h: 2, at: 66.1875, chimney: 13.375, chimneyD: 10.625 } ] }, // Proline PLFI 544-42
    { note: `Three-drawer base, same as spices.`,
      name: 'plates',    code: 'DB24-3',  w: 24, kind: 'drawers', n: 3, back: DIMS.seat, backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 29, dx: 12 }] }, // GFCI on the island's back wall, behind the cabinet (height assumed)
    { url: 'https://www.cabinets.com/b18-trash-bda304-frameless-colonial-maple-haze-base-trash-cabinet-2-container-frameless-assembled-kitchen-cabinet.html',
      note: `Base trash cabinet (B18-BDA304, changed from the TRB18FH 2026-11-13): a 6" drawer over a pull-out: two bins, 35 quarts in all, front to back on a tray fixed to the door, which pulls out on soft-close undermount slides (drawing of the cabinet, 2026-11-13). Across the aisle from the oven door. A 120 V receptacle goes in the back wall behind the cabinet, centered 21" off the floor, through a cutout in the cabinet back (2026-11-02).`,
      name: 'trash',     code: 'B18-Trash', w: 18, kind: 'base', trash: true, backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 21, dx: 9 },
                { label: '120v', w: 2.75, h: 4.5, at: 29, dx: 9 }], // both in the island's back wall: the first opens into the cabinet, the second faces away from the aisle
      upper: [ { spot: true, w: 3, h: 5.625, at: 87.875, dx: 0 } ] },
    { note: `Sink base: false front over two doors. Holds the Ruvati RVH6222ST undermount sink (needs ≥ 36"), the InSinkErator disposal, the trap and the dishwasher drain loop. A 120 V receptacle goes inside at the bottom left, with the disposal air switch's power module plugged into it (2026-10-25). A 120 V GFCI goes in the back wall behind the cabinet, facing away from the aisle, centered at 29" (2026-11-04).`,
      name: 'sink',      code: 'SB42',    w: 42, kind: 'sink', falseTop: true, backReceptacle: true, airSwitch: { dx: 12.625, back: 2 },
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 9, dx: 3 },
                { label: 'air sw', w: 4.375, h: 4.375, at: 9, dx: 8, within: true }, // STS-OO power module, plugged into the 120v, the disposal plugs into it
                { label: 'disposal', w: 8.25, h: 12.25, at: 18.5, dx: 11.3125, within: true }, // InSinkErator 81138K: 12 1/4" tall, 8 1/4" across, under the drain (spec sheet in manuals/)
                { label: '120v', w: 2.75, h: 4.5, at: 29, dx: 21 }], // GFCI on the island's back wall, behind the cabinet (height assumed)
      // Ruvati RVH6222ST bowl opening: w wide, left/right deep below the counter at each end (sloped bottom), d front to back, v from the cabinet backs
      // (spec sheet, manuals/RVH6222ST.pdf: 10" at the drain end, 9 1/5" at the other; centered in its 33.5" x 19" outline, 2" from the counter front), ledge: workstation ledges, drain: from the item's left end, 6 1/4" in from the bowl's left wall
      bowl: { w: 31.875, left: 10, right: 9.2, d: 17.375, v: 4.8125, ledge: 0.6875, drain: 11.3125 },
      faucet: { h: 22.4375, reach: 9.5, back: 2 }, // Kohler K-R30937-BMB, 2" from the cabinet backs, centered between them and the sink's back edge at 4"; InSinkErator STS-OO button 8 3/8" left of it, centered between the sink's left edge and the faucet
      upper: [ { spot: true, w: 3, h: 5.625, at: 87.875, dx: 21 } ] },
    { orders: 'DW panel', role: 'dishwasher front (Bosch SHV78CM3N, panel-ready)', note: `Opening for the Bosch SHV78CM3N panel-ready dishwasher (cutout 24 × 33 7/8 × 24). Not a cabinet, but the cabinet maker supplies its door panel; its pull is the Berenson 9020-4055-P.`,
      name: 'dishwasher', code: '24" gap', w: 24, kind: 'gap', tag: 'DW', dishwasher: true, backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 29, dx: 12 }] }, // on the island's back wall, behind the dishwasher
    { note: `Base cabinet at the right end of the island; the only Cabinet A (decided 2026-10-24). One drawer over one door (confirmed 2026-10-24). 1" counter overhang at the right end.`,
      name: 'cabinet a', code: 'B24-2',   w: 24, kind: 'base', backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 29, dx: 12 }], // on the island's back wall
      upper: [ { spot: true, w: 3, h: 5.625, at: 87.875, dx: 0 } ] },
  ],
  wall: [ // `h` marks a tall item (no countertop)
    { role: "skin on the left REP's exposed side", note: `Skin panel on the left side of the REP2496-1.5, the run's exposed end (2026-10-28; 1/4" thick, assumed).`,
                         code: 'FP2496',  w: 0.25, kind: 'panel', h: 96, drop: 1 }, // skin on the REP's exposed left side, 1/4" thick (assumed)
    { role: 'each side of the Fridge', note: `Refrigerator end panel, floor to ceiling, left of the fridge (replaced the TEP 2026-10-28).`,
                         code: 'REP2496-1.5', w: 1.5, kind: 'panel', h: 96 },
    { note: `Clear space between the panel and the fridge, up to the RW3721 (2026-11-02).`,
      kind: 'space', w: 0.5, h: 96 }, // 1/2" clear between the panel and the fridge
    { note: `Space for the Frigidaire PRFC2383AF (70" tall with hinges). The panels stand 37" apart with the spaces on either side. On the wall behind it: the receptacle and a recessed ice maker outlet box (<a href="selections.html">Selections</a>).`,
      name: 'Fridge',    code: '36" gap', w: 36,  kind: 'gap', h: 70, tag: 'REF', fridge: true, receptacle: true, receptacleAt: 12, d: 28.5, // 28 1/2" deep with doors
      inside: [{ label: 'ice maker', w: 5, h: 6, at: 12, dx: 29 }], // recessed ice maker outlet box behind the fridge (size and spot assumed)
      upper: [{ note: `Over the fridge and the two spaces, panel to panel, 72 5/16"–93" (decided 2026-11-03; replaced the W362424 and its two fillers). 2 5/16" above the fridge, with riser molding above it to the ceiling. 24" deep to line up with the fridge. The panels have to stand exactly 37" apart at this height, with nothing to scribe.`, code: 'RW3721', w: 37, dx: -0.5, h: 20.6875, at: 72.3125, d: 24 }, { riser: true, w: 37, dx: -0.5, h: 3, at: 93, d: 24 }] },
    { note: `Clear space between the fridge and the panel, up to the RW3721 (2026-11-02).`,
      kind: 'space', w: 0.5, h: 96 },
    { role: 'each side of the Fridge', note: `Refrigerator end panel, floor to ceiling, between the fridge and the pantry (replaced the TEP 2026-10-28).`,
                         code: 'REP2496-1.5', w: 1.5, kind: 'panel', h: 96 },
    { note: `Pantry, 93" tall, its top in line with the RW3721 and the glass cabinets (decided 2026-11-03; was the 84" UT362484ROT4 with a W361224 glass cabinet above it). Four doors: a 39" upper pair over 3 shelves and a lower pair over four roll-out trays, split at 54" (the listing says the top door matches a 39" wall cabinet; the 54" follows from it, assumed), in line with the bottoms of the W2127s. Its sides are unfinished: the OVD3393 beside it is the same height and depth, so they don't show (2026-11-04). See <a href="sequence.html#open">Sequence, Open</a> on standing it up under the ceiling.`,
      name: 'Pantry',    code: 'UT362493ROT4', w: 36,  kind: 'pantry', h: 93, upper: [{ riser: true, h: 3, at: 93, d: 24 }] },
    { url: 'https://www.cabinets.com/ovd3393-colonial-maple-alabaster-double-oven-cabinet-2-butt-door-1-drawer-cordova-frameless-kitchen-cabinet.html', role: 'Oven column, combination oven', note: `Double oven cabinet in Alabaster, 93" tall, in line with the pantry (decided 2026-11-04; replaced the B33, W3327, W3312 and their lights). A pair of butt doors at the top, 22 3/8" tall (70 5/8"–93"), one large opening below them, and a 7 1/16" drawer over the 4 1/2" toe kick. The Bosch HBL87M53UC combination oven fills the opening, its face 12"–61" (position assumed). The opening is 26 3/8"–30 5/8" wide and 45 5/16"–55" tall on the vendor's sheet and is modified on site; the unit takes 28 1/2" wide and 48 5/8" tall, and a loose shelf is supplied. That leaves a 9 5/8" panel from the unit up to the doors. The junction box goes on the back wall above the unit, at 64". Its right side is finished to match (Matching Finished Sides, both sides only): the W2127 and W2112 beside it are 12" deep, so the side shows from the counter up. See <a href="#open">Open</a>.`,
      name: 'Oven',      code: 'OVD3393', w: 33,  kind: 'oven', h: 93, inside: [{ label: 'oven j box', w: 4, h: 4, at: 64, dx: 11 }],
      upper: [{ riser: true, h: 3, at: 93, d: 24, side: true }] },
    { url: 'https://www.cabinets.com/b21-fh-frameless-colonial-maple-haze-base-full-height-cabinet-1-door-frameless-assembled-kitchen-cabinet.html', note: `Full-height base in Haze, one door, one shelf, hinged on the left with its pull at the top right (2026-11-04). The counter butts the OVD3393 at its left end.`,
      name: 'Garage',    code: 'B21-FH',  w: 21,  kind: 'door', one: true, receptacle: true,
      upper: [{ light: 'UCB118SNWH', w: 18, h: 1.1, at: 52.9 }, { note: `Wall cabinet, one door, 54"–81". 18.25" clear above the counter.`, code: 'W2127', one: true, h: 27, at: 54 }, { note: `Glass-door wall cabinet, one door, 81"–93".`, code: 'W2112 glass', one: true, h: 12, at: 81, glass: true }, { riser: true, h: 3, at: 93 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 91.275, inside: true }] },
    { note: `Three-drawer base. The 21.5" wide toaster oven sits on the counter above it, 1/4" past the cabinet on each side.`,
      name: 'Toaster',   code: 'DB21-3',  w: 21,  kind: 'drawers', n: 3, receptacle: true,
      upper: [{ off: true, appliance: 'toaster oven', w: 21.5, h: 12.7, at: DIMS.counterH }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 52.9 }, { note: `Wall cabinet, one door, 54"–81", hinged on the right with its pull on the left (2026-11-04).`, code: 'W2127', one: true, left: true, h: 27, at: 54 }, { note: `Glass-door wall cabinet, one door, 81"–93", hinged on the right with its pull on the left (2026-11-04).`, code: 'W2112 glass', one: true, left: true, h: 12, at: 81, glass: true }, { riser: true, h: 3, at: 93 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 91.275, inside: true }] },
    { note: `Three-drawer base. The Ninja Air Fryer XL sits on the counter above it.`,
      name: 'Air Fryer', code: 'DB21-3',  w: 21,  kind: 'drawers', n: 3, receptacle: true,
      upper: [{ off: true, appliance: 'air fryer', w: 11, h: 14.75, at: DIMS.counterH }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 52.9 }, { note: `Wall cabinet, one door, 54"–81".`, code: 'W2127', one: true, h: 27, at: 54 }, { note: `Glass-door wall cabinet, one door, 81"–93".`, code: 'W2112 glass', one: true, h: 12, at: 81, glass: true }, { riser: true, h: 3, at: 93 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 91.275, inside: true }] },
    { note: `Three-drawer base. The Breville BDC650BSS coffee maker sits on the counter above it. The counter stops at the side wall at the right end of the run (no overhang, 2026-10-31).`,
      name: 'Coffee',    code: 'DB21-3',  w: 21,  kind: 'drawers', n: 3, receptacle: true,
      upper: [{ off: true, coffee: true, w: 8.5, h: 16.3, at: DIMS.counterH }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 52.9 }, { note: `Wall cabinet, one door, 54"–81", hinged on the right with its pull on the left (2026-11-04).`, code: 'W2127', one: true, left: true, h: 27, at: 54 }, { note: `Glass-door wall cabinet, one door, 81"–93", hinged on the right with its pull on the left (2026-11-04).`, code: 'W2112 glass', one: true, left: true, h: 12, at: 81, glass: true }, { riser: true, h: 3, at: 93 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 91.275, inside: true }] },
  ],
};

// Inches to the nearest 1/16, as fractions: 34.5 -> "34 1/2", 0.25 -> "1/4".
const inch = x => {
  const n = Math.round(x * 16), w = Math.floor(n / 16);
  let a = n % 16, b = 16;
  if (!a) return String(w);
  while (a % 2 === 0) { a /= 2; b /= 2; }
  return (w ? w + ' ' : '') + a + '/' + b;
};

// What to order, [code, qty, where], shown by docs/cabinets.html, whose run tables price each item from the quotes.
// Every coded item and wall cabinet; a gap is ordered only when it says what (`orders`). `role` replaces the name in "where".
const orderSummary = (() => {
  const rows = new Map();
  const add = (code, run, label) => {
    const r = rows.get(code) || rows.set(code, { run, labels: [] }).get(code);
    r.labels.push(label);
  };
  for (const run of ['island', 'wall']) for (const c of RUNS[run]) {
    const code = c.kind === 'gap' ? c.orders : c.code;
    if (code) add(code, run, c.role || c.name);
    for (const u of c.upper || []) if (u.code) add(u.code, run, 'over the ' + c.name);
  }
  return [...rows].map(([code, { run, labels }]) => {
    const uniq = [...new Set(labels)], over = uniq.every(l => l.startsWith('over the '));
    const list = over ? 'over the ' + uniq.map(l => l.slice(9)).join(', ') : uniq.join(', ');
    return [code, labels.length, `${run}: ${list}`];
  });
})();

DIMS.islandLen = RUNS.island.reduce((s, c) => s + c.w, 0);
DIMS.wallLen = RUNS.wall.reduce((s, c) => s + c.w, 0);
