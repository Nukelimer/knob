<script>
	import StoreHero from '../../../components/store/StoreHero.svelte';
	import CustomMarquee from '../../../components/store/CustomMarquee.svelte';
	import showoff from '$lib/assets/images/Store/showoff.webp';
	import knob from '$lib/assets/images/Store/knob.webp';
	import rainbow from '$lib/assets/images/Store/rainbow.webp';
	import translated from '$lib/assets/images/Store/translated.webp';
	import CustomCard from '../../../components/store/CustomCard.svelte';
	import Explore from '../../../components/store/Explore.svelte';
	import CustomSecondaryCard from '../../../components/store/CustomSecondaryCard.svelte';
</script>

<main class="flex h-full w-full flex-col items-center">
	<StoreHero />
	<div class="w-full">
		<CustomMarquee
			contents={[
				'Know productivity ⚡, ',
				' Efficiency ⚙️, ',
				' Passion ❤️‍🔥, ',
				' Creativity 🎨 with no limits - '
			]}
		/>
	</div>
	<div class="max-w-[470px]">
		<img src={showoff} alt="showoff" />

		<CustomCard
			btn_text="collabo"
			cta_btn_text={'Explore'}
			price={'$149'}
			heading={'Creator Micro 2'}
			btn_styles={'bg-white text-black px-4 py-1 mb-4'}
			cta_text="The Framer Micro is everything you asked for. Wireless, playfully tactile, and just as capable as you."
			cta_url="/fix-me"
			cta_btn_styles=" border px-6 rounded-full py-1"
			cta_styles="flex items-center"
			cta_text_styles=" w-[80%] text-[.80rem] leading-5"
			heading_styles="text-3xl pb-2"
			price_styles="pb-8"
			container_styles="text-white"
		/>
	</div>

	<div class="mt-3 max-w-[470px]">
		<div class="rounded-t-3xl bg-[#D4D4D4] p-6">
			<img src={knob} alt="knob" />
		</div>

		<CustomCard
			btn_text="wrk.shop"
			cta_btn_text={'Explore'}
			price={'$439'}
			heading={'k•no•b•1'}
			btn_styles={'bg-white text-black px-4 py-1 mb-2'}
			cta_text="Evoking the look of both classic and modern technology."
			cta_url="/fix-me"
			cta_btn_styles=" border border-black px-6 rounded-full py-1"
			cta_styles="flex items-center"
			cta_text_styles=" w-[80%] text-[.80rem] leading-5"
			heading_styles="text-3xl pb-1"
			price_styles="pb-8"
			container_styles="text-white bg-[#FF4D00] text-black"
		/>
	</div>

	<div class="my-6 w-full">
		<Explore />
	</div>

	<div class="w-full">
		<CustomMarquee contents={['Work Louder Inc.© 2025 -', '🌎', '- all work & no play -']} />
	</div>

	<div class="w-full flex flex-col items-center h-full justify-center object-cover">
		<CustomSecondaryCard
			heading="get Input"
			body={`our <span class="font-bold ">"no code"</span> keyboard configurator.`}
			cta_btn_text="download"
			image_url={rainbow}
			img_styles="absolute left-0 top-0 max-w-[470px] w-full object-cover h-full"
			heading_styles="font-medium  text-2xl mb-5 "
			cta_url
			body_styles
			cta_btn_styles="flex border border-black px-4 py-1 rounded-full flex my-auto item-center justify-center"
			container_styles="bg-white relative flex flex-col justify-center rounded-t-3xl my-64 overflow-clip h-[500px] "
			image_1_url={translated}
			image_2_url={translated}
			img_1_styles={'absolute -top-36 rotate-[153deg] -left-4 scale-125'}
			img_2_styles={'absolute -bottom-18 left-64 scale-125'}
		/>
	</div>
</main>
