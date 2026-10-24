// Draws a run of cabinets in front elevation on graph paper.
// All units are inches; one grid square = 6".
const SQ = 6, BOLD = 30, PX = 5;      // inches per square, per bold line (from the run's left end and the floor), screen px per inch
const TOE = 4.5, BOX = 34.5, TOP = 1.25; // toe kick, cabinet height, 3 cm countertop
const MARGIN = 12;

// Items with `h` are tall (panels, pantry, fridge space) and get no countertop.
function sketch(title, run) {
  const total = run.reduce((s, c) => s + c.w, 0);
  const tallest = Math.max(BOX + TOP + 1, ...run.map(c => c.h || 0));
  const FLOOR = Math.ceil((tallest + 12) / SQ) * SQ, H = FLOOR + 24;
  const W = MARGIN * 2 + Math.max(total, 96);
  const out = [];
  const rect = (x, y, w, h, cls = '') => out.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}"/>`);
  const line = (x1, y1, x2, y2, cls = '') => out.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`);
  const text = (x, y, s, cls = '') => out.push(`<text x="${x}" y="${y}" class="${cls}">${s}</text>`);

  // Stack of fronts from `top` down: each row is { h, pair, pull: 'mid' | 'top' | 'bottom' }.
  const fronts = (x, w, top, rows) => {
    let y = top + 0.25;
    for (const r of rows) {
      const mid = x + w / 2;
      if (r.pair) {
        rect(x + 0.25, y, w / 2 - 0.375, r.h - 0.5, 'front');
        rect(mid + 0.125, y, w / 2 - 0.375, r.h - 0.5, 'front');
        const py = r.pull === 'bottom' ? y + r.h - 6.5 : y + 2;
        line(mid - 1.5, py, mid - 1.5, py + 4, 'pull');
        line(mid + 1.5, py, mid + 1.5, py + 4, 'pull');
      } else {
        rect(x + 0.25, y, w - 0.5, r.h - 0.5, 'front');
        const py = r.pull === 'top' ? y + 3 : y + r.h / 2;
        line(mid - 2, py, mid + 2, py, 'pull');
      }
      y += r.h;
    }
  };
  const cabinet = (x, w, h) => { rect(x, FLOOR - h, w, h - TOE, 'box'); rect(x, FLOOR - TOE, w, TOE, 'toe'); };

  let x = MARGIN;
  const face = BOX - TOE;
  for (const c of run) {
    if (c.kind === 'gap') {
      const h = c.h || BOX;
      rect(x, FLOOR - h, c.w, h, 'gap');
      text(x + c.w / 2, FLOOR - h / 2, c.tag, 'gaplabel');
    } else if (c.kind === 'panel') {
      rect(x, FLOOR - c.h, c.w, c.h, 'box');
    } else if (c.kind === 'pantry') {
      cabinet(x, c.w, c.h);
      const lower = 45, upper = c.h - TOE - lower;
      fronts(x, c.w, FLOOR - c.h, [{ h: upper, pair: true, pull: 'bottom' }, { h: lower, pair: true }]);
    } else {
      cabinet(x, c.w, BOX);
      if (c.kind === 'drawers') {
        const rest = (face - 6) / (c.n - 1);
        fronts(x, c.w, FLOOR - BOX, [{ h: 6 }, ...Array(c.n - 2).fill({ h: rest }), { h: rest, pull: 'top' }]);
      } else if (c.kind === 'door') fronts(x, c.w, FLOOR - BOX, [{ h: face, pull: 'top' }]);
      else if (c.kind === 'sink' || c.kind === 'base') fronts(x, c.w, FLOOR - BOX, [{ h: 6 }, { h: face - 6, pair: true }]); // false front / drawer over doors
      else if (c.kind === 'oven') { // 29" oven face from 5" to 34" off the floor
        const ow = Math.min(29.75, c.w - 0.25), ox = x + (c.w - ow) / 2;
        rect(ox, FLOOR - 34, ow, 29, 'oven');
        rect(ox + 3, FLOOR - 28, ow - 6, 18, 'window');
        line(ox + 3, FLOOR - 31.5, ox + ow - 3, FLOOR - 31.5, 'pull');
      }
    }
    if (c.cooktop) rect(x + (c.w - 30) / 2, FLOOR - BOX - TOP - 0.75, 30, 0.75, 'cooktop');
    if (c.name) text(x + c.w / 2, FLOOR + 5, c.name, 'name');
    text(x + c.w / 2, FLOOR + 8.5, c.code, 'code');
    text(x + c.w / 2, FLOOR + 11.5, `${c.w}"`, 'dim');
    line(x, FLOOR + 1, x, FLOOR + 12, 'tick');
    c.x = x;
    x += c.w;
  }

  // Countertop over each stretch of base-height items; 1" overhang only at the ends of the run.
  run.forEach((c, i) => {
    if (c.h || (i > 0 && !run[i - 1].h)) return;
    let j = i;
    while (j + 1 < run.length && !run[j + 1].h) j++;
    const l = c.x - (i === 0 ? 1 : 0), r = run[j].x + run[j].w + (j === run.length - 1 ? 1 : 0);
    rect(l, FLOOR - BOX - TOP, r - l, TOP, 'counter');
  });

  if (total) {
    line(x, FLOOR + 1, x, FLOOR + 12, 'tick');
    line(MARGIN, FLOOR + 15, x, FLOOR + 15, 'dimline');
    text(MARGIN + total / 2, FLOOR + 18.5, `${total}"`, 'dim');
  } else {
    text(W / 2, FLOOR - 18, 'no cabinets yet', 'code');
  }
  line(0, FLOOR, W, FLOOR, 'floor');

  document.title = `Sketch — ${title}`;
  document.body.innerHTML = `
    <style>
      body { margin: 24px; background: #fbfaf5; color: #223; font-family: system-ui, sans-serif; }
      h1 { margin: 0; text-transform: capitalize; } p { margin: 4px 0 16px; color: #667; } a { color: #2a5d9f; }
      svg { max-width: 100%; height: auto; background: #fff; box-shadow: 0 1px 4px #0002; }
      .grid { fill: none; stroke: #bcd3ea; stroke-width: 0.1; } .ft { stroke: #8fb2d6; stroke-width: 0.2; }
      .box { fill: #f3ead9; stroke: #223; stroke-width: 0.3; }
      .front { fill: #fffdf7; stroke: #223; stroke-width: 0.2; }
      .toe { fill: #556; } .counter { fill: #8a8f99; stroke: #223; stroke-width: 0.2; }
      .cooktop { fill: #111; } .pull { stroke: #223; stroke-width: 0.4; stroke-linecap: round; }
      .oven { fill: #c9ccd2; stroke: #223; stroke-width: 0.25; } .window { fill: #3a3f4a; }
      .gap { fill: none; stroke: #223; stroke-width: 0.25; stroke-dasharray: 1.5 1; }
      .floor { stroke: #223; stroke-width: 0.4; } .tick, .dimline { stroke: #667; stroke-width: 0.15; }
      text { text-anchor: middle; font-size: 2.4px; fill: #223; }
      .name { font-weight: 700; } .code { font-size: 2.2px; } .dim { font-size: 2px; fill: #667; }
      .gaplabel { font-size: 3px; fill: #667; }
    </style>
    <h1>${title}</h1>
    <p><a href="index.html">index</a></p>
    <p>Front elevation · 1 square = 6" · bold line = ${BOLD}"</p>
    <svg viewBox="0 0 ${W} ${H}" width="${W * PX}" height="${H * PX}">
      <defs>
        <pattern id="sq" width="${SQ}" height="${SQ}" patternUnits="userSpaceOnUse">
          <path d="M ${SQ} 0 L 0 0 0 ${SQ}" class="grid"/></pattern>
        <pattern id="ft" x="${MARGIN}" y="${FLOOR}" width="${BOLD}" height="${BOLD}" patternUnits="userSpaceOnUse">
          <rect width="${BOLD}" height="${BOLD}" fill="url(#sq)"/>
          <path d="M ${BOLD} 0 L 0 0 0 ${BOLD}" class="grid ft"/></pattern>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#ft)"/>
      ${out.join('\n')}
    </svg>`;
}
