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
		name: ' Creator Micro',
		price: 99,
		images: ['first.webp', 'second.webp'],
		description: 'A compact and powerful creator tool for small projects.'
	},
	{
		slug: 'framer-creator-micro',
		name: 'Framer Creator Creator',
		price: 199,
		images: ['/images/creator1.webp', '/images/creator2.webp'],
		description: 'Full-featured version for creators of all sizes.'
	},
	{
		slug: 'xyz-work-board-2',
		name: 'XYZ Work Board 2',
		price: 299,
		images: ['/images/micropro1.webp', '/images/micropro2.webp'],
		description: 'Upgraded Micro edition with Pro-level features.'
	},
	{
		slug: 'nomad-e-2',
		name: 'Nomad [E]',
		price: 499,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	},
	{
		slug: 'knob1',
		name: 'k.n.o.b.1',
		price: 499,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	},
	{
		slug: 'creator-board',
		name: 'Creator Board',
		price: 499,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	},
	{
		slug: 'creator-board-xl',
		name: 'Creator Board XL',
		price: 499,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	}
];
