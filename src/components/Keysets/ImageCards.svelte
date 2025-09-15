<script>
	import product1 from '$lib/assets/images/Keysets/product_1.webp';
	import product2 from '$lib/assets/images/Keysets/product_2.webp';
	import product3 from '$lib/assets/images/Keysets/product_3.webp';
	import product4 from '$lib/assets/images/Keysets/product_4.webp';
	import product5 from '$lib/assets/images/Keysets/product_5.webp';
	import product6 from '$lib/assets/images/Keysets/product_6.webp';
	import product7 from '$lib/assets/images/Keysets/product_7.webp';
	import product8 from '$lib/assets/images/Keysets/product_8.webp';
	import product9 from '$lib/assets/images/Keysets/product_9.webp';

	const productImages = [
		product1,
		product2,
		product3,
		product4,
		product5,
		product6,
		product7,
		product8,
		product9
	];
</script>

<div class="flex aspect-square flex-col  w-full overflow-clip rounded-[8px]
">
	{#each productImages as img, i}
		<div class=" h-[500px]">

			<img src={img} alt={`Product ${i + 1}`} class="  object-contain object-center" />
		</div>
	{/each}
</div>





	