// Barker quote data, shown by quote-barker.html and comparison.html
var quotes = quotes || [];
{
// [planned, barkercabinets.com code, qty, regular, sale, glass add-on, notes]
const glass = 0; // glass doors come without the glass
const lines = [
  ['DB24-3', 'B3DRV3', 2, 2024.95, 1343.95, 0, 'island: spices, plates'],
  ['DB24-3 end panel', 'BFE', 1, 81.45, 51.45, 0, 'island: spices, left side, 34.50" × 24 5/8"'],
  ['DB36-3', 'B2DR1FFCOOKTOP', 1, 1817.95, 1203.95, 0, 'island: cooktop, false front over 2 drawers'],
  ['TRB18FH', 'B0DPULLOUTTRASH', 1, 1610.95, 1017.95, 0, 'island: trash, full-height pull-out'],
  ['SB42', 'B2D1FFSINK', 1, 1005.95, 690.95, 0, 'island: sink, 2 doors, 1 false front'],
  ['B24-2', 'B1D1DR', 1, 1197.95, 800.95, 0, 'island: cabinet a, 1 drawer over 1 door'],
  ['B24-2 end panel', 'BFE', 1, 81.45, 51.45, 0, 'island: cabinet a, right side, 34.50" × 24 5/8"'],
  ['REP2496-1.5', 'TFETHICK', 2, 749.95, 749.95, 0, 'wall: each side of the fridge, 1 1/2" thick, 95" tall'],
  ['W362424', 'W2D', 1, 1069.95, 732.95, 0, 'wall: over the fridge'],
  ['PC36 lower', 'B2D', 1, 1501.90, 1092.90, 0, 'wall: pantry, 2 doors over 3 roll-outs'],
  ['PC36 upper', 'W2D', 1, 1117.45, 780.45, 0, 'wall: pantry, 2 doors over shelves, set on the B2D (81" total)'],
  ['W361224 glass', 'W2DGLASS', 1, 1363.95, 882.95, 0, 'wall: over the pantry, glass not included'],
  ['B33 (OW-B33-FH)', 'B0D', 1, 660.95, 435.95, 0, 'wall: oven base, open case'],
  ['W3330', 'W2D', 1, 988.95, 651.95, 0, 'wall: over the oven'],
  ['W3312 glass', 'W2DGLASS', 1, 1342.95, 861.95, 0, 'wall: over the W3330, glass not included'],
  ['MWB27 upper', 'WEXPOSEDNOSHELVES', 1, 808.95, 563.95, 0, 'wall: Toaster, open case for the microwave drawer'],
  ['MWB27 lower', 'B2DRTALL', 1, 1683.95, 1125.95, 0, 'wall: Toaster, 2 drawers under the microwave'],
  ['DB27-3', 'B3DRV3', 2, 2045.95, 1364.95, 0, 'wall: Air Fryer, Coffee'],
  ['DB27-3 end panel', 'BFE', 1, 81.45, 51.45, 0, 'wall: Coffee, right side, 34.50" × 24 5/8"'],
  ['W2730', 'W2D', 3, 952.95, 615.95, 0, 'wall: over the Toaster, Air Fryer and Coffee'],
  ['W2730 end panel', 'WFE', 1, 79.95, 49.95, 0, 'wall: over Coffee, right side, 27" × 12 5/8"'],
  ['W2712 glass', 'W2DGLASS', 3, 1306.95, 825.95, 0, 'wall: over the W2730s, glass not included'],
  ['W2712 glass end panel', 'WFE', 1, 79.95, 49.95, 0, 'wall: over Coffee, right side, 15" × 12 5/8"'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
// The microwave base is split in two but adds up to the planned size, so it is not listed.
const resized = ['PC36 upper / W2D', 'W361224 glass / W2DGLASS', 'W3330 / W2D', 'W3312 glass / W2DGLASS', 'W2730 / W2D', 'W2730 end panel / WFE', 'W2712 glass / W2DGLASS', 'W2712 glass end panel / WFE', 'REP2496-1.5 / TFETHICK'];
quotes.push({ url: 'quote-barker.html', label: 'Barker', rank: 3, lines, resized });
}
