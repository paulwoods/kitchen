// Colonial quote data, shown by quote-cabinets-colonial.html and comparison.html
var quotes = quotes || [];
{
// [planned, cabinets.com code, qty, regular, sale, glass add-on, notes]
const lines = [
  ['DB24-3', 'DB24-3', 2, 1282.45, 833.59, 0, 'island: spices, plates'],
  ['DB24-3 finished sides', 'Matching Finished Sides', 1, 128.25, 83.36, 0, 'island: spices, the left side shows'],
  ['DB36-3', 'DB36-3', 1, 1663.23, 1081.10, 0, 'island: cooktop'],
  ['TRB18FH', 'B18-FH Trash', 1, 1466.85, 953.45, 0, 'island: trash, full height, 2 containers'],
  ['SB42', 'SB42', 1, 744.77, 484.10, 0, 'island: sink, 2 doors, 2 false drawers'],
  ['DW panel', 'BEPD', 1, 252.34, 164.02, 0, 'island: dishwasher front, base decorative door (no dishwasher panel sold; size not listed, ask for one to fit the Bosch)'],
  ['B24-2', 'B24-SINGLE', 1, 737.29, 479.24, 0, 'island: cabinet a, 1 door, 1 drawer'],
  ['B24-2 finished sides', 'Matching Finished Sides', 1, 110.59, 71.89, 0, 'island: cabinet a, the right side shows'],
  ['FP2496', 'FP2496', 1, 167.58, 108.93, 0, "wall: skin on the left REP's exposed side, 1/4\" × 96\" × 24\""],
  ['REP2496-1.5', 'REP2496-1.5', 2, 340.50, 221.33, 0, 'wall: each side of the fridge, refrigerator return panel, 1.5" × 96" × 24"'],
  ['W362424', 'RW3624', 1, 654.99, 425.74, 0, 'wall: over the fridge, 36" × 23 11/16" × 24"'],
  ['PC36', 'UT362484', 1, 1977.28, 1285.23, 0, 'wall: pantry, 36" × 84" × 24", 4 doors, shelves'],
  ['PC36 finished sides', 'Matching Finished Sides', 1, 395.46, 257.05, 0, 'wall: pantry, the right side shows above the counter (read 2026-11-01; regular taken as 20%, the sale price\'s share)'],
  ['W361224 glass', 'W3612', 1, 880.23, 572.15, 0, 'wall: over the pantry, $463.28 + $185.31 to increase the depth 12" (to 24") + $231.64 glass prep; sale $301.13 + $120.45 + $150.57'],
  ['W361224 glass finished sides', 'Matching Finished Sides', 1, 69.49, 45.17, 0, 'wall: over the pantry, the right side shows'],
  ['B33 (OW-B33-FH)', 'B33', 1, 873.98, 568.09, 0, 'wall: oven base, 2 doors, 1 drawer'],
  ['W3330', 'W3330', 1, 642.95, 417.92, 0, 'wall: over the oven'],
  ['W3312 glass', 'W3312', 1, 664.95, 432.22, 0, 'wall: over the W3330, $443.30 + $221.65 glass prep; sale $288.15 + $144.07'],
  ['MWB27', 'MBC27', 1, 910.40, 591.76, 0, 'wall: Toaster, microwave base, 1 drawer'],
  ['DB27-3', 'DB27-3', 2, 1403.92, 912.55, 0, 'wall: Air Fryer, Coffee'],
  ['DB27-3 finished sides', 'Matching Finished Sides', 1, 140.39, 91.25, 0, 'wall: Coffee, the right side shows'],
  ['W2730', 'W2730', 3, 540.72, 351.47, 0, 'wall: over the Toaster, Air Fryer and Coffee'],
  ['W2730 finished sides', 'Matching Finished Sides', 1, 81.11, 52.72, 0, 'wall: over Coffee, the right side shows'],
  ['W2712 glass', 'W2712', 3, 531.98, 345.78, 0, 'wall: over the W2730s, $354.65 + $177.33 glass prep; sale $230.52 + $115.26'],
  ['W2712 glass finished sides', 'Matching Finished Sides', 1, 53.20, 34.58, 0, 'wall: over Coffee, the right side shows'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
const resized = ['W362424 / RW3624'];
quotes.push({ url: 'quote-cabinets-colonial.html', label: 'Colonial', rank: 1, lines, resized });
}
