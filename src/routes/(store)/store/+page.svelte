<script>
	import StoreHero from '../../../components/store/StoreHero.svelte';
	import CustomMarquee from '../../../components/store/CustomMarquee.svelte';
	import creator_sm from '$lib/assets/images/Store/creator_sm.webp';
	import creator_md from '$lib/assets/images/Store/creator_md.webp';
	import creator_lg from '$lib/assets/images/Store/creator_lg.webp';
	import showoff from '$lib/assets/images/Store/showoff.webp';
	import knob from '$lib/assets/images/Store/knob.webp';
	import rainbow from '$lib/assets/images/Store/rainbow.webp';
	import translated from '$lib/assets/images/Store/translate.png';
	import wrk_shop from '$lib/assets/images/Store/wrk_shop.webp';
	import CustomCard from '../../../components/store/CustomCard.svelte';
	import Explore from '../../../components/store/Explore.svelte';
	import CustomSecondaryCard from '../../../components/store/CustomSecondaryCard.svelte';
</script>

<main class="flex h-full w-full flex-col items-center overflow-clip">
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
	md:max-h-[500px] max-w-[470px] md:flex md:w-full md:min-w-full md:flex-row md:justify-center md:px-4
	lg:h-full max-h-[500px]
	<div
		class=" max-w-[470px] items-center justify-center overflow-clip md:flex md:max-h-[600px] md:w-full md:max-w-full md:px-4"
	>
		<img
			src={creator_lg}
			alt="creator"
			class="l max-h-[280px] w-full items-stretch self-stretch justify-self-stretch rounded-t-3xl object-cover md:h-fit md:max-h-full md:w-1/2 md:rounded-t-none md:rounded-l-3xl"
		/>

		<div class=" flex flex-col md:w-1/2 md:overflow-clip">
			<CustomCard
				btn_text="keyboard"
				cta_btn_text={'Explore'}
				price={'$144'}
				heading={'Creator Micro 2'}
				btn_styles={'bg-black text-white px-4 py-1 mb-4'}
				cta_text="The Creator Micro is everything you asked for. Wireless, playfully tactile, and just as capable as you."
				cta_url="/fix-me"
				cta_btn_styles=" border border-black px-6 rounded-full py-1"
				cta_styles="flex items-center md:my-"
				cta_text_styles=" w-[80%] text-[.80rem] leading-5"
				heading_styles="text-3xl pb-2"
				price_styles="pb-8"
				container_styles="text-white font-sans  md:flex md:flex-col md:justify-between  md:rounded-b-none md:rounded-r-3xl md:rounded-br-3xl  bg-[#edff00] text-black md:min-w-full md:h-[400px]"
			/>

			<div class="h- full hidden overflow-clip md:flex">
				<img src={creator_md} alt="creator_1" class="w-4/6 scale-150 object-fill" />
				<img src={creator_sm} alt="creator_1" class="w-2/6 scale-150 object-fill" />
			</div>
		</div>
	</div>

	<div
		class="my-4 max-w-[470px] md:my-2 md:flex md:max-h-[500px] md:w-full md:max-w-full md:flex-row-reverse md:justify-center md:px-4 lg:h-full"
	>
		<div
			class="l flex h-full items-center overflow-hidden rounded-t-3xl md:min-h-[280px] md:w-2/3 md:rounded-t-none md:rounded-r-3xl lg:w-full"
		>
			<img
				src={showoff}
				alt="showoff"
				class="max-h -[400px] w-full object-cover md:h-[350px] lg:scale-150 lg:object-contain"
			/>
		</div>

		<CustomCard
			btn_text="collabo"
			cta_btn_text={'Explore'}
			price={'$149'}
			heading={'Framer Creator Micro'}
			btn_styles={'bg-white text-black px-4 py-1 mb-4'}
			cta_text="The micro makes it happen, Framer makes it real."
			cta_url="/fix-me"
			cta_btn_styles=" border px-6 rounded-full py-1"
			cta_styles="flex items-center md:my-"
			cta_text_styles=" w-[80%] text-[.80rem] leading-5"
			heading_styles="text-3xl pb-2"
			price_styles="pb-8"
			container_styles="text-white font-sans md:w-full  md:flex md:flex-col md:justify-between  md:rounded-b-none md:rounded-l-3xl md:rounded-bl-3xl p-6 "
		/>
	</div>
	<!-- container_styles="text-white font-sans md:w-full  md:flex md:flex-col md:justify-between  md:rounded-b-none md:rounded-l-3xl md:rounded-bl-3xl p-6" -->

	<div
		class="mt-3 max-w-[470px] justify-center md:mx-auto md:flex md:h-fit md:max-h-[500px] md:w-full md:max-w-full md:flex-row-reverse md:px-4"
	>
		<div
			class="flex h-full items-center rounded-t-3xl bg-[#D4D4D4] md:w-2/3 md:rounded-t-none md:rounded-r-3xl lg:w-full"
		>
			<img src={knob} alt="knob" class="h-full max-h-[400px] w-full object-contain md:h-[350px]" />
		</div>

		<CustomCard
			btn_text="wrk.shop"
			cta_btn_text={'Explore'}
			price={'$439'}
			heading={'k•no•b•1'}
			btn_styles={'bg-white text-black px-4 py-1 mb-2'}
			cta_text="Evoking the look of both classic and modern technology."
			cta_url="/fix-me"
			cta_btn_styles=" border border-black px-6 rounded-full py-1 md:mt-4"
			cta_styles="flex items-center md:flex-col md:items-start  lg:h-full  lg:justify-center"
			cta_text_styles=" w-[80%] text-[.80rem] leading-5"
			heading_styles="text-3xl pb-1"
			price_styles="pb-8"
			container_styles="text-white bg-[#FF4D00] text-black  font-sans md:rounded-b-none md:rounded-l-3xl md:rounded-bl-3xl md:w-1/3 md:w-full lg:flex lg:flex-col  "
		/>
	</div>

	<div class="md: my-6 flex w-full">
		<h3 class="mb-8 w-56 max-w-64 px-4 font-sans text-3xl font-[600] text-white md:w-1/3">
			Explore our best seller
		</h3>
		<Explore />
	</div>

	<div class="w-full">
		<CustomMarquee contents={['Work Louder Inc.© 2025 -', '🌎', '- all work & no play -']} />
	</div>

	<div class="flex h-full w-full flex-col items-center justify-center md:px-4">
		<CustomSecondaryCard
			heading="get Input"
			body={`our <span class="font-bold ">"no code"</span> keyboard configurator.`}
			cta_btn_text="download"
			image_url={rainbow}
			img_styles="absolute md:top-0 md: md:h-full md:object-fill left-0 top-0  max-w-[470px] md:max-w-full w-full object-cover h-full md:max-h-full"
			heading_styles="font-medium text-2xl mb-5 "
			cta_url="/fix-me"
			body_styles
			cta_btn_styles="flex border border-black px-4 py-1 rounded-full flex my-auto item-center justify-center cursor-pointer mt-4  hover:scale-90 hover:transition-all hover:delay-300 pointer-events-auto"
			container_styles="bg-white relative flex flex-col justify-center rounded-t-3xl mb-2 md:mb-6 overflow-clip h-[500px] md:h-[300px] lg:h-[400px] w-full md:max-w-full  md:px-4"
			image_1_url={translated}
			image_2_url={translated}
			img_1_styles={'absolute -top-36 rotate-[153deg] -left-4 scale-125 md:hidden'}
			img_2_styles={'absolute -bottom-18 left-64 scale-125 md:right-64  md:scale-80 md:-bottom- md:left  md:-right-12 border-4 md:h-[300px]  object-cover md:hidden'}
			image_1_md_url={translated}
			img_1_md_styles=" hidden md:flex z-10 w-[700px] h-[450px] absolute -left-[29rem] object-contain rotate-[27deg] -bottom-[6rem] scale-110"
			image_2_md_url={translated}
			img_2_md_styles="hidden md:flex z-  -rotate-[10deg] w-[700px] h-[450px] object-contain -bottom-[4rem] scale-110 -right-[30rem] absolute"
			reset
		/>
	</div>

	<div class="flex h-full w-full flex-col items-center justify-center md:px-4">
		<CustomSecondaryCard
			image_1_md_url
			img_1_md_styles
			image_2_md_url
			img_2_md_styles
			heading="wrk.shop"
			body={`Where your renders  <span class="font-bold ">become reality</span>.`}
			cta_btn_text="download"
			image_url={wrk_shop}
			heading_styles="font-[600]  text-4xl mb-5 "
			cta_url
			body_styles
			cta_btn_styles="flex border border-white px-4 py-1 rounded-full flex my-auto item-center justify-center"
			container_styles="bg-white/30 text-white relative flex flex-col justify-center items-center rounded-t-3xl overflow-clip h-[500px] md:w-full md:max-w-full  md:h-[300px] lg:h-[400px]"
			img_styles="absolute md:static left-0 top-0 max-w-[470px] md:max-w-full h-full w-full object-cover md:h-full md:top-0 md:static brightness-55"
			reset="absolute"
			image_1_url
			image_2_url
			img_1_styles
			img_2_styles
		/>
	</div>

	<div class="my-2 w-full">
		<CustomMarquee contents={['Human after all - 👋 -', 'Human after all - 👋 -']} />
	</div>
</main>
