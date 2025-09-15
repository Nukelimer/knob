<script>
	import { twMerge } from 'tailwind-merge';

	import product1 from '$lib/assets/images/Keysets/product_1.webp';
	import product2 from '$lib/assets/images/Keysets/product_2.webp';
	import product3 from '$lib/assets/images/Keysets/product_3.webp';
	import product4 from '$lib/assets/images/Keysets/product_4.webp';
	import product5 from '$lib/assets/images/Keysets/product_5.webp';
	import product6 from '$lib/assets/images/Keysets/product_6.webp';
	import product7 from '$lib/assets/images/Keysets/product_7.webp';
	import product8 from '$lib/assets/images/Keysets/product_8.webp';
	import product9 from '$lib/assets/images/Keysets/product_9.webp';
	import product10 from '$lib/assets/images/Keysets/product_10.webp';

	const productImages = [
		product1,
		product2,
		product3,
		product4,
		product5,
		product6,
		product7,
		product8,
		product9,
		product10
	];
</script>

<div class="flex flex-col mt-36 w-full md:grid md:grid-cols-2 md:gap-2 md:max-w-[760px] lg:max-w-[1024px] xl::max-w-[1280px] mx-auto pb-18">
	{#each productImages as img, i}
		<div
			class={twMerge(
				'flex items-center w-full overflow-clip my-1',
		
				i === 3 ? 'h-[370px]' : i === 4 ? 'h-[165px]' : i === 5 ? 'h-[365px]' : 'h-[300px]',
				
				'md:h-auto md:max-h-[600px] lg:max-h-max',
				
				i === 0 || i === 1 ? 'md:col-span-2' : '', 
				i === 4 || i === 5 ? 'md:col-span-2' : '' 
			)}
		>
			<img
				src={img}
				alt={`Product ${i + 1}`}
				class="h-full w-full object-cover md:h-auto"
			/>
		</div>
	{/each}
</div>



	