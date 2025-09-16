<script>
	import { twMerge } from 'tailwind-merge';

	import product1 from '$lib/assets/images/Keysets/Dark/product_1.webp';
	import product2 from '$lib/assets/images/Keysets/Dark/product_2.webp';
	import product3 from '$lib/assets/images/Keysets/Dark/product_3.webp';
	import product4 from '$lib/assets/images/Keysets/Dark/product_4.webp';

	const productImages = [product1, product2, product3, product4];
</script>

<div
	class="flex flex-col  w-full md:grid md:grid-cols-2 md:gap-2 md:max-w-[760px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto "
>
	{#each productImages as img, i}
		<div
			class={twMerge(
				'flex items-center w-full overflow-clip my-1',
				
				i === 3 ? 'h-[170px]' : i === 4 ? 'h-[165px]' : i === 5 ? 'h-[365px]' : 'h-[300px]',
				
				'md:h-auto md:max-h-[600px] lg:max-h-max',
				// Full width for first and last on md+
				i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-1'
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
