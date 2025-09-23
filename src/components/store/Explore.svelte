<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import EmblaCarousel from 'embla-carousel';

	import candy from '../../../src/lib/assets/images/Store/carousel/candy.webp';

	let emblaInstance;
	let carouselOptions = { dragFree: true }; // Enable drag-free mode
	let slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];

	onMount(() => {
		emblaInstance = EmblaCarousel(document.querySelector('.embla'), carouselOptions);
	});
</script>

<div class="embla flex w-fit cursor-grabbing justify-center select-none">
	<div class="embla__container h-[400px] max-w-[600px]">
		{#each slides as slide}
			<div
				class="embla__slide scale-x -75 mx-2 h-full  max-w-[60%] rounded-3xl bg-[#D9D9D9] first-of-type:ml-24 hover:scale-90 transition-all delay-300"
			>
				<img src={candy} alt="dsdf" />
				<div class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.embla__container {
		display: flex;
		width: 100%;
	}

	.embla {
		overflow: hidden;
		width: 100%;
	}
</style>
