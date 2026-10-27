// Row of links across the top of every page: Drawings and model, Documentation, then Pricing (same as index.html).
// Loaded with defer, so it runs after sketch.js has rebuilt the body. On model.html it goes inside the header,
// which the canvas subtracts from the window height.
const groups = [
  [['index.html', 'Index']],
  [['sketch-top.html', 'Top view'], ['sketch-island-front.html', 'Island front'], ['sketch-wall-front.html', 'Wall front'], ['model.html', '3D model']],
  [['issues.html', 'Issues'], ['cabinets.html', 'Cabinets'], ['appliances.html', 'Appliances'], ['electrical.html', 'Electrical'], ['review1.html', 'Review 1']],
  [['quote-accessbycabinetjoint.html', 'Quote: Access'], ['quote-cabinets-monaco.html', 'Quote: Monaco'], ['quote-cabinets-cosmopolitan.html', 'Quote: Cosmopolitan'], ['quote-rtawoodcabinets-edgeline.html', 'Quote: Edgeline'], ['quote-barker.html', 'Quote: Barker'], ['quote-thertastore-madison.html', 'Quote: Madison']],
];
const here = location.pathname.split('/').pop() || 'index.html';
const nav = document.createElement('nav');
nav.innerHTML = `<style>
  nav.links { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 0 0 16px; padding-bottom: 8px; border-bottom: 1px solid #ccd; font: 15px/1.5 system-ui, sans-serif; }
  nav.links a { color: #2a5d9f; } nav.links b { color: #223; } nav.links span { color: #ccd; }
</style>` + groups.map(g => g.map(([href, label]) => href === here ? `<b>${label}</b>` : `<a href="${href}">${label}</a>`).join('')).join('<span>|</span>');
nav.className = 'links';
(document.querySelector('header') ?? document.body).prepend(nav);
