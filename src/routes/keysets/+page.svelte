<script>
	import { twMerge } from 'tailwind-merge';
	import Hero from '../../components/Keysets/Hero.svelte';
	import ImageCards from '../../components/Keysets/ImageCards.svelte';
	import Button from '../../components/Resuable/Button.svelte';
</script>

<section class="cover min-h-screen bg-[#D7DAD7]">
	<Hero
		hero_video={'/video/hero.mp4'}
		video_styles=" w-full h-full rounded-xl lg:rounded-2xl  w-[500px] 
                 md:rounded-none md:w-[768px] md:rounded-b-2xl lg:w-[1024px] xl:w-[1280px] md:object-cover  md:h-full aspect-video "
	/>

	<ImageCards />

	<div class="  mt-10 flex flex-col items-center justify-center bg-[#D9DAD9]">
		<div class="">
			<h4 class="p_p mb-2 text-4xl text-[#45423f] md:text-5xl lg:text-7xl">
				Do the sans-ible thing.
			</h4>
		</div>
		<a href="/knob-sans">
			<Button
				btn_text="Order now for  $74.98 USD "
				styles="bg-tranparent border border-black text-[#45423f] text-xs px-10 font-sans"
			/>
		</a>


		   <p class="font-sans  mt-24 mb-4 hidden md:block">Copyright © 2025 / <a href="https://worklouder.cc/">Work Louder</a></p>
	</div>
</section>
