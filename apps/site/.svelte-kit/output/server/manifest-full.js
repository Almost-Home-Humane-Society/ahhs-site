export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Dog_1.webp","Dog_2.webp","ahhs_cat_1.webp","ahhs_dog_1.webp","ahhs_mission_1.webp","ahhs_mission_2.webp","ahhs_rabbit_1.webp","ahhs_values_1.webp","ahhs_vision_1.webp","child_cat.webp","dog_cat_girl.webp","dog_guy.webp","favicon.ico","favicon.png","favicon.svg","food_pantry.pdf","girl_hugging_dog_cat.webp","icon512_maskable.png","icon512_rounded.png","local_partners.webp","manifest.json","pet_pattern.svg","robots.txt","vaccines.webp","woman_dog.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml",".pdf":"application/pdf",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Dy6jOBWa.js",app:"_app/immutable/entry/app.DJOdhIhj.js",imports:["_app/immutable/entry/start.Dy6jOBWa.js","_app/immutable/chunks/Bp3gu-vv.js","_app/immutable/chunks/B3tHj1nC.js","_app/immutable/chunks/CwJCq5ve.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Bbz8S42w.js","_app/immutable/chunks/DOkyNicJ.js","_app/immutable/chunks/ByswgImg.js","_app/immutable/entry/app.DJOdhIhj.js","_app/immutable/chunks/CwJCq5ve.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Bbz8S42w.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/B3tHj1nC.js","_app/immutable/chunks/DOkyNicJ.js","_app/immutable/chunks/BTbWLSS6.js","_app/immutable/chunks/DdFwr08K.js","_app/immutable/chunks/abz52R_g.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cats/available",
				pattern: /^\/cats\/available\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dogs/available",
				pattern: /^\/dogs\/available\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/donate",
				pattern: /^\/donate\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/handbooks/cat",
				pattern: /^\/handbooks\/cat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/handbooks/dog",
				pattern: /^\/handbooks\/dog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/pocket-pals/available",
				pattern: /^\/pocket-pals\/available\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/resources/local",
				pattern: /^\/resources\/local\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/resources/lost-and-found",
				pattern: /^\/resources\/lost-and-found\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/resources/microchipping",
				pattern: /^\/resources\/microchipping\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/resources/pet-food-assistance",
				pattern: /^\/resources\/pet-food-assistance\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/resources/vaccinations",
				pattern: /^\/resources\/vaccinations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
