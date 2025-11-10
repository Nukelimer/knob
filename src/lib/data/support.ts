export interface supportTypes {
	slug: string;
	name: string;
	price: number;
	images: string[];
	description: string;
}

export const support= [
	{
		slug: 'input',
		name: 'Download Input',
		price: 99,
		images: ['/images/micro1.webp', '/images/micro2.webp'],
		description: 'A compact and powerful creator tool for small projects.'
	},
	{
		slug: 'nomad-setup',
		name: 'Nomad setup',
		price: 199,
		images: ['/images/creator1.webp', '/images/creator2.webp'],
		description: 'Full-featured version for creators of all sizes.'
	},
	{
		slug: 'knob-setup',
		name: 'Knob1 setup',
		price: 299,
		images: ['/images/micropro1.webp', '/images/micropro2.webp'],
		description: 'Upgraded Micro edition with Pro-level features.'
	},
	{
		slug: 'setup',
		name: 'Creator setup',
		price: 499,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	},
	{
		slug: 'wrk-shop',
		name: 'Wrk.shop',
		price: 499,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	},
	{
		slug: 'https://worklouder.notion.site/9e0b1e0ea65043ef80af5bcf9c9b9d70?v=https://worklouder.notion.site/updates',
		name: 'Updates',
		price: 499,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	},
	{
		slug: 'about-us',
		name: 'About us',
		price: 499,
		images: ['/images/max1.webp', '/images/max2.webp'],
		description: 'The ultimate edition with maximum performance.'
	}
];
