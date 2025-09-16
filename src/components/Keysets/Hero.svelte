<script>
	import { twMerge } from 'tailwind-merge';
	import Cta from './CTA.svelte';

	let { hero_video, video_styles } = $props();
</script>

<div>
	<div class="flex justify-center px-1 pt-18 md:px-0">
		<video src={hero_video} controls={false} muted autoplay class={twMerge(`  ${video_styles}`)}>
		</video>
	</div>

	<Cta
		route="keyset"
		header_short_txt_styles="text-center text-sm text-[#45423f] mb-4"
		header_parent_styles=" text-center max-w-sm "
		header_styles="italic lg:tex "
		header="k•no•b•sans"
		header_short_txt="The beautifully flexible keyset that is compatible with the Nomad-E by Work Louder, and many popular low-profile keyboards with MX style switches."
	/>




        
</div>
