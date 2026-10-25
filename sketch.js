// Draws a run of cabinets in front elevation on graph paper.
// All units are inches; one grid square = 6".
const SQ = 6, BOLD = 30, PX = 5;      // inches per square, per bold line (from the run's left end and the floor), screen px per inch
const TOE = 4.5, BOX = 34.5, TOP = 1.25; // toe kick, cabinet height, 3 cm countertop
const MARGIN = 12, CEILING = 96;

// Items with `h` are tall (panels, pantry, fridge space) and get no countertop.
// opts.riser: top of a wall behind the counter, off the floor, spanning the cabinet run.
function sketch(title, run, opts = {}) {
  const total = run.reduce((s, c) => s + c.w, 0);
  const tallest = Math.max(CEILING, ...run.map(c => c.h || 0), ...run.flatMap(c => (c.upper || []).map(u => u.at + (u.h || 0))));
  const FLOOR = Math.ceil((tallest + 12) / SQ) * SQ, H = FLOOR + 24;
  const W = MARGIN * 2 + Math.max(total, 96) + 24; // + room for the elevation ruler
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

  if (opts.riser) rect(MARGIN, FLOOR - opts.riser, total, opts.riser - BOX - TOP, 'riser'); // behind everything else

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
      const lower = BOX - TOE, upper = c.h - TOE - lower; // lower doors line up with the base cabinets
      fronts(x, c.w, FLOOR - c.h, [{ h: upper, pair: true, pull: 'bottom' }, { h: lower, pair: true }]);
    } else {
      cabinet(x, c.w, BOX);
      if (c.kind === 'drawers') {
        const rest = (face - 6) / (c.n - 1);
        fronts(x, c.w, FLOOR - BOX, [{ h: 6 }, ...Array(c.n - 2).fill({ h: rest }), { h: rest, pull: 'top' }]);
      } else if (c.kind === 'door') fronts(x, c.w, FLOOR - BOX, [{ h: face, pull: 'top' }]);
      else if (c.kind === 'sink') fronts(x, c.w, FLOOR - BOX, [{ h: 6 }, { h: face - 6, pair: true }]); // false front over doors
      else if (c.kind === 'base') fronts(x, c.w, FLOOR - BOX, [{ h: 6 }, { h: face - 6, pull: 'top' }]); // drawer over one door
      else if (c.kind === 'oven') { // 29" oven face from 5" to 34" off the floor
        const ow = Math.min(29.75, c.w - 0.25), ox = x + (c.w - ow) / 2;
        rect(ox, FLOOR - 34, ow, 29, 'oven');
        rect(ox + 3, FLOOR - 28, ow - 6, 18, 'window');
        line(ox + 3, FLOOR - 31.5, ox + ow - 3, FLOOR - 31.5, 'pull');
      }
    }
    // Things hung above this item. Cabinet: { code, h, at: bottom off the floor, glass }; hood: { hood: true, w, h, at, chimney }; shelf: { shelf: true, at: top off the floor }; plain strip: { filler: true, h, at }; microwave: { microwave: true, w, h, at }; coffee maker: { coffee: true, w, h, at }; other appliance: { appliance, w, h, at, dx }.
    for (const u of c.upper || []) {
      if (u.microwave) { // countertop microwave, centered: { microwave: true, w, h, at: bottom off the floor }
        const mx = x + (c.w - u.w) / 2, top = FLOOR - u.at - u.h;
        rect(mx, top, u.w, u.h, 'oven');
        rect(mx + 1.5, top + 1.5, u.w - 8, u.h - 5, 'window');
        for (let i = 0; i < 4; i++) rect(mx + u.w - 5, top + 1.5 + i * 2, 3.5, 1.2, 'front'); // keypad
        text(mx + u.w / 2, top + u.h - 1.2, 'microwave', 'code');
        continue;
      }
      if (u.coffee) { // drip coffee maker, centered: { coffee: true, w, h, at: bottom off the floor }
        const cx = x + (c.w - u.w) / 2, top = FLOOR - u.at - u.h;
        rect(cx, top, u.w, u.h, 'oven');
        rect(cx + 1.5, top + u.h - 7, u.w - 3, 6, 'glass'); // carafe
        text(cx + u.w / 2, top + 3, 'coffee', 'code');
        continue;
      }
      if (u.appliance) { // plain appliance box: { appliance: label, w, h, at: bottom off the floor, dx: offset from the left (default centered) }
        const ax = x + (u.dx ?? (c.w - u.w) / 2), top = FLOOR - u.at - u.h;
        rect(ax, top, u.w, u.h, 'oven');
        text(ax + u.w / 2, top + u.h / 2 + 0.8, u.appliance, 'code');
        continue;
      }
      if (u.hood) { // island hood, centered: { hood: true, w, h: canopy height, at: canopy bottom off the floor, chimney: width }; chimney runs to the ceiling
        const top = FLOOR - u.at - u.h;
        rect(x + (c.w - u.chimney) / 2, FLOOR - CEILING, u.chimney, CEILING - u.at - u.h, 'oven');
        rect(x + (c.w - u.w) / 2, top, u.w, u.h, 'oven');
        text(x + c.w / 2, top - 2, 'hood', 'code');
        continue;
      }
      if (u.filler) { rect(x, FLOOR - u.at - u.h, c.w, u.h, 'box'); continue; }
      if (u.shelf) {
        rect(x, FLOOR - u.at, c.w, 0.75, 'shelf');
        text(x + c.w / 2, FLOOR - u.at - 1, `shelf ${u.at}"`, 'dim');
        continue;
      }
      const top = FLOOR - u.at - u.h;
      rect(x, top, c.w, u.h, 'box');
      fronts(x, c.w, top, [{ h: u.h, pair: true, pull: 'bottom' }]);
      if (u.glass) for (const gx of [x + 2, x + c.w / 2 + 1.875]) rect(gx, top + 2, c.w / 2 - 3.875, u.h - 4.5, 'glass');
      text(x + c.w / 2, top + u.h / 2, u.code, 'code');
    }
    if (c.cooktop) rect(x + (c.w - 30) / 2, FLOOR - BOX - TOP - 0.75, 30, 0.75, 'cooktop');
    if (c.faucet) { // { h, reach, back }, centered on the cabinet: column on the counter, pull-down sprayer hanging in front
      const fx = x + c.w / 2, top = FLOOR - BOX - TOP - c.faucet.h;
      rect(fx - 1.25, FLOOR - BOX - TOP - 0.5, 2.5, 0.5, 'faucet');
      rect(fx - 0.6875, top, 1.375, c.faucet.h - 0.5, 'faucet');
      rect(fx - 0.875, top + 1, 1.75, 7, 'faucet');
    }
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

  // Elevation ruler on the right, off the floor; marks at the same height share a label.
  const rx = MARGIN + Math.max(total, 96) + 4;
  const marks = new Map();
  const mark = (at, label) => marks.set(at, [...new Set([...(marks.get(at) || []), label])]);
  mark(TOE, 'toe kick');
  mark(BOX + TOP, 'counter');
  if (opts.riser) mark(opts.riser, 'riser');
  for (const c of run) if (c.faucet) mark(BOX + TOP + c.faucet.h, 'faucet');
  for (const u of run.flatMap(c => c.upper || [])) {
    if (u.shelf) mark(u.at, 'shelf');
    else if (u.hood) mark(u.at, 'hood');
    else if (u.code) mark(u.at + u.h, 'uppers');
  }
  mark(CEILING, 'ceiling');
  line(rx, FLOOR, rx, FLOOR - CEILING, 'dimline');
  for (const [m, labels] of marks) {
    line(rx - 1, FLOOR - m, rx + 1, FLOOR - m, 'tick');
    text(rx + 1.5, FLOOR - m + 0.7, `${m}" ${labels.join(', ')}`, 'dim ruler');
  }

  if (total) {
    line(x, FLOOR + 1, x, FLOOR + 12, 'tick');
    line(MARGIN, FLOOR + 15, x, FLOOR + 15, 'dimline');
    text(MARGIN + total / 2, FLOOR + 18.5, `${total}"`, 'dim');
  } else {
    text(W / 2, FLOOR - 18, 'no cabinets yet', 'code');
  }
  line(0, FLOOR, W, FLOOR, 'floor');

  page(title, 'Front elevation', W, H, FLOOR, out);
}

// Draws a run of cabinets in plan (top view): the counter front is at the bottom, the riser at the top.
// Depths are measured from the counter front; grid lines from the run's left end and the counter front.
const DEPTH = 24, COUNTER = 25, RISER = 4.5; // cabinet box, countertop (1" over the fronts), riser thickness (assumed)
function plan(title, run, opts = {}) {
  const total = run.reduce((s, c) => s + c.w, 0);
  const back = COUNTER + (opts.riser ? RISER : 0);
  const FRONT = MARGIN + Math.ceil(back / SQ) * SQ, H = FRONT + 24;
  const W = MARGIN * 2 + total + 30;
  const out = [];
  const rect = (x, y, w, h, cls = '') => out.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}"/>`);
  const line = (x1, y1, x2, y2, cls = '') => out.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`);
  const text = (x, y, s, cls = '') => out.push(`<text x="${x}" y="${y}" class="${cls}">${s}</text>`);

  if (opts.riser) rect(MARGIN, FRONT - back, total, RISER, 'riser');
  rect(MARGIN - 1, FRONT - COUNTER, total + 2, COUNTER, 'counter top'); // 1" overhang at each end
  let x = MARGIN;
  for (const c of run) {
    rect(x, FRONT - COUNTER, c.w, DEPTH, c.kind === 'gap' ? 'gap' : 'hidden'); // under the counter
    if (c.kind === 'gap') text(x + c.w / 2, FRONT - COUNTER / 2, c.tag, 'gaplabel');
    if (c.cooktop) { // Bosch NIT8061UC: 31" x 21 1/4", centered on the counter
      const cx = x + (c.w - 31) / 2, cy = FRONT - (COUNTER + 21.25) / 2;
      rect(cx, cy, 31, 21.25, 'cooktop');
      for (const [dx, dy, r] of [[8, 6, 4], [23, 6, 4], [8, 15.25, 4], [23, 15.25, 4]]) out.push(`<circle cx="${cx + dx}" cy="${cy + dy}" r="${r}" class="burner"/>`);
    }
    if (c.kind === 'sink') { // Ruvati RVH6222ST: 33.5" x 19" outer, centered on the cabinet, 2" from the counter front
      const sx = x + (c.w - 33.5) / 2, sy = FRONT - 2 - 19;
      rect(sx, sy, 33.5, 19, 'sinkbowl');
    }
    if (c.faucet) { // hole c.faucet.back in front of the riser, spout reaching c.faucet.reach toward the front
      const fx = x + c.w / 2, fy = FRONT - COUNTER + c.faucet.back;
      line(fx, fy, fx, fy + c.faucet.reach, 'spout');
      out.push(`<circle cx="${fx}" cy="${fy}" r="1.25" class="faucet"/>`, `<circle cx="${fx}" cy="${fy + c.faucet.reach}" r="0.875" class="faucet"/>`);
    }
    if (c.name) text(x + c.w / 2, FRONT + 5, c.name, 'name');
    text(x + c.w / 2, FRONT + 8.5, c.code, 'code');
    text(x + c.w / 2, FRONT + 11.5, `${c.w}"`, 'dim');
    line(x, FRONT + 1, x, FRONT + 12, 'tick');
    x += c.w;
  }
  line(x, FRONT + 1, x, FRONT + 12, 'tick');
  line(MARGIN, FRONT + 15, x, FRONT + 15, 'dimline');
  text(MARGIN + total / 2, FRONT + 18.5, `${total}"`, 'dim');

  // Depth ruler on the right, from the counter front.
  const rx = MARGIN + total + 4;
  const marks = [[0, `counter front (${COUNTER - DEPTH}" over the cabinets)`], [COUNTER, opts.riser ? 'counter back, riser' : 'counter back']];
  if (opts.riser) marks.push([back, 'riser back']);
  line(rx, FRONT, rx, FRONT - back, 'dimline');
  for (const [m, label] of marks) {
    line(rx - 1, FRONT - m, rx + 1, FRONT - m, 'tick');
    text(rx + 1.5, FRONT - m + 0.7, `${m}" ${label}`, 'dim ruler');
  }
  page(title, 'Top view (plan)', W, H, FRONT, out);
}

// Wraps a drawing in the page: graph paper with bold lines every BOLD" from (MARGIN, oy).
function page(title, view, W, H, oy, out) {
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
      .riser { fill: #e4dccb; stroke: #223; stroke-width: 0.25; }
      .cooktop { fill: #111; } .burner { fill: none; stroke: #667; stroke-width: 0.3; }
      .top { fill: #e9eaed; } .hidden { fill: none; stroke: #223; stroke-width: 0.2; stroke-dasharray: 1 0.6; }
      .faucet { fill: #2b2b2b; stroke: #b08d57; stroke-width: 0.2; } .spout { stroke: #2b2b2b; stroke-width: 1.375; }
      .sinkbowl { fill: #c9ccd2; stroke: #223; stroke-width: 0.3; } .pull { stroke: #223; stroke-width: 0.4; stroke-linecap: round; }
      .oven { fill: #c9ccd2; stroke: #223; stroke-width: 0.25; } .window { fill: #3a3f4a; }
      .glass { fill: #dbe9f2; stroke: #223; stroke-width: 0.15; } .shelf { fill: #f3ead9; stroke: #223; stroke-width: 0.2; }
      .gap { fill: none; stroke: #223; stroke-width: 0.25; stroke-dasharray: 1.5 1; }
      .floor { stroke: #223; stroke-width: 0.4; } .tick, .dimline { stroke: #667; stroke-width: 0.15; }
      text { text-anchor: middle; font-size: 2.4px; fill: #223; }
      .name { font-weight: 700; } .code { font-size: 2.2px; } .dim { font-size: 2px; fill: #667; }
      .gaplabel { font-size: 3px; fill: #667; } .ruler { text-anchor: start; }
    </style>
    <h1>${title}</h1>
    <p><a href="index.html">index</a></p>
    <p>${view} · 1 square = 6" · bold line = ${BOLD}"</p>
    <svg viewBox="0 0 ${W} ${H}" width="${W * PX}" height="${H * PX}">
      <defs>
        <pattern id="sq" width="${SQ}" height="${SQ}" patternUnits="userSpaceOnUse">
          <path d="M ${SQ} 0 L 0 0 0 ${SQ}" class="grid"/></pattern>
        <pattern id="ft" x="${MARGIN}" y="${oy}" width="${BOLD}" height="${BOLD}" patternUnits="userSpaceOnUse">
          <rect width="${BOLD}" height="${BOLD}" fill="url(#sq)"/>
          <path d="M ${BOLD} 0 L 0 0 0 ${BOLD}" class="grid ft"/></pattern>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#ft)"/>
      ${out.join('\n')}
    </svg>`;
}
