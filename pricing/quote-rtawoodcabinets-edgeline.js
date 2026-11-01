// Edgeline quote data, shown by quote-rtawoodcabinets-edgeline.html and comparison.html
var quotes = quotes || [];
{
// [planned, rtawoodcabinets.com code, qty, regular, sale, glass add-on, notes]
const glass = 0; // GD cabinets are prepped for glass; the glass itself is not sold
const lines = [
  ['DB24-3', 'EW-3DB24', 2, 667.00, 466.90, 0, 'island: spices, plates'],
  ['DB36-3', 'EW-3DB36', 1, 855.60, 598.92, 0, 'island: cooktop'],
  ['TRB18FH', 'EW-B18TCPO', 1, 1002.23, 701.56, 0, 'island: trash, door and drawer, 2 bins'],
  ['SB42', 'EW-SB36', 1, 534.75, 374.33, 0, 'island: sink, 36" wide, 2 doors, 2 false drawers'],
  ['DW panel', 'EW-BDEP', 1, 158.13, 110.69, 0, 'island: dishwasher front, base decorative end panel, 29" × 23.5" (read 2026-10-31; its EW-DWR3 "dishwasher panel" is a 3" return)'],
  ['B24-2', 'EW-B24', 1, 493.93, 345.75, 0, 'island: cabinet a, 2 doors, 1 drawer'],
  ['REP2496-1.5', 'EW-REPV3096', 2, 247.83, 173.48, 0, 'wall: each side of the fridge, 1 1/2" × 96" × 30"'],
  ['W362424', 'EW-W362424', 1, 495.08, 346.56, 0, 'wall: over the fridge, 36" × 24" × 24"'],
  ['PC36', 'EW-U309624', 1, 1351.25, 945.88, 0, 'wall: pantry, 30" × 96" × 24", 4 doors, shelves'],
  ['W361224 glass', '(none)', 0, 0, 0, glass, 'wall: no room over a 96" pantry'],
  ['B33 (OW-B33-FH)', 'EW-B33', 1, 668.15, 467.71, 0, 'wall: oven base, 2 doors, 2 drawers'],
  ['W3330', 'EW-W3330', 1, 458.85, 321.20, 0, 'wall: over the oven, 30" tall'],
  ['W3312 glass', 'EW-W3312GD', 1, 262.78, 183.95, glass, 'wall: over the W3330, 12" tall, glass not included'],
  ['MWB27', 'EW-BMW30', 1, 534.75, 374.33, 0, 'wall: Toaster, microwave base, 30" wide, 1 drawer'],
  ['DB27-3', 'EW-3DB24', 2, 667.00, 466.90, 0, 'wall: Air Fryer, Coffee, 24" wide'],
  ['W2730', 'EW-W2730', 3, 392.73, 274.91, 0, 'wall: over the Toaster, Air Fryer and Coffee, 30" tall'],
  ['W2712 glass', 'EW-W2712GD', 3, 238.05, 166.64, glass, 'wall: over the W2730s, 12" tall, glass not included'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
const resized = ['SB42 / EW-SB36', 'REP2496-1.5 / EW-REPV3096', 'PC36 / EW-U309624', 'MWB27 / EW-BMW30', 'DB27-3 / EW-3DB24', 'W361224 glass / (none)'];
quotes.push({ url: 'quote-rtawoodcabinets-edgeline.html', label: 'Edgeline', rank: 8, lines, resized });
}
