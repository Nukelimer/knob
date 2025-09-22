<script>
	import { twMerge } from 'tailwind-merge';

	let { data, header, route } = $props();
</script>

<section
	class={twMerge(
		` "bg-black w-full px-6  pb-12 font-sans   text-white ${route == 'numpad' ? 'bg-white mt-16 text-black': 'bg-black'}`
	)}
>
	{#if header}
		<h4 class="mb-4 text-2xl">{header}</h4>
	{/if}

	<div class={twMerge(`first-of-type:border-t ${route == 'numpad' ? "border-black text-sm": ""}`)}>
		{#each data as oneRow}
			<div class={twMerge(` flex justify-between border-b border-white py-2 last-of-type:border-b-0 ${route == 'numpad' ? "border-black": ""}`)}>
				<span>{oneRow.name}</span>
				<span>{oneRow.info}</span>
			</div>
		{/each}
	</div>
</section>
