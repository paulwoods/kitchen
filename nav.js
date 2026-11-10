// Row of links across the top of every page: Model, Sketches, Documentation, Pricing (as in index.html).
// Loaded with defer, so it runs after sketch.js has added the drawings. On model.html it goes inside the header,
// which the canvas subtracts from the window height.
const groups = [
  [['index.html', 'Index']],
  [['drawings/model.html', '3D model']],
  [['drawings/sketches.html', 'Sketches']],
  [['docs/cabinets.html', 'Cabinets'], ['docs/selections.html', 'Selections'], ['docs/countertop.html', 'Countertop'], ['docs/backsplash.html', 'Backsplash'], ['docs/pick.html', 'Pick'], ['docs/lighting.html', 'Lighting']],
  [['docs/electrical.html', 'Electrical'], ['docs/walls.html', 'Walls'], ['docs/contractors.html', 'Contractors'], ['docs/sequence.html', 'Sequence']],
  [['pricing/price.html', 'Price']],
];
// Links are relative to this script's folder (the site root), so pages in subfolders load it as ../nav.js.
const root = document.currentScript.src;
const url = href => new URL(href, root).href;
const here = location.href.split('#')[0].replace(/\/$/, '/index.html');
const nav = document.createElement('nav');
nav.innerHTML = `<style>
  nav.links { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 0 0 16px; padding-bottom: 8px; border-bottom: 1px solid var(--rule); font: 15px/1.5 system-ui, sans-serif; }
  nav.links a { color: var(--link); } nav.links b { color: var(--ink); } nav.links > span { color: var(--rule); }
  nav.links i { display: inline-block; font: 600 11px/1 system-ui, sans-serif; font-style: normal; margin-left: 4px; padding: 1px 6px; border-radius: 8px; vertical-align: 2px; background: var(--yellow); color: var(--paper); }
</style>` + groups.map(g => g.map(([href, label]) => url(href) === here ? `<b>${label}</b>` : `<a href="${url(href)}">${label}</a>`).join('')).join('<span>|</span>');
nav.className = 'links';
(document.querySelector('header') ?? document.body).prepend(nav);
// A pill after each label counting the open items on that page (the <ol> right after h2#open).
// The current page counts its own list; others are fetched, or read from open.js when opened from the folder (file:).
const count = doc => { const l = doc.getElementById('open')?.nextElementSibling; return l?.tagName === 'OL' ? l.children.length : 0; };
const pill = (e, n) => n && e.insertAdjacentHTML('beforeend', `<i title="${n} open item${n === 1 ? '' : 's'}">${n}</i>`);
const fromFile = new Promise(ok => { const s = document.createElement('script'); s.src = url('open.js'); s.onload = () => ok(OPEN); s.onerror = () => ok({}); document.head.append(s); });
groups.flat().forEach(([href], k) => {
  const e = nav.querySelectorAll('a, b')[k];
  if (href === 'index.html') return;
  if (url(href) === here) return pill(e, count(document));
  fetch(url(href)).then(r => r.text()).then(html => count(new DOMParser().parseFromString(html, 'text/html')))
    .catch(() => fromFile.then(o => o[href] ?? 0)).then(n => pill(e, n));
});
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
