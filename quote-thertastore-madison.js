// Madison quote data, shown by quote-thertastore-madison.html and comparison.html
var quotes = quotes || [];
{
// [planned, thertastore.com code, qty, regular, sale, glass add-on, notes]
const glass = 0; // GD cabinets are prepped for glass; the glass itself is not sold
const lines = [
  ['DB24-3', 'SN-3DB24', 2, 772.35, 579.26, 0, 'island: spices, plates'],
  ['DB36-3', 'SN-3DB36', 1, 990.34, 742.76, 0, 'island: cooktop'],
  ['TRB18FH', 'SN-B18FHTCPO', 1, 1370.29, 1027.72, 0, 'island: trash, full-height door, double trash pull-out'],
  ['SB42', 'SN-SB36', 1, 619.40, 464.55, 0, 'island: sink, 36" wide, 2 doors, 2 false drawers'],
  ['DW panel', 'SN-BDEP', 1, 183.39, 137.54, 0, 'island: dishwasher front, base decorative end panel, size not listed (read 2026-10-31)'],
  ['B24-2', 'SN-B24', 1, 571.65, 428.74, 0, 'island: cabinet a, 2 doors, 1 drawer'],
  ['REP2496-1.5', 'SN-REPV3096', 2, 287.21, 215.41, 0, 'wall: each side of the fridge, 1 1/2" × 96" × 30"'],
  ['W362424', 'SN-W362424', 1, 573.04, 429.78, 0, 'wall: over the fridge, 36" × 24" × 24"'],
  ['PC36', 'SN-U3084244RS', 1, 1971.01, 1478.26, 0, 'wall: pantry, 30" × 84" × 24", 4 doors, 4 roll-outs'],
  ['W361224 glass', 'SN-W3012GD', 1, 289.29, 216.97, glass, 'wall: over the pantry, 30" × 12", glass not included'],
  ['B33 (OW-B33-FH)', 'SN-B33', 1, 773.73, 580.30, 0, 'wall: oven base, 2 doors, 2 drawers'],
  ['W3330', 'SN-W3330', 1, 531.50, 398.63, 0, 'wall: over the oven, 30" tall'],
  ['W3312 glass', 'SN-W3312GD', 1, 304.50, 228.38, glass, 'wall: over the W3330, 12" tall, glass not included'],
  ['MWB27', 'SN-BMW30', 1, 619.40, 464.55, 0, 'wall: Toaster, microwave base, 30" wide, 1 drawer'],
  ['DB27-3', 'SN-3DB27', 2, 772.27, 579.20, 0, 'wall: Air Fryer, Coffee'],
  ['W2730', 'SN-W2730', 3, 454.69, 341.02, 0, 'wall: over the Toaster, Air Fryer and Coffee, 30" tall'],
  ['W2712 glass', 'SN-W2712GD', 3, 275.44, 206.58, glass, 'wall: over the W2730s, 12" tall, glass not included'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
const resized = ['SB42 / SN-SB36', 'REP2496-1.5 / SN-REPV3096', 'PC36 / SN-U3084244RS', 'W361224 glass / SN-W3012GD', 'MWB27 / SN-BMW30'];
quotes.push({ url: 'quote-thertastore-madison.html', label: 'Madison', rank: 5, lines, resized });
}
