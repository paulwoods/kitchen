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
  ['B24-2', 'B24-SINGLE', 1, 737.29, 479.24, 0, 'island: cabinet a, 1 door, 1 drawer'],
  ['B24-2 finished sides', 'Matching Finished Sides', 1, 110.59, 71.88, 0, 'island: cabinet a, the right side shows'],
  ['REP2496-1.5', 'REP2496-1.5', 2, 340.50, 221.33, 0, 'wall: each side of the fridge, refrigerator return panel, 1.5" × 96" × 24" (read 2026-10-28, no sale; sale 35% off assumed)'],
  ['W362424', 'RW3624', 1, 654.99, 425.74, 0, 'wall: over the fridge, 36" × 23 11/16" × 24"'],
  ['PC36', 'UT362484', 1, 1977.28, 1285.23, 0, 'wall: pantry, 36" × 84" × 24", 4 doors, shelves'],
  ['PC36 finished sides', 'Matching Finished Sides', 1, 296.59, 192.78, 0, 'wall: pantry, the right side shows above the counter (15% assumed)'],
  ['W361224 glass', 'W3612', 1, 648.59, 421.58, 231.64, 'wall: over the pantry, $463.28 + $185.31 to increase the depth 12" (to 24"), + glass prep $231.64 (read 2026-10-28, no sale; sale 35% off assumed)'],
  ['W361224 glass finished sides', 'Matching Finished Sides', 1, 69.49, 45.17, 0, 'wall: over the pantry, the right side shows'],
  ['B33 (OW-B33-FH)', 'B33', 1, 873.98, 568.09, 0, 'wall: oven base, 2 doors, 1 drawer'],
  ['W3330', 'W3330', 1, 642.95, 417.92, 0, 'wall: over the oven (read 2026-10-31)'],
  ['W3312 glass', 'W3312', 1, 443.30, 288.15, 221.65, 'wall: over the W3330, + glass prep $221.65 (read 2026-10-28, no sale; sale 35% off assumed)'],
  ['MWB27', 'MBC27', 1, 910.40, 591.76, 0, 'wall: Toaster, microwave base, 1 drawer'],
  ['DB27-3', 'DB27-3', 2, 1403.92, 912.55, 0, 'wall: Air Fryer, Coffee'],
  ['DB27-3 finished sides', 'Matching Finished Sides', 1, 140.39, 91.25, 0, 'wall: Coffee, the right side shows'],
  ['W2730', 'W2730', 3, 540.72, 351.47, 0, 'wall: over the Toaster, Air Fryer and Coffee (read 2026-10-31)'],
  ['W2730 finished sides', 'Matching Finished Sides', 1, 81.11, 52.72, 0, 'wall: over Coffee, the right side shows'],
  ['W2712 glass', 'W2712', 3, 354.65, 230.52, 177.33, 'wall: over the W2730s, + glass prep $177.33 (read 2026-10-28, no sale; sale 35% off assumed)'],
  ['W2712 glass finished sides', 'Matching Finished Sides', 1, 53.20, 34.58, 0, 'wall: over Coffee, the right side shows'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
const resized = ['W362424 / RW3624'];
quotes.push({ url: 'quote-cabinets-monaco.html', label: 'Monaco', lines, resized });
}
