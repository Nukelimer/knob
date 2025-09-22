<script>
	import RHero from '../../../components/Resuable/R_Hero.svelte';

	import hero_img from '$lib/assets/images/Numpad/hero.webp';
	import Spec from '../../../components/Home/Spec.svelte';
	import Button from '../../../components/Resuable/Button.svelte';
</script>

<div class=" ">
	<RHero
		btn_array={['Design/Development', 'Prototype', 'Pre-Orders', 'Production']}
		last_section_styles
		route="numpad"
		header_short_txt_styles
		header_parent_styles="bottom -0"
		header_styles
		header="k·no·b·less"
		header_short_txt="Less is more."
		last_about="Enhance your creative workflow with a numpad module, big knob module, and a small slider attachment. Designed to reduce your time spent switching hand positions for cumbersome shortcuts.."
		paragraph_array={[
			// 'Imagining a numpad peripheral with precision machined parts.',
			// 'Optimize your creative workflow and limit hand movements normally used for cumbersome shortcuts.',
			// '/ designed by Ben Fryc <br/>  / in development with Work Louder'
		]}
		img_src={hero_img}
	/>

	<Spec
		route="numpad"
		header="Materials"
		data={[
			{ name: 'Top Enclosure', info: 'CNC Alu / Anodized Silver' },
			{ name: 'Bottom Enclosure', info: 'CNC Alu / Anodized Gun Metal' },
			{ name: 'Switch Plate', info: 'Stamped Alu / Anodized Black' },
			{ name: 'Base Pad', info: 'Rubberized Plastic' },
			{ name: 'Keycaps', info: 'Dye Sub PBT' },
			{ name: 'Knobs', info: 'Machined Alu' },
			{ name: 'Big Knob', info: 'Rubberized Plastic w/ motorized detents' },
			{ name: 'Attachment Method', info: 'Pogo pins with magnetic anchors' }
		]}
	/>

	<Spec
		route="numpad"
		header="Connectivity and Power"
		data={[
			{ name: 'USB-C Connection', info: 'Cable Included' },
			{ name: 'Bluetooth', info: 'TBD' },
			{ name: 'Battery', info: 'Numpad, Big-Knob' }
		]}
	/>



	<footer class="">
	<div class="bg-[#ff4d00] py-36  rounded-full px-12 mx-6 mb-6 ">
		<h4 class=" md:text-start text-center text-6xl md:text-7xl pb-6 font-serif md:w-[70%] px-12 md:px-0  md:pl-16  max-w-4xl  md:mx-0 mx-auto ">Do more with less</h4>

		<div class="flex flex-col md:flex-row items-center  md:items-start justify-between px-16 ">
			

			<form action="" class=" flex  gap-3 mt-6 md:mt-0 md:gap-0 md:flex-row text-nowrap">
				<input
					type="email"
					name="email"
					class="h-10 md:max-w-64 w-44 rounded-4xl not-italic ring-0 outline-0
             placeholder:text-[13px] placeholder:tracking-wider
             focus:border-none active:border-none placeholder:font-sans"
					placeholder="your email address"
				/>
				<Button btn_text={'Get Updates'} styles='bg-[#000] w-full  ' />
			</form>

			<p class="pt-16 text-center text-sm">
				Copyright © 2025 / <a
					href="https://worklouder.cc/"
					rel="_blank"
					class=" w-full hover:text-amber-100"
				>
					Work Louder
				</a>
			</p>
		</div>
	</div>

        
</footer>



</div>
