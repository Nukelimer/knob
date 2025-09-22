

<script>
	import RHero from '../../../components/Resuable/R_Hero.svelte';

	import hero_img from '$lib/assets/images/Lightswitch/hero.webp';
</script>

<div class=" ">
	<RHero
	btn_array
        last_section_styles="bg-[#FDE086]"
        header_short_txt_styles="text-[#FDE086] text-start "
        route="lightswitch"
		header_parent_styles=" -translate-y-52 z-10 md:relative md:-translate-x-64  md:-translate-y-92 lg:-translate-x-80  "
		header_styles="text-white lg:text-7xl"
		header="l·um·0·"
		header_short_txt="Light up the darkeness."
		last_about="You deserve to have bright spots in dark places. A light switch can be so much more than a simple toggle."
		paragraph_array={[
			'A lightswitch that establishes a distinct vibe.',
			'Rounded corners and pleasantly warm lighting will compliment any space within your home or office.',
			'/ designed by Ben Fryc <br/>  / in development with Work Louder'
		]}
		img_src={hero_img}
	/>
</div>