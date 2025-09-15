<script>
	import RHero from '../../components/Resuable/R_Hero.svelte';

	import hero_img from '$lib/assets/images/Numpad/hero.webp';
</script>

<div class=" ">
	<RHero
		last_section_styles
		route="numpad"
		header_short_txt_styles
		header_parent_styles="bottom -0"
		header_styles
		header="k·no·b·less"
		header_short_txt="Less is more."
		last_about="Upgrade your creative workflow with magnetic attachments designed to reduce your time spent switching hand positions for cumbersome shortcuts."
		paragraph_array={[
			'Imagining a numpad peripheral with precision machined parts.',
			'Optimize your creative workflow and limit hand movements normally used for cumbersome shortcuts.',
			'/ designed by Ben Fryc <br/>  / in development with Work Louder'
		]}
		img_src={hero_img}
	/>
</div>
