

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BL-JhSKH.js","_app/immutable/chunks/CQt8amKk.js","_app/immutable/chunks/CUqRO1f7.js","_app/immutable/chunks/CWztfNBP.js"];
export const stylesheets = [];
export const fonts = [];
