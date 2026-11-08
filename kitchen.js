// The two runs, the one source for every drawing (sketch-island-front.html, sketch-wall-front.html, sketch-top.html, model.html).
// Left to right as seen from the aisle, inches. Each view draws the fields it needs and ignores the rest; fields are listed in CLAUDE.md.
// A plain script (not a module) so the pages still work when opened from the folder.
const RUNS = {
  island: [
    { name: 'spices',    code: 'DB24-3',  w: 24, kind: 'drawers', n: 3, back: 19.5, backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 29, dx: 12 }], // GFCI on the island's back wall, behind the cabinet (height assumed)
      upper: [ { pendant: true, w: 5, h: 11, at: 74, dx: 12 } ] }, // Effimero, at a T mark on the top view
    { name: 'cooktop',   code: 'DB36-3',  w: 36, kind: 'drawers', n: 3, cooktop: true, falseTop: true, back: 19.5,
      inside: [{ label: 'j box', w: 4, h: 4, at: 25.75, dx: 3 }, // in the island's back wall, through a cutout in the cabinet back
                { label: '', w: 28.875, h: 4.125, at: 32.4375, dx: 18 }], // NIT8061UC body: cutout width, 4 1/8" below the counter
      upper: [ { hood: true, w: 41.5, h: 2, at: 66.1875, chimney: 13.375, chimneyD: 10.625 } ] }, // Proline PLFI 544-42
    { name: 'plates',    code: 'DB24-3',  w: 24, kind: 'drawers', n: 3, back: 19.5, backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 29, dx: 12 }] }, // GFCI on the island's back wall, behind the cabinet (height assumed)
    { name: 'trash',     code: 'TRB18FH', w: 18, kind: 'door', backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 21, dx: 9 },
                { label: '120v', w: 2.75, h: 4.5, at: 29, dx: 9 }], // both in the island's back wall: the first opens into the cabinet, the second faces away from the aisle
      upper: [ { pendant: true, w: 5, h: 11, at: 74, dx: 0 } ] },
    { name: 'sink',      code: 'SB42',    w: 42, kind: 'sink', falseTop: true, backReceptacle: true, airSwitch: { dx: 12.625, back: 2 },
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 9, dx: 3 },
                { label: 'air sw', w: 4.375, h: 4.375, at: 9, dx: 8, within: true }, // STS-OO power module, plugged into the 120v, the disposal plugs into it
                { label: 'disposal', w: 8.5, h: 12.25, at: 18.5, dx: 11.3125, within: true }, // InSinkErator 81138K: 12 1/4" tall under the drain (width assumed)
                { label: '120v', w: 2.75, h: 4.5, at: 29, dx: 21 }], // GFCI on the island's back wall, behind the cabinet (height assumed)
      // Ruvati RVH6222ST bowl opening: w wide, left/right deep below the counter at each end (sloped bottom), d front to back, v from the cabinet backs
      // (centered in its 33.5" x 19" outline, 2 3/4" from the counter front), ledge: workstation ledges, drain: from the item's left end, 6 1/4" in from the bowl's left wall
      bowl: { w: 31.875, left: 9.875, right: 9.25, d: 17.375, v: 4.8125, ledge: 0.6875, drain: 11.3125 },
      faucet: { h: 22.4375, reach: 9.5, back: 2 }, // Kohler K-R30937-BMB, 2" from the cabinet backs, centered between them and the sink's back edge at 4"; InSinkErator STS-OO button 8 3/8" left of it, centered between the sink's left edge and the faucet
      upper: [ { pendant: true, w: 5, h: 11, at: 74, dx: 21 } ] },
    { name: 'dishwasher', code: '24" gap', w: 24, kind: 'gap', tag: 'DW', dishwasher: true, backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 29, dx: 12 }] }, // on the island's back wall, behind the dishwasher
    { name: 'cabinet a', code: 'B24-2',   w: 24, kind: 'base', backReceptacle: true,
      inside: [{ label: '120v', w: 2.75, h: 4.5, at: 29, dx: 12 }], // on the island's back wall
      upper: [ { pendant: true, w: 5, h: 11, at: 74, dx: 0 } ] },
  ],
  wall: [ // `h` marks a tall item (no countertop)
    {                    code: 'FP2496',  w: 0.25, kind: 'panel', h: 96, drop: 1 }, // skin on the REP's exposed left side, 1/4" thick (assumed)
    {                    code: 'REP2496-1.5', w: 1.5, kind: 'panel', h: 96 },
    { kind: 'space', w: 0.5, h: 96 }, // 1/2" clear between the panel and the fridge
    { name: 'Fridge',    code: '36" gap', w: 36,  kind: 'gap', h: 70, tag: 'REF', fridge: true, receptacle: true, receptacleAt: 12, d: 28.5, // 28 1/2" deep with doors
      inside: [{ label: 'ice maker', w: 5, h: 6, at: 12, dx: 29 }], // recessed ice maker outlet box behind the fridge (size and spot assumed)
      upper: [{ code: 'RW3721', w: 37, dx: -0.5, h: 20.6875, at: 72.3125, d: 24 }, { riser: true, w: 37, dx: -0.5, h: 3, at: 93, d: 24 }] },
    { kind: 'space', w: 0.5, h: 96 },
    {                    code: 'REP2496-1.5', w: 1.5, kind: 'panel', h: 96 },
    { name: 'Pantry',    code: 'UT362493ROT4', w: 36,  kind: 'pantry', h: 93, upper: [{ riser: true, h: 3, at: 93, d: 24 }] },
    { name: 'Oven',      code: 'OVD3393', w: 33,  kind: 'oven', h: 93, inside: [{ label: 'oven j box', w: 4, h: 4, at: 64, dx: 11 }],
      upper: [{ riser: true, h: 3, at: 93, d: 24, side: true }] },
    { name: 'Garage',    code: 'B21-FH',  w: 21,  kind: 'door', one: true, receptacle: true,
      upper: [{ light: 'UCB118SNWH', w: 18, h: 1.1, at: 52.9 }, { code: 'W2127', one: true, h: 27, at: 54 }, { code: 'W2112 glass', one: true, h: 12, at: 81, glass: true }, { riser: true, h: 3, at: 93 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 91.275, inside: true }] },
    { name: 'Toaster',   code: 'DB21-3',  w: 21,  kind: 'drawers', n: 3, receptacle: true,
      upper: [{ off: true, appliance: 'toaster oven', w: 21.5, h: 12.7, at: 35.75 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 52.9 }, { code: 'W2127', one: true, left: true, h: 27, at: 54 }, { code: 'W2112 glass', one: true, left: true, h: 12, at: 81, glass: true }, { riser: true, h: 3, at: 93 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 91.275, inside: true }] },
    { name: 'Air Fryer', code: 'DB21-3',  w: 21,  kind: 'drawers', n: 3, receptacle: true,
      upper: [{ off: true, appliance: 'air fryer', w: 11, h: 14.75, at: 35.75 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 52.9 }, { code: 'W2127', one: true, h: 27, at: 54 }, { code: 'W2112 glass', one: true, h: 12, at: 81, glass: true }, { riser: true, h: 3, at: 93 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 91.275, inside: true }] },
    { name: 'Coffee',    code: 'DB21-3',  w: 21,  kind: 'drawers', n: 3, receptacle: true,
      upper: [{ off: true, coffee: true, w: 8.5, h: 16.3, at: 35.75 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 52.9 }, { code: 'W2127', one: true, left: true, h: 27, at: 54 }, { code: 'W2112 glass', one: true, left: true, h: 12, at: 81, glass: true }, { riser: true, h: 3, at: 93 }, { light: 'UCB118SNWH', w: 18, h: 1.1, at: 91.275, inside: true }] },
  ],
};
