import { error } from '@sveltejs/kit';
import { keyboards } from '$lib/data/products';
import { support } from '$lib/data/support';
import { accessories } from '$lib/data/accessories';

export const load = async ({ params }) => {
	const { slug } = params;

	const product =
		keyboards.find((x) => x.slug === slug) || accessories.find((x) => x.slug === slug);

	const supports = support.find((x) => x.slug === slug) || accessories.find((x) => x.slug === slug);

	if (!product) throw error(404, `Product "${slug}" not found.`);
	// if (!supports) throw error(404, `Support info for "${slug}" not found.`);

	return { product, supports };
};
