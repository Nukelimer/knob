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

<div class="">
	{#if route == 'keyset'}
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

			<h3 class="my-thiny-text my-8 max-w-3xl px-4 text-center font-serif text-4xl">
				A custom designed low-profile keyset with subtle curves evoking technology from a different
				era. The dye-sub legends and PBT plastic means the keyset will hold up for years to come.
			</h3>

			<span class="mt-3 size-3 rounded-full bg-black"></span>
		</div>
	{:else if route == 'keyset/dark'}
		<div class="flex w-full justify-center">
			<div class={twMerge(`  !absolute   font-serif font-extralight ${header_parent_styles}`)}>
				
				
				<h3 class="text-[#ff4d00] text-sm lowercase pb-1">Coming soon</h3>
				<h3 class={twMerge(` text-5xl md:text-6xl lg:text-7xl ${header_styles}`)}>{header}</h3>

				<p class={twMerge(`pt-3 text-center text-neutral-400 ${header_short_txt_styles} `)}>
					{header_short_txt}
				</p>

				<form action="" class=" gap-4 pt-8 flex md:hidden">
					<input
						type="email"
						name="email"
						class="flex max-w-48 rounded-4xl border-0 py-1 not-italic
             ring-0 outline-0 placeholder:text-[13px]
             placeholder:tracking-wider focus:border-none active:border-none"
						placeholder="your email address"
					/>
					<Button btn_text={'Get Updates'} styles="" />
				</form>
			</div>
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
