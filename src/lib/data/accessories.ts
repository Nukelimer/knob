// src/lib/data/accessories.ts
export interface AccessoryItem {
	slug: string;
	name: string;
	category: string;
	
}

export const accessories = [
	// 🧩 Keycaps
	{ slug: 'eye-candy-mx-artisan', name: 'Eye Candy (MX artisan)', category: 'Keycaps' },
	{ slug: 'knob-sans-mx-keyset', name: 'Knob Sans (MX keyset)', category: 'Keycaps' },
	{ slug: 'wrk-mx-alpha-keyset', name: 'wrk. MX Alpha (MX keyset)', category: 'Keycaps' },

	// 🎛️ Dials
	{ slug: 'wrk-dial-2', name: 'wrk. Dial 2', category: 'Nomad extra' },
	{ slug: 'wrk-together', name: 'wrk. together (Kailh)', category: 'Nomad extra' },
	{ slug: 'wrk-icon', name: 'wrk. Icon (Kailh)', category: 'Nomad extra' },
	{ slug: 'wrk-pure', name: 'wrk. Pure (Kailh)', category: 'Nomad extra' },
	{ slug: 'wrk-legend', name: 'wrk. Legend (Kailh)', category: 'Nomad extra' },
	{ slug: 'wrk-daily', name: 'wrk. Daily (Kailh)', category: 'Nomad extra' },
	{ slug: 'wrk-blind', name: 'wrk. Blind (Kailh)', category: 'Nomad extra' },
	{ slug: 'wrk-dime', name: 'wrk. Dime (Kailh)', category: 'Nomad extra' },

	// 🖼️ Deskmats
	{ slug: 'deskmate-abstract', name: 'Abstract Deskmat', category: 'Deskmat' },
	{ slug: 'deskmate-wave', name: 'Wave Deskmat', category: 'Deskmat' },

	// 👕 Apparel
	{ slug: 'creator-tee', name: 'Creator Tee', category: 'Apparel' },
	{ slug: 'creator-hoodie', name: 'Creator Hoodie', category: 'Apparel' }
];
