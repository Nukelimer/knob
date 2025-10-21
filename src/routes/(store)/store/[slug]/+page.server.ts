import { error } from '@sveltejs/kit';
import { keyboards } from '../data/products';
import { support} from '../data/support';
import { accessories } from '../data/accessories';

export const load = async ({ params }) => {
	const { slug } = params;
	const product = keyboards.find((item) => item.slug === slug);
	const supports = support.find((item) => item.slug === slug)||
		accessories.find(a => a.slug === slug);

	if (!supports) {
		throw error(404, new Error(`Support entry for "${slug}" not found.`));
	}

		if (!product) {
			throw error(404, new Error(`Keyboard with slug "${slug}" not found.`));
		}


	return { product, supports };
};
