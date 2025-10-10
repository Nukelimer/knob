<script>
	import { ArrowRight } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';

	let {
		heading,
		reset,
		body,
		cta_btn_text = 'explore',
		image_url,
		img_styles,
		image_1_url,
		img_1_styles,
		image_2_url,
		img_2_styles,
		image_1_md_url,
		img_1_md_styles,
		image_2_md_url,
		img_2_md_styles,
		heading_styles,
		cta_url,
		body_styles,
		cta_btn_styles,
		container_styles
	} = $props();
</script>

<div
	class={twMerge(
		`pointer-events-none h-fit w-full  max-w-[470px] rounded-b-3xl  select-none ${container_styles}`
	)}
>
	<img src={image_url} alt="bg_img" class={img_styles} />
	<div class={twMerge(`z-1 flex flex-col items-center justify-center  ${reset}`)}>
		<h3 class={heading_styles}>{heading}</h3>
		<p class={body_styles}>{@html body}</p>
		
			<a href={cta_url} class={cta_btn_styles}
				>{cta_btn_text} <ArrowRight size={15} class="my-auto ml-1 " /></a
			>
		
	</div>

	{#if heading.includes('et')}
		<img src={image_1_url} alt="bg_img" class={img_1_styles} />
		<img src={image_2_url} alt="bg_img" class={img_2_styles} />
		<img src={image_1_md_url} alt="bg_img" class={img_1_md_styles} />
		<img src={image_2_md_url} alt="bg_img" class={img_2_md_styles} />
	{/if}
</div>
