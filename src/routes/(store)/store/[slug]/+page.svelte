<script lang="ts">
	import { fade } from 'svelte/transition';

	let { data } = $props();
	const product = $derived(data.product);
	const slug = $derived(data.slug);

	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Button from '../../../../components/Resuable/Button.svelte';
	import Wrapper from './components/CM2/Wrapper.svelte';

	const imageModules = import.meta.glob('$lib/assets/images/Store/items/**/*.webp', {
		eager: true,
		import: 'default'
	}) as Record<string, string>;
let activeSelections = $state<Record<string, string>>({});
	let selectedModel = $state('');
	let selectedSwitch = $state('');

	

	function handleSelect(partName: string, color: string) {
		if (activeSelections[partName] === color) {
			delete activeSelections[partName];
		} else {
			activeSelections[partName] = color;
		}
	}
	function getViteImage(filename: string): string {
		if (!slug) return '';
		const searchPath = `/${slug}/${filename}`;
		const resolvedPath = Object.keys(imageModules).find((key) => key.endsWith(searchPath));
		return resolvedPath ? imageModules[resolvedPath] : '/fallback.webp';
	}

	function getPartImage(partFilename: string): string {
		if (!slug) return '';

		const searchPath = `/${slug}/parts/${partFilename}`;
		const resolvedPath = Object.keys(imageModules).find((key) => key.endsWith(searchPath));
		return resolvedPath ? imageModules[resolvedPath] : '/fallback.webp';
	}

	$effect(() => {
    if (product) {
        // 1. Check if 'model' exists and has items before setting default
        if ('model' in product && Array.isArray(product.model) && product.model.length > 0) {
            selectedModel = product.model[1];
        } else {
            selectedModel = ''; // Reset if the product has no model
        }

        // 2. Check if 'switches' exists and has items
        if ('switches' in product && Array.isArray(product.switches) && product.switches.length > 0) {
            selectedSwitch = product.switches[0];
        } else {
            selectedSwitch = ''; // Reset if the product has no switches
        }
    }
});


$effect(() => {
    if (product && 'parts' in product && Array.isArray(product.parts)) {
        product.parts.forEach((part) => {
            // Check if this part has a colors array
            if ('colors' in part && Array.isArray(part.colors)) {
                
                // 1. Look for "orange" in the colors array
                const orangeOption = part.colors.find(c => c.toLowerCase() === 'white');

                if (orangeOption) {
                    // Set default to Orange if found
                    activeSelections[part.name] = orangeOption;
                } else if (part.colors.length > 0) {
                    // 2. Fallback to the first color if orange isn't an option
                    activeSelections[part.name] = part.colors[0];
                }
            }
        });
    }
});
</script>

<main class="bg-white/90 pt-26 text-white" in:fade out:fade>
	{#if product}
		<div class="mx-6">
			<section class="mx-auto gap-6 lg:flex">
				{#if 'images' in product && product.images.length > 0}
					<div class="embla w-full overflow-hidden rounded-xl lg:w-[55%]" use:emblaCarouselSvelte>
						<div class="embla__container flex">
							{#each product.images as filename}
								<div class="embla__slide h-full min-w-full flex-[0_0_100%] md:flex-[0_0_50%]">
									<img
										src={getViteImage(filename)}
										alt={product.name}
										class="h-full w-full object-cover select-none"
										draggable="false"
									/>
								</div>
							{/each}
						</div>
					</div>
					<div class="w-full rounded-xl bg-white/80 lg:w-[45%]">
						<div class="mx-6">
							<h1 class="  text-3xl font-medium text-black">{product.name}</h1>

							<div class="text-black">
								<span>${product.slashed_price}</span> <span>${product.price}</span>
							</div>
							<div class="mt-2 flex gap-4">
								{#each product.model as item}
									{@const isActive = selectedModel === item}
									<Button
										onclick={() => (selectedModel = item)}
										btn_text={item}
										styles="px-6 py-2 border transition-all cursor-pointer  {isActive
											? 'bg-black text-white border-black'
											: 'bg-white text-black border-gray-200 hover:border-black'}"
									/>
								{/each}
							</div>

							<div class="my-6 flex flex-col gap-2">
								<h3 class="font-semibold text-black">Switches</h3>
								<div class="flex gap-4">
									{#each product.switches as item}
										{@const isActive = selectedSwitch === item}
										<Button
											onclick={() => (selectedSwitch = item)}
											btn_text={item}
											styles="px-6 py-2 border transition-all cursor-pointer {isActive
												? 'bg-black text-white border-black'
												: 'bg-white text-black border-gray-200 hover:border-black'}"
										/>
									{/each}
								</div>
							</div>
							<div class=" flex flex-col gap-4">
								{#each product.parts as part}
									<Wrapper className=" w-full rounded-xl p-2">
										<div class="flex flex-row justify-start rounded-lg text-center">
											<div class="flex w-2/3 flex-col justify-between">
												<div class="flex max-w-34 flex-col justify-baseline">
													<span class="text-start text-base font-medium text-black"
														>{part.name}</span
													>
													<span class="text-start text-base text-gray-400"
														>${part.price.toFixed(2)}</span
													>
												</div>

												{#if part.colors}
													<div class="">
														<h1 class="mb-2 w-full text-start font-semibold text-black">Color</h1>
														<div class="flex gap-2">
															{#each part.colors || [] as color}
																{@const isActive = activeSelections[part.name] === color}

																<Button
																	onclick={() => handleSelect(part.name, color)}
																	btn_text={color}
																	styles="px-3 py-2  transition-all duration-200  {isActive
																		? 'bg-black text-white border-black scale-105 shadow-md'
																		: 'bg-white text-black border-white/20 hover:border-black'}"
																/>
															{/each}
														</div>
													</div>
												{:else}
													<div class="w-fit">
														<Button
															btn_text="Add to Cart"
															styles="bg-[#EDFF00] text-black px-4 cursor-pointer"
														/>
													</div>
												{/if}
											</div>

											<div class=" h-44 w-44 overflow-hidden rounded-md">
												<img
													src={getPartImage(part.images)}
													alt={part.name}
													class="h-full w-full"
												/>
											</div>
										</div>
									</Wrapper>
								{/each}
							</div>
						</div>
					</div>
				{:else}
					<p class="text-gray-400">No images available.</p>
				{/if}
			</section>
		</div>
	{/if}
</main>

<!-- {#if product}
		<section>
			<h1 class="mb-4 text-3xl font-bold">{product.name}</h1>

			{#if 'images' in product && Array.isArray(product.images)}
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each product.images as filename}
						{@const src = getViteImage(filename)}
						<div class="overflow-hidden rounded-xl bg-white/5 shadow-md">
							<img
								{src}
								alt={product.name}
								class="w-full object-cover transition-all hover:scale-105"
								loading="lazy"
							/>
						</div>
					{/each}
				</div>
			{/if}
		</section>
	{/if} -->

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
