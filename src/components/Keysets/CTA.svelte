<script>
	import { twMerge } from 'tailwind-merge';
	import Button from '../Resuable/Button.svelte';

	let {
		header,
		header_styles,
		header_short_txt,
		header_parent_styles,
		header_short_txt_styles,

		route
	} = $props();
</script>

<div class=" ">
	{#if route == 'keysets'}
		<div class="  mt-10 flex flex-col items-center justify-center bg-[#D9DAD9]">
			<div class={twMerge(`  font-serif font-extralight ${header_parent_styles}`)}>
				<h3 class={twMerge(` p_p text-5xl md:text-6xl lg:text-7xl ${header_styles}`)}>{header}</h3>

				<p class={twMerge(`pt-3 text-center text-neutral-400 ${header_short_txt_styles} `)}>
					{header_short_txt}
				</p>
			</div>

			<a href="/knob-sans">
				<Button
					btn_text="Available now for <span class='line-through text-neutral-400' >$84.98</span>  $74.98 USD "
					styles="bg-tranparent border border-black text-[#45423f] text-xs px-6 font-sans"
				/>
			</a>

			<p class="py-3 text-xs">Ships in 1-3 business days</p>

			<h3 class="max-w-3xl px-4 text-4xl my-thiny-text text-center my-8  font-serif ">
				A custom designed low-profile keyset with subtle curves evoking technology from a different
				era. The dye-sub legends and PBT plastic means the keyset will hold up for years to come.
			</h3>

                        <span class="size-3 mt-3 bg-black rounded-full"  ></span>
		</div>
	{:else}
		<div
			class="     flex h-[66vh] w-full flex-col items-center justify-center md:h-[69vh] lg:h-[72vh]"
		>
			<div
				class={twMerge(
					`  !absolute -bottom-16  font-serif font-extralight ${header_parent_styles}`
				)}
			>
				<h3 class={twMerge(` text-5xl md:text-6xl lg:text-7xl ${header_styles}`)}>{header}</h3>

				<p class={twMerge(`pt-3 text-center text-neutral-400 ${header_short_txt_styles} `)}>
					{header_short_txt}
				</p>
			</div>
		</div>
	{/if}
</div>
