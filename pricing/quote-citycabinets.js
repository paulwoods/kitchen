// City Cabinets quote data, shown in docs/cabinets.html (the run tables and #quote-city)
var quotes = quotes || [];
{
// [planned, citycabinets.com code, qty, regular, sale, glass add-on, notes]
const lines = [
  ['DB24-3', 'B3DR', 2, 1477.95, 873.95, 0, 'island: spices, plates'],
  ['DB24-3 end panel', 'BFE', 1, 89.95, 49.95, 0, 'island: spices, left side, 34.50" × 24 5/8"'],
  ['DB36-3', 'B2DR1FFCOOKTOP', 1, 1401.95, 822.95, 0, 'island: cooktop, false front over 2 drawers, 21" drawer boxes'],
  ['TRB18FH', 'B0DPULLOUTTRASH', 1, 1291.95, 730.95, 0, 'island: trash, full-height pull-out for 2 cans'],
  ['SB42', 'B2D1FFSINK', 1, 876.95, 544.95, 0, 'island: sink, 2 doors, 1 false front'],
  ['DW panel', 'APPLIANCEPANEL', 1, 162.95, 114.95, 0, 'island: dishwasher front, custom size, 24" × 30" priced, 3/4" slab plywood, paint grade, raw'],
  ['B24-2', 'B1D1DR', 1, 941.95, 569.95, 0, 'island: cabinet a, 1 drawer over 1 door'],
  ['B24-2 end panel', 'BFE', 1, 89.95, 49.95, 0, 'island: cabinet a, right side, 34.50" × 24 5/8"'],
  ['REP2496-1.5', 'TFETHICK', 2, 1149.95, 749.95, 0, 'wall: each side of the Fridge, 1 1/2" × 96" × 24"'],
  ['RW3721', 'W2D', 1, 971.95, 639.95, 0, 'wall: over the Fridge, panel to panel, 37" × 20 3/4" × 24" (figured from the option prices, read 2026-11-03)'],
  ['UT362493ROT4 lower', 'T2D', 1, 2537.95, 1640.95, 0, 'wall: Pantry, 36" × 54" × 24", 2 doors over 4 roll-outs'],
  ['UT362493ROT4 upper', 'W2D', 1, 978.95, 646.95, 0, 'wall: Pantry, 36" × 39" × 24", 2 doors over shelves, set on the T2D (93" total; figured from the option prices, read 2026-11-03)'],
  ['OVD3393', 'TAPPLIANCECASE', 1, 1433.95, 929.95, 0, 'wall: Oven column, open case, 33" × 84" × 24": 84" is the tallest offered, with no back, doors or drawer (figured from the option prices, read 2026-11-04)'],
  ['OVD3393 end panel', 'TFE', 1, 539.95, 299.95, 0, 'wall: Oven column, right side, counter to 93", 57 1/4" × 24 5/8" (price read 2026-11-03)'],
  ['B21-FH', 'B1D', 1, 599.95, 372.95, 0, 'wall: Garage, 21" × 34.50" × 24", 1 door (figured from the option prices, read 2026-11-04)'],
  ['DB21-3', 'B3DR', 3, 1459.95, 855.95, 0, 'wall: Toaster, Air Fryer, Coffee (figured from the option prices, read 2026-11-04)'],
  ['W2127', 'W1D', 4, 581.95, 362.95, 0, 'wall: over the Garage, Toaster, Air Fryer and Coffee, 1 door (figured from the option prices, read 2026-11-04)'],
  ['W2112 glass', 'W1DGLASS', 4, 1013.95, 589.95, 0, 'wall: over the W2127s, 1 door, glass not included (figured from the option prices, read 2026-11-04)'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html
// The pantry is split in two but adds up to the planned size, so it is not listed.
const resized = ['OVD3393 / TAPPLIANCECASE'];
quotes.push({ id: 'city', label: 'City', rank: 3, lines, resized });
}
