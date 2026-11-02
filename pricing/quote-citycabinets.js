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
  ['W362424', 'W2D', 1, 966.95, 634.95, 0, 'wall: over the fridge'],
  ['W362424 filler', 'WSLIMFILLER', 2, 44.95, 24.95, 0, 'wall: each side of the W2D, 3/4" × 24" × 4 1/2", raw, cut to 1/2" wide on site (read 2026-11-02)'],
  ['UT362484ROT4 lower', 'T2D', 1, 2537.95, 1640.95, 0, 'wall: pantry, 36" × 54" × 24", 2 doors over 4 roll-outs'],
  ['UT362484ROT4 upper', 'W2D', 1, 966.95, 634.95, 0, 'wall: pantry, 36" × 30" × 24", 2 doors over shelves, set on the T2D (84" total)'],
  ['UT362484ROT4 end panel', 'TFE', 1, 539.95, 299.95, 0, 'wall: pantry, right side, counter to 84", 48 1/4" × 24 5/8"'],
  ['W361224 glass', 'W2DGLASS', 1, 1439.95, 883.95, 0, 'wall: over the pantry, glass not included'],
  ['W361224 glass end panel', 'WFE', 1, 89.95, 49.95, 0, 'wall: over the pantry, right side, 22" × 24 5/8" (the shortest sold), cut to 12" on site'],
  ['B33 (OW-B33-FH)', 'BWALLOVEN', 1, 792.95, 466.95, 0, 'wall: oven base, open case with an adjustable top rail'],
  ['W3330', 'W2D', 1, 831.95, 499.95, 0, 'wall: over the oven'],
  ['W3312 glass', 'W2DGLASS', 1, 1304.95, 748.95, 0, 'wall: over the W3330, glass not included'],
  ['MWB27', 'B1DRAPPLIANCECASE', 1, 901.95, 533.95, 0, 'wall: Toaster, 16" opening for the microwave drawer over 1 drawer'],
  ['DB27-3', 'B3DR', 2, 1495.95, 891.95, 0, 'wall: Air Fryer, Coffee'],
  ['W2730', 'W2D', 3, 801.95, 469.95, 0, 'wall: over the Toaster, Air Fryer and Coffee'],
  ['W2712 glass', 'W2DGLASS', 3, 1274.95, 718.95, 0, 'wall: over the W2730s, glass not included'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
// The pantry is split in two but adds up to the planned size, so it is not listed.
const resized = ['W362424 filler / WSLIMFILLER', 'W361224 glass end panel / WFE'];
quotes.push({ url: 'quote-citycabinets.html', label: 'City', rank: 3, lines, resized });
}
