// Draws a run of base cabinets in front elevation on graph paper.
// All units are inches; one grid square = 6".
const SQ = 6, BOLD = 30, PX = 5;      // inches per square, per bold line (from the run's left end and the floor), screen px per inch
const TOE = 4.5, BOX = 34.5, TOP = 1.25; // toe kick, cabinet height, 3 cm countertop
const MARGIN = 12, FLOOR = 54, H = 78;  // drawing area, floor line from top

function sketch(title, run) {
  const total = run.reduce((s, c) => s + c.w, 0);
  const W = MARGIN * 2 + Math.max(total, 96);
  const out = [];
  const rect = (x, y, w, h, cls = '') => out.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}"/>`);
  const line = (x1, y1, x2, y2, cls = '') => out.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`);
  const text = (x, y, s, cls = '') => out.push(`<text x="${x}" y="${y}" class="${cls}">${s}</text>`);
  const pull = (x, y, w) => line(x + w / 2 - 2, y, x + w / 2 + 2, y, 'pull');

  // Stack of fronts filling the face: heights in inches, top to bottom.
  const fronts = (x, w, heights, splitLast) => {
    let y = FLOOR - BOX + 0.25;
    heights.forEach((h, i) => {
      const last = i === heights.length - 1;
      if (last && splitLast) { // pair of doors
        rect(x + 0.25, y, w / 2 - 0.375, h - 0.5, 'front');
        rect(x + w / 2 + 0.125, y, w / 2 - 0.375, h - 0.5, 'front');
        line(x + w / 2 - 1.5, y + 2, x + w / 2 - 1.5, y + 6, 'pull');
        line(x + w / 2 + 1.5, y + 2, x + w / 2 + 1.5, y + 6, 'pull');
      } else {
        rect(x + 0.25, y, w - 0.5, h - 0.5, 'front');
        pull(x, y + (last ? 3 : h / 2), w);
      }
      y += h;
    });
  };

  let x = MARGIN;
  for (const c of run) {
    const face = BOX - TOE;
    if (c.kind === 'gap') {
      rect(x, FLOOR - BOX, c.w, BOX, 'gap');
      text(x + c.w / 2, FLOOR - BOX / 2, 'DW', 'gaplabel');
    } else {
      rect(x, FLOOR - BOX, c.w, face, 'box');
      rect(x, FLOOR - TOE, c.w, TOE, 'toe');
      if (c.kind === 'drawers') {
        const rest = (face - 6) / (c.n - 1);
        fronts(x, c.w, [6, ...Array(c.n - 1).fill(rest)]);
      } else if (c.kind === 'door') fronts(x, c.w, [face]);
      else if (c.kind === 'sink') fronts(x, c.w, [6, face - 6], true);   // false front over doors
      else if (c.kind === 'base') fronts(x, c.w, [6, face - 6], true);   // drawer over doors
    }
    if (c.cooktop) rect(x + (c.w - 30) / 2, FLOOR - BOX - TOP - 0.75, 30, 0.75, 'cooktop');
    if (c.name) text(x + c.w / 2, FLOOR + 5, c.name, 'name');
    text(x + c.w / 2, FLOOR + 8.5, c.code, 'code');
    text(x + c.w / 2, FLOOR + 11.5, `${c.w}"`, 'dim');
    line(x, FLOOR + 1, x, FLOOR + 12, 'tick');
    x += c.w;
  }
  if (total) {
    line(x, FLOOR + 1, x, FLOOR + 12, 'tick');
    rect(MARGIN - 1, FLOOR - BOX - TOP, total + 2, TOP, 'counter'); // 1" overhang each end
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
      h1 { margin: 0; text-transform: capitalize; } p { margin: 4px 0 16px; color: #667; }
      svg { max-width: 100%; height: auto; background: #fff; box-shadow: 0 1px 4px #0002; }
      .grid { fill: none; stroke: #bcd3ea; stroke-width: 0.1; } .ft { stroke: #8fb2d6; stroke-width: 0.2; }
      .box { fill: #f3ead9; stroke: #223; stroke-width: 0.3; }
      .front { fill: #fffdf7; stroke: #223; stroke-width: 0.2; }
      .toe { fill: #556; } .counter { fill: #8a8f99; stroke: #223; stroke-width: 0.2; }
      .cooktop { fill: #111; } .pull { stroke: #223; stroke-width: 0.4; stroke-linecap: round; }
      .gap { fill: none; stroke: #223; stroke-width: 0.25; stroke-dasharray: 1.5 1; }
      .floor { stroke: #223; stroke-width: 0.4; } .tick, .dimline { stroke: #667; stroke-width: 0.15; }
      text { text-anchor: middle; font-size: 2.4px; fill: #223; }
      .name { font-weight: 700; } .code { font-size: 2.2px; } .dim { font-size: 2px; fill: #667; }
      .gaplabel { font-size: 3px; fill: #667; }
    </style>
    <h1>${title}</h1>
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
