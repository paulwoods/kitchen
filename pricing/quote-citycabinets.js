// City Cabinets quote data, shown by quote-citycabinets.html and comparison.html
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
  ['REP2496-1.5', 'TFETHICK', 2, 1149.95, 749.95, 0, 'wall: each side of the fridge, 1 1/2" × 96" × 24"'],
  ['RW3721', 'W2D', 1, 971.95, 639.95, 0, 'wall: over the fridge, panel to panel, 37" × 20 3/4" × 24" (figured from the option prices, read 2026-11-03)'],
  ['UT362493ROT4 lower', 'T2D', 1, 2537.95, 1640.95, 0, 'wall: pantry, 36" × 54" × 24", 2 doors over 4 roll-outs'],
  ['UT362493ROT4 upper', 'W2D', 1, 978.95, 646.95, 0, 'wall: pantry, 36" × 39" × 24", 2 doors over shelves, set on the T2D (93" total; figured from the option prices, read 2026-11-03)'],
  ['OVD3393', 'TAPPLIANCECASE', 1, 1433.95, 929.95, 0, 'wall: oven column, open case, 33" × 84" × 24": 84" is the tallest offered, with no back, doors or drawer (figured from the option prices, read 2026-11-04)'],
  ['OVD3393 end panel', 'TFE', 1, 539.95, 299.95, 0, 'wall: oven column, right side, counter to 93", 57 1/4" × 24 5/8" (price read 2026-11-03)'],
  ['DB27-3', 'B3DR', 3, 1495.95, 891.95, 0, 'wall: Toaster, Air Fryer, Coffee'],
  ['W2727', 'W2D', 3, 801.95, 469.95, 0, 'wall: over the Toaster, Air Fryer and Coffee'],
  ['W2712 glass', 'W2DGLASS', 3, 1274.95, 718.95, 0, 'wall: over the W2727s, glass not included'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
// The pantry is split in two but adds up to the planned size, so it is not listed.
const resized = ['OVD3393 / TAPPLIANCECASE'];
quotes.push({ url: 'quote-citycabinets.html', label: 'City', rank: 3, lines, resized });
}
