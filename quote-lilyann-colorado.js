// Colorado quote data, shown by quote-lilyann-colorado.html and comparison.html
var quotes = quotes || [];
{
// [planned, lilyanncabinets.com code, qty, regular, sale, glass add-on, notes]
const glass = 0; // BGFI cabinets are sold as glass door cabinets; no separate glass line
const lines = [
  ['DB24-3', 'WSH-DB24-3', 2, 2196.64, 549.16, 0, 'island: spices, plates'],
  ['DB36-3', 'WSH-DB36-3', 1, 3727.80, 931.95, 0, 'island: cooktop'],
  ['TRB18FH', 'WSH-B18FHD', 1, 999.72, 249.93, 0, 'island: trash, full-height door'],
  ['TRB18FH pull-out', '4WCBM18DM2', 1, 487.20, 471.85, 0, 'island: trash, door-mounted double 35 qt waste pull-out, no lids'],
  ['SB42', 'WSH-SB42', 1, 2393.28, 598.32, 0, 'island: sink, ships as a B42 to convert, 2 doors, 2 drawer fronts'],
  ['B24-2', 'WSH-B24', 1, 1448.40, 362.10, 0, 'island: cabinet a, 2 doors, 1 drawer'],
  ['REP2496-1.5', 'WSH-REP1.596', 2, 1140.08, 285.02, 0, 'wall: each side of the fridge, 1 1/2" × 96" × 24"'],
  ['W362424', 'WSH-W362424', 1, 1350.44, 337.61, 0, 'wall: over the fridge, 36" × 24" × 24"'],
  ['PC36', 'WSH-U308424', 1, 4311.28, 1077.82, 0, 'wall: pantry, 30" × 84" × 24", 4 doors'],
  ['PC36 roll-outs', 'TYPE-B-RS30', 3, 536.62, 134.16, 0, 'wall: pantry, 30" roll-out shelves with glides'],
  ['W361224 glass', 'WSH-W3012BGFI', 1, 868.40, 217.10, glass, 'wall: over the pantry, 30" × 12" × 12"'],
  ['B33 (OW-B33-FH)', 'WSH-B33', 1, 1903.92, 475.98, 0, 'wall: oven base, 2 doors, 2 drawers'],
  ['W3330', 'WSH-W3330', 1, 1228.16, 307.04, 0, 'wall: over the oven, 30" tall'],
  ['W3312 glass', 'WSH-W3312BGFI', 1, 955.04, 238.76, glass, 'wall: over the W3330, 12" tall'],
  ['MWB27', 'WSH-MB30', 1, 1916.96, 479.24, 0, 'wall: Toaster, microwave base, 30" wide, 1 drawer'],
  ['DB27-3', 'WSH-DB24-3', 2, 2196.64, 549.16, 0, 'wall: Air Fryer, Coffee, 24" wide'],
  ['W2730', 'WSH-W2730', 3, 1102.24, 275.56, 0, 'wall: over the Toaster, Air Fryer and Coffee, 30" tall'],
  ['W2712 glass', 'WSH-W2712BGFI', 3, 786.32, 196.58, glass, 'wall: over the W2730s, 12" tall'],
];
// 'planned / code' lines whose size (W × H × D, as supplied) differs from the plan's in cabinets.html (comparison.html reads this too)
const resized = ['PC36 / WSH-U308424', 'W361224 glass / WSH-W3012BGFI', 'MWB27 / WSH-MB30', 'DB27-3 / WSH-DB24-3'];
quotes.push({ url: 'quote-lilyann-colorado.html', label: 'Colorado', lines, resized });
}
