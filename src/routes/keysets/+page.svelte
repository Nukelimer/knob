<script>
	import Hero from '../../components/Keysets/Hero.svelte';
	import ImageCards from '../../components/Keysets/ImageCards.svelte';
</script>

<section class="cover min-h-screen bg-[#D7DAD7]">
	<Hero
		hero_video={'/video/hero.mp4'}
		video_styles=" w-full h-full rounded-xl lg:rounded-2xl  w-[500px] 
                 md:rounded-none md:w-[768px] md:rounded-b-2xl lg:w-[1024px] xl:w-[1280px] md:object-cover  md:h-full aspect-video "
	/>



        <ImageCards/>
</section>
