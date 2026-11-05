// Row of links across the top of every page: Model, Sketches, Documentation, then Pricing (same as index.html).
// Loaded with defer, so it runs after sketch.js has rebuilt the body. On model.html it goes inside the header,
// which the canvas subtracts from the window height.
const groups = [
  [['index.html', 'Index']],
  [['drawings/model.html', '3D model']],
  [['drawings/sketch-top.html', 'Top view'], ['drawings/sketch-island-front.html', 'Island front'], ['drawings/sketch-wall-front.html', 'Wall front']],
  [['docs/issues.html', 'Issues'], ['docs/cabinets.html', 'Cabinets'], ['docs/appliances.html', 'Appliances'], ['docs/electrical.html', 'Electrical'], ['docs/walls.html', 'Walls'], ['docs/countertop-backsplash.html', 'Countertop and backsplash'], ['docs/countertop-brief.html', 'Countertop brief'], ['docs/lighting.html', 'Lighting scenes'], ['docs/trade-sequence.html', 'Trade sequence'], ['docs/review1.html', 'Review 1']],
  [['pricing/price.html', 'Price'], ['pricing/comparison.html', 'Comparison'], ['pricing/quote-cabinets-colonial.html', 'Quote: Colonial'], ['pricing/quote-cabinets-monaco.html', 'Quote: Monaco'], ['pricing/quote-citycabinets.html', 'Quote: City']],
];
// Links are relative to this script's folder (the site root), so pages in subfolders load it as ../nav.js.
const root = document.currentScript.src;
const url = href => new URL(href, root).href;
const here = location.href.split('#')[0].replace(/\/$/, '/index.html');
const nav = document.createElement('nav');
nav.innerHTML = `<style>
  nav.links { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 0 0 16px; padding-bottom: 8px; border-bottom: 1px solid #ccd; font: 15px/1.5 system-ui, sans-serif; }
  nav.links a { color: #2a5d9f; } nav.links b { color: #223; } nav.links span { color: #ccd; }
</style>` + groups.map(g => g.map(([href, label]) => url(href) === here ? `<b>${label}</b>` : `<a href="${url(href)}">${label}</a>`).join('')).join('<span>|</span>');
nav.className = 'links';
(document.querySelector('header') ?? document.body).prepend(nav);
document.head.insertAdjacentHTML('beforeend', `<link rel="icon" href="${url('favicon.svg')}" type="image/svg+xml">`);
