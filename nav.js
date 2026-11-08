// Row of links across the top of every page: Model, Sketches, Documentation, Pricing (as in index.html), then Issues.
// Loaded with defer, so it runs after sketch.js has added the drawings. On model.html it goes inside the header,
// which the canvas subtracts from the window height.
const groups = [
  [['index.html', 'Index']],
  [['drawings/model.html', '3D model']],
  [['drawings/sketches.html', 'Sketches']],
  [['docs/cabinets.html', 'Cabinets'], ['docs/selections.html', 'Selections'], ['docs/countertop.html', 'Countertop'], ['docs/backsplash.html', 'Backsplash'], ['docs/pick.html', 'Pick'], ['docs/lighting.html', 'Lighting']],
  [['docs/electrical.html', 'Electrical'], ['docs/walls.html', 'Walls'], ['docs/sequence.html', 'Sequence']],
  [['pricing/price.html', 'Price']],
  [['docs/issues.html', 'Issues']],
];
// Links are relative to this script's folder (the site root), so pages in subfolders load it as ../nav.js.
const root = document.currentScript.src;
const url = href => new URL(href, root).href;
const here = location.href.split('#')[0].replace(/\/$/, '/index.html');
const nav = document.createElement('nav');
nav.innerHTML = `<style>
  nav.links { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 0 0 16px; padding-bottom: 8px; border-bottom: 1px solid var(--rule); font: 15px/1.5 system-ui, sans-serif; }
  nav.links a { color: var(--link); } nav.links b { color: var(--ink); } nav.links span { color: var(--rule); }
</style>` + groups.map(g => g.map(([href, label]) => url(href) === here ? `<b>${label}</b>` : `<a href="${url(href)}">${label}</a>`).join('')).join('<span>|</span>');
nav.className = 'links';
(document.querySelector('header') ?? document.body).prepend(nav);
document.head.insertAdjacentHTML('beforeend', `<link rel="icon" href="${url('favicon.svg')}" type="image/svg+xml">`);

// Numbers from kitchen.js: <span data-k="counter + seat">45 1/4</span> shows DIMS.counter + DIMS.seat as inches (the typed text is the fallback).
// Loads kitchen.js when the page hasn't already.
const fillDims = () => {
  const val = k => new Function(...Object.keys(DIMS), 'return ' + k)(...Object.values(DIMS));
  for (const e of document.querySelectorAll('[data-k]')) e.textContent = inch(val(e.dataset.k));
};
if (document.querySelector('[data-k]')) {
  if (typeof DIMS === 'undefined') {
    const s = document.createElement('script');
    s.src = url('kitchen.js'); s.onload = fillDims;
    document.head.append(s);
  } else fillDims();
}
