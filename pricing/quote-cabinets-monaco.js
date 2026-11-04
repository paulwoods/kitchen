// Monaco quote data, shown by quote-cabinets-monaco.html and comparison.html
var quotes = quotes || [];
{
// [planned, cabinets.com code, qty, regular, sale, glass add-on, notes]
const glass = 129.81; // first glass-prep price read; each glass line now carries its own (comparison.html reads from this line on)
const lines = [
  ['DB24-3', 'DB24-3', 2, 1282.45, 833.59, 0, 'island: spices, plates'],
  ['DB24-3 finished sides', 'Matching Finished Sides', 1, 128.25, 83.36, 0, 'island: spices, the left side shows'],
  ['DB36-3', 'DB36-3', 1, 1663.23, 1081.10, 0, 'island: cooktop'],
  ['TRB18FH', 'B18-FH Trash', 1, 1466.85, 953.45, 0, 'island: trash, full height, 2 containers'],
  ['SB42', 'SB42', 1, 744.77, 484.10, 0, 'island: sink, 2 doors, 2 false drawers'],
  ['DW panel', 'BEPD', 1, 252.34, 164.02, 0, 'island: dishwasher front, base decorative door (no dishwasher panel sold; size not listed, ask for one to fit the Bosch, read 2026-10-31)'],
  ['B24-2', 'B24-SINGLE', 1, 737.29, 479.24, 0, 'island: cabinet a, 1 door, 1 drawer'],
  ['B24-2 finished sides', 'Matching Finished Sides', 1, 110.59, 71.88, 0, 'island: cabinet a, the right side shows'],
  ['REP2496-1.5', 'REP2496-1.5', 2, 340.50, 221.33, 0, 'wall: each side of the fridge, refrigerator return panel, 1.5" × 96" × 24" (read 2026-10-28, no sale; sale 35% off assumed)'],
  ['RW3721', 'RW3721', 1, 701.04, 455.68, 0, 'wall: over the fridge, panel to panel, 37" × 20 11/16" × 24" (read 2026-11-03)'],
  ['UT362493ROT4', 'UT362493-ROT/4', 1, 3003.21, 1952.09, 0, 'wall: pantry, 36" × 93" × 24", 4 doors, 4 roll-out trays below, 3 shelves above (read 2026-11-03)'],
  ['UT362493ROT4 finished sides', 'Matching Finished Sides', 1, 300.32, 195.21, 0, 'wall: pantry, the right side shows above the counter (10% of the price, read 2026-11-03)'],
  ['B33 (OW-B33-FH)', 'B33', 1, 873.98, 568.09, 0, 'wall: oven base, 2 doors, 1 drawer'],
  ['W3327', 'W3327', 1, 610.07, 396.55, 0, 'wall: over the oven (read 2026-11-03)'],
  ['W3312 glass', 'W3312', 1, 443.30, 288.15, 221.65, 'wall: over the W3327, + glass prep $221.65 (read 2026-10-28, no sale; sale 35% off assumed)'],
  ['MWB27', 'MBC27', 1, 910.40, 591.76, 0, 'wall: Toaster, microwave base, 1 drawer'],
  ['DB27-3', 'DB27-3', 2, 1403.92, 912.55, 0, 'wall: Air Fryer, Coffee'],
  ['W2727', 'W2727', 3, 531.22, 345.29, 0, 'wall: over the Toaster, Air Fryer and Coffee (read 2026-11-03)'],
  ['W2712 glass', 'W2712', 3, 354.65, 230.52, 177.33, 'wall: over the W2727s, + glass prep $177.33 (read 2026-10-28, no sale; sale 35% off assumed)'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
const resized = [];
quotes.push({ url: 'quote-cabinets-monaco.html', label: 'Monaco', rank: 2, lines, resized });
}
