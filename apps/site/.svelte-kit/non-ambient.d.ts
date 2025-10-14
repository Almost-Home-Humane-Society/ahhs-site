
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/blog" | "/blog/[id]" | "/cats" | "/cats/available" | "/dogs" | "/dogs/available" | "/donate" | "/events" | "/events/components" | "/events/[slug]" | "/faq" | "/handbooks" | "/handbooks/cat" | "/handbooks/cat/sections" | "/handbooks/dog" | "/handbooks/dog/sections" | "/pocket-pals" | "/pocket-pals/available" | "/resources" | "/resources/local" | "/resources/lost-and-found" | "/resources/microchipping" | "/resources/pet-food-assistance" | "/resources/vaccinations";
		RouteParams(): {
			"/blog/[id]": { id: string };
			"/events/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { id?: string; slug?: string };
			"/about": Record<string, never>;
			"/blog": { id?: string };
			"/blog/[id]": { id: string };
			"/cats": Record<string, never>;
			"/cats/available": Record<string, never>;
			"/dogs": Record<string, never>;
			"/dogs/available": Record<string, never>;
			"/donate": Record<string, never>;
			"/events": { slug?: string };
			"/events/components": Record<string, never>;
			"/events/[slug]": { slug: string };
			"/faq": Record<string, never>;
			"/handbooks": Record<string, never>;
			"/handbooks/cat": Record<string, never>;
			"/handbooks/cat/sections": Record<string, never>;
			"/handbooks/dog": Record<string, never>;
			"/handbooks/dog/sections": Record<string, never>;
			"/pocket-pals": Record<string, never>;
			"/pocket-pals/available": Record<string, never>;
			"/resources": Record<string, never>;
			"/resources/local": Record<string, never>;
			"/resources/lost-and-found": Record<string, never>;
			"/resources/microchipping": Record<string, never>;
			"/resources/pet-food-assistance": Record<string, never>;
			"/resources/vaccinations": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/blog" | "/blog/" | `/blog/${string}` & {} | `/blog/${string}/` & {} | "/cats" | "/cats/" | "/cats/available" | "/cats/available/" | "/dogs" | "/dogs/" | "/dogs/available" | "/dogs/available/" | "/donate" | "/donate/" | "/events" | "/events/" | "/events/components" | "/events/components/" | `/events/${string}` & {} | `/events/${string}/` & {} | "/faq" | "/faq/" | "/handbooks" | "/handbooks/" | "/handbooks/cat" | "/handbooks/cat/" | "/handbooks/cat/sections" | "/handbooks/cat/sections/" | "/handbooks/dog" | "/handbooks/dog/" | "/handbooks/dog/sections" | "/handbooks/dog/sections/" | "/pocket-pals" | "/pocket-pals/" | "/pocket-pals/available" | "/pocket-pals/available/" | "/resources" | "/resources/" | "/resources/local" | "/resources/local/" | "/resources/lost-and-found" | "/resources/lost-and-found/" | "/resources/microchipping" | "/resources/microchipping/" | "/resources/pet-food-assistance" | "/resources/pet-food-assistance/" | "/resources/vaccinations" | "/resources/vaccinations/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/Dog_1.webp" | "/Dog_2.webp" | "/ahhs_cat_1.webp" | "/ahhs_dog_1.webp" | "/ahhs_mission_1.webp" | "/ahhs_mission_2.webp" | "/ahhs_rabbit_1.webp" | "/ahhs_values_1.webp" | "/ahhs_vision_1.webp" | "/child_cat.webp" | "/dog_cat_girl.webp" | "/dog_guy.webp" | "/favicon.ico" | "/favicon.png" | "/favicon.svg" | "/food_pantry.pdf" | "/girl_hugging_dog_cat.webp" | "/icon512_maskable.png" | "/icon512_rounded.png" | "/local_partners.webp" | "/manifest.json" | "/pet_pattern.svg" | "/robots.txt" | "/vaccines.webp" | "/woman_dog.webp" | string & {};
	}
}