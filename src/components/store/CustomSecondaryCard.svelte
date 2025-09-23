<script>
	import { ArrowRight } from 'lucide-svelte';
import { twMerge } from 'tailwind-merge';

	let {
		heading,
		body,
		cta_btn_text = 'explore',
		image_url,
		img_styles,
                image_1_url,
		img_1_styles,
                 image_2_url,
		img_2_styles,
		heading_styles,
		cta_url,
		body_styles,
		cta_btn_styles,
		container_styles
	} = $props();
</script>

<div class={twMerge(`max-w-[470px] w-full rounded-b-3xl  h-fit p-4 select-none pointer-events-none ${container_styles}`)}>
	<img src={image_url} alt="bg_img" class={img_styles} />
	<div class="flex flex-col z-1 justify-center items-center">
		<h3 class={heading_styles}>{heading}</h3>
		<p class={body_styles}>{@html body}</p>
		<a href={cta_url} class={cta_btn_styles}>{cta_btn_text} <ArrowRight size={15} class='my-auto ml-1'/></a>
	</div>

      {#if heading.includes('et')}
          <img src={image_1_url} alt="bg_img" class={img_1_styles} />
        <img src={image_2_url} alt="bg_img" class={img_2_styles} />
      {/if}


</div>
