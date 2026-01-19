export interface keyboardProduct {
	slug: string;
	name: string;
	price: number;
	images?: string[];
	description?: string;
}

export const keyboards = [
	{
		slug: 'creator-micro-2',
		name: ' Creator Micro 2',
		price: 99,
		slashed_price: 199,
		model: ['Pro (Wireless) ', 'Base (Wired Only)'],
		switches: ['clicky ', 'Switchy'],
		images: ['first.webp', 'second.webp'],
		parts: [
			{
				name: 'Dial v2',
				price: 5.98,
				images: 'dialv2.webp',
				colors: ['clear', 'orange', 'Atomic Purple', 'White', 'Black']
			},
			{
				name: 'wrk. MX Icon',
				price: 54.0,
				images: 'mxicon.webp'
			},

			{
				name: 'wrk. MX Pure (dozen)',
				price: 19.0,
				images: 'pure.webp'
			},
			{
				name: 'Frosted Body',
				price: 34.0,
				images: 'frosted.webp'
			}
		],
		description: 'A compact and powerful creator tool for small projects.'
	},
	{
		slug: 'framer-creator-micro',
		name: 'Framer Creator Creator',
		price: 199,
		slashed_price: 199,
		images: ['/images/creator1.webp', '/images/creator2.webp'],
		description: 'Full-featured version for creators of all sizes.'
	},
	{
		slug: 'xyz-work-board-2',
		name: 'XYZ Work Board 2',
		price: 299,
		slashed_price: 199,
		images: ['/images/micropro1.webp', '/images/micropro2.webp'],
		description: 'Upgraded Micro edition with Pro-level features.'
	},
	{
		slug: 'nomad-e-2',
		name: 'Nomad [E]',
		price: 499,
		slashed_price: 199,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	},
	{
		slug: 'knob1',
		name: 'k.n.o.b.1',
		price: 499,
		slashed_price: 199,
		model: ['Pro (Wireless) ', 'Base (Wired Only)'],
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	},
	{
		slug: 'creator-board',
		name: 'Creator Board',
		price: 499,
		slashed_price: 199,
		model: ['Pro (Wireless) ', 'Base (Wired Only)'],
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	},
	{
		slug: 'creator-board-xl',
		name: 'Creator Board XL',
		price: 499,
		slashed_price: 199,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	}
];
