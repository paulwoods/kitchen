// Cosmopolitan quote data, shown by quote-cabinets-cosmopolitan.html and comparison.html
var quotes = quotes || [];
{
// [planned, cabinets.com code, qty, regular, sale, glass add-on, notes]
const glass = 0; // no glass door option in this door style
const lines = [
  ['DB24-3', 'DB24-3', 2, 1396.34, 907.62, 0, 'island: spices, plates'],
  ['DB24-3 finished sides', 'Matching Finished Sides', 1, 139.63, 90.76, 0, 'island: spices, the left side shows'],
  ['DB36-3', 'DB36-3', 1, 1635.41, 1063.02, 0, 'island: cooktop'],
  ['TRB18FH', 'B18-FH Trash', 1, 1692.80, 1100.32, 0, 'island: trash, full height, 2 containers'],
  ['SB42', 'SB42', 1, 916.57, 595.77, 0, 'island: sink, 2 doors, 2 false drawers'],
  ['B24-2', 'B24-SINGLE', 1, 869.57, 565.22, 0, 'island: cabinet a, 1 door, 1 drawer'],
  ['B24-2 finished sides', 'Matching Finished Sides', 1, 130.44, 84.79, 0, 'island: cabinet a, the right side shows'],
  ['REP2496-1.5', 'TEP2496', 2, 567.29, 368.74, 0, 'wall: each side of the fridge, 3/4" × 96" × 24"'],
  ['W362424', 'RW3624', 1, 765.84, 497.80, 0, 'wall: over the fridge, 36" × 23 11/16" × 24"'],
  ['PC36', 'UT362484', 1, 2183.24, 1419.11, 0, 'wall: pantry, 36" × 84" × 24", 4 doors, shelves'],
  ['PC36 finished sides', 'Matching Finished Sides', 1, 327.49, 212.87, 0, 'wall: pantry, the right side shows above the counter (15% assumed)'],
  ['W361224 glass', 'W3615', 1, 532.44, 346.09, glass, 'wall: over the pantry, solid doors'],
  ['W361224 glass finished sides', 'Matching Finished Sides', 1, 79.87, 51.92, 0, 'wall: over the pantry, the right side shows'],
  ['B33 (OW-B33-FH)', 'B33', 1, 1036.51, 673.73, 0, 'wall: oven base, 2 doors, 1 drawer'],
  ['W3330', 'W3330', 1, 728.56, 473.56, 0, 'wall: over the oven (read 2026-10-31)'],
  ['W3312 glass', 'W3315', 1, 500.03, 325.02, glass, 'wall: over the W3330, solid doors'],
  ['MWB27', 'MBC27', 1, 1002.48, 651.61, 0, 'wall: Toaster, microwave base, 1 drawer'],
  ['DB27-3', 'DB27-3', 2, 1456.30, 946.60, 0, 'wall: Air Fryer, Coffee'],
  ['DB27-3 finished sides', 'Matching Finished Sides', 1, 145.63, 94.66, 0, 'wall: Coffee, the right side shows'],
  ['W2730', 'W2730', 3, 645.90, 419.84, 0, 'wall: over the Toaster, Air Fryer and Coffee (read 2026-10-31)'],
  ['W2730 finished sides', 'Matching Finished Sides', 1, 96.89, 62.98, 0, 'wall: over Coffee, the right side shows'],
  ['W2712 glass', 'W2715', 3, 470.04, 305.53, glass, 'wall: over the W2730s, solid doors'],
  ['W2712 glass finished sides', 'Matching Finished Sides', 1, 70.51, 45.83, 0, 'wall: over Coffee, the right side shows'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
const resized = ['W361224 glass / W3615', 'W3312 glass / W3315', 'W2712 glass / W2715', 'REP2496-1.5 / TEP2496', 'W362424 / RW3624'];
quotes.push({ url: 'quote-cabinets-cosmopolitan.html', label: 'Cosmopolitan', lines, resized });
}
