<script>
	import { twMerge } from 'tailwind-merge';
	import Button from '../Resuable/Button.svelte';

	let { btn_text, btn_styles, heading, price, cta_text, cta_btn_text="explore", heading_styles, cta_url,price_styles, cta_styles, cta_text_styles, cta_btn_styles, container_styles } = $props();
</script>

<div class={twMerge(`max-w-[470px] rounded-b-3xl bg-[#000DFF] p-4 !lg:justify-between  ${ container_styles}`)}>
	<div class="">
		<Button {btn_text} styles={btn_styles} />
		<h3 class={ heading_styles}>{heading}</h3>
		{#if heading.includes('Creator')}
			<p class={price_styles}>From {price}</p>
		{:else}
			<p class={price_styles}>{price}</p>
		{/if}
	</div>

	<div class={cta_styles}>
		<div class="">


			<p class={cta_text_styles}>{cta_text}</p>

			{#if heading.includes('k•no•b•1') }
				<span class="text-sm py-1 opacity-40">Designed by Ben Fryc.</span>
			{/if}
		</div>

		<a href={cta_url} class={cta_btn_styles}>{cta_btn_text}</a>
	</div>
</div>
