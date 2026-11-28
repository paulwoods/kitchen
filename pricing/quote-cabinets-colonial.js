// Colonial quote data, shown in docs/cabinets.html (the run tables and #quote-colonial)
var quotes = quotes || [];
{
// [planned, cabinets.com code, qty, regular, sale, glass add-on, notes]
const lines = [
  ['BEP2434', 'BEP2434', 2, 101.09, 60.65, 0, 'island: island left end, island right end, base end panel, 3/4" × 34 1/2" × 24" (read 2026-11-27)'],
  ['DB24-3', 'DB24-3', 2, 1282.45, 833.59, 0, 'island: spices, plates'],
  ['DB24-3 finished sides', 'Matching Finished Sides', 1, 128.25, 83.36, 0, 'island: spices, the left side shows'],
  ['DB36-3', 'DB36-3', 1, 1663.23, 1081.10, 0, 'island: cooktop'],
  ['B18-Trash', 'B18-Trash', 1, 1633.50, 1061.78, 0, 'island: trash, B18-BDA304, 2 containers, 35 qt, on the door (read 2026-11-13)'],
  ['SB42', 'SB42', 1, 744.77, 484.10, 0, 'island: sink, 2 doors, 2 false drawers'],
  ['DW panel', 'BEPD', 1, 252.34, 164.02, 0, 'island: dishwasher front, base decorative door (no dishwasher panel sold; size not listed, ask for one to fit the Bosch)'],
  ['B24-ROT/2-SINGLE', 'B24-SINGLE', 1, 737.29, 479.24, 0, 'island: cabinet a, 1 door, 1 drawer'],
  ['B24-ROT/2-SINGLE finished sides', 'Matching Finished Sides', 1, 73.73, 47.92, 0, 'island: cabinet a, the right side shows (10% of the B24-SINGLE)'],
  ['TEPD2493', 'TEPD2493', 1, 828.48, 497.09, 0, "wall: decorative door on the left REP's exposed side, 4 panels, for a 93\" × 24\" frameless tall cabinet (read 2026-11-27)"],
  ['REP2496-1.5', 'REP2496-1.5', 2, 340.50, 221.33, 0, 'wall: each side of the Fridge, refrigerator return panel, 1.5" × 96" × 24"'],
  ['RW3721', 'RW3721', 1, 701.04, 455.68, 0, 'wall: over the Fridge, panel to panel, 37" × 20 11/16" × 24" (read 2026-11-03)'],
  ['UT362493ROT4', 'UT362493-ROT/4', 1, 3003.21, 1952.09, 0, 'wall: Pantry, 36" × 93" × 24", 4 doors, 4 roll-out trays below, 3 shelves above (read 2026-11-03)'],
  ['OVD3393', 'OVD3393', 1, 1746.48, 1135.21, 0, 'wall: Oven column, 33" × 93" × 24", 2 butt doors, 1 drawer, combination oven (read 2026-11-04, no sale; sale 35% off assumed)'],
  ['OVD3393 finished sides', 'Matching Finished Sides', 1, 349.30, 227.05, 0, 'wall: Oven column, the right side shows above the counter (20% of the price, both sides only, read 2026-11-04; sale 35% off assumed)'],
  ['B21-FH-ROT/2', 'B21-FH', 1, 526.92, 342.50, 0, 'wall: Garage, 1 door, 1 shelf (read in Haze 2026-11-04, Alabaster costs the same; no sale; sale 35% off assumed)'],
  ['DB21-3', 'DB21-3', 3, 1195.85, 777.30, 0, 'wall: Toaster, Air Fryer, Coffee (read 2026-11-04, no sale; sale 35% off assumed)'],
  ['W2127', 'W2127', 4, 519.25, 337.51, 0, 'wall: over the Garage, Toaster, Air Fryer and Coffee, 1 door (read 2026-11-04, no sale; sale 35% off assumed)'],
  ['W2112 glass', 'W2112', 4, 514.34, 334.32, 0, 'wall: over the W2127s, 1 door, $342.89 + $171.45 glass prep; sale $222.88 + $111.44 (read 2026-11-04, no sale; sale 35% off assumed)'],
  ['SSM-4.50', 'SSM-4.50', 3, 94.19, 56.51, 0, 'wall: riser molding, 96" × 4 1/2" × 3/4" sticks, ripped to 3" (read 2026-11-27; was $61.22 sale 2026-11-03)'],
  ['CROWN_MC7', 'CROWN_MC7', 3, 311.51, 186.91, 0, 'wall: crown molding, cove, 96" × 3" × 3" sticks (read 2026-11-27)'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html
const resized = ['B21-FH-ROT/2 / B21-FH', 'B24-ROT/2-SINGLE / B24-SINGLE'];
quotes.push({ id: 'colonial', label: 'Colonial', rank: 1, lines, resized });
}
