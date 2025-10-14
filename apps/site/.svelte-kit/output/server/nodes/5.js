

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_id_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BL-JhSKH.js","_app/immutable/chunks/CQt8amKk.js","_app/immutable/chunks/CUqRO1f7.js","_app/immutable/chunks/CWztfNBP.js"];
export const stylesheets = [];
export const fonts = [];
