export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/blog": [4],
		"/blog/[id]": [5],
		"/cats/available": [6],
		"/dogs/available": [7],
		"/donate": [8],
		"/events": [9],
		"/faq": [10],
		"/handbooks/cat": [11],
		"/handbooks/dog": [12],
		"/pocket-pals/available": [13],
		"/resources/local": [14],
		"/resources/lost-and-found": [15],
		"/resources/microchipping": [16],
		"/resources/pet-food-assistance": [17],
		"/resources/vaccinations": [18]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';