

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "csr": true
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.oOFusrUf.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/CwJCq5ve.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Bbz8S42w.js","_app/immutable/chunks/DOkyNicJ.js","_app/immutable/chunks/BTbWLSS6.js","_app/immutable/chunks/DfGQbNQ1.js","_app/immutable/chunks/Du9Chivu.js","_app/immutable/chunks/Bp3gu-vv.js","_app/immutable/chunks/B3tHj1nC.js","_app/immutable/chunks/ByswgImg.js","_app/immutable/chunks/BnTGlidr.js","_app/immutable/chunks/ByX24qRF.js","_app/immutable/chunks/abz52R_g.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/Co2I-fr9.js","_app/immutable/chunks/CcJnCJ5x.js"];
export const stylesheets = ["_app/immutable/assets/0.dGXhqWlZ.css"];
export const fonts = [];
