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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/cats/available","/dogs/available","/donate","/faq","/handbooks/cat","/handbooks/dog","/pocket-pals/available","/resources/local","/resources/lost-and-found","/resources/microchipping","/resources/pet-food-assistance","/resources/vaccinations"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
