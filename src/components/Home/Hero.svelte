<script lang="ts">
	import Button from '../Resuable/Button.svelte';
</script>

<div class="">
	<div class="relative flex w-full flex-col items-center">
		<video
			src="video/hero_video.mp4"
			autoplay
			muted
			class="aspect-video min-h-screen object-cover md:object-fill"><track kind="captions" /></video
		>

		<div
			class=" -bottom-40 flex md:max-w-5xl flex-col items-center justify-center bg-black px-20 pb-24 text-white select-none md:absolute md:w-[80%] md:flex-row md:bg-transparent md:px-0 md:pb-0"
		>
			<div class=" flex flex-col gap-6">
				<div class="flex items-center justify-between w-full">
					<h2 class="mb-8 mx-auto lg:mx-0 text-center font-serif text-[36px] w-full  sm:max-w-4/6 md:max-w-full lg:max-w-96  leading-9 md:mb-0 md:text-start">
						The low-profile mechanical keyboard of your dreams.
					</h2>

					<p class="hidden   px-10 text-center text-[12px] md:flex md:text-start w-full  sm:max-w-4/6 md:max-w-full lg:max-w-1/3">
						The k.no.b.1 is a low-profile mechanical keyboard with uniquely designed keycaps, two
						programmable knobs, and a feature-filled full-color screen
					</p>
				</div>
				<div class="hidden gap-8 md:flex">
					<Button btn_text="Order Today for $439 USD" styles=" bg-[#cdea19] text-black font-extralight px-6 text-sm" />
					<p class="pt-3 text-[12px]">
						ANSI Shipping Now // ISO Sept 2025 // <a class="text-[#cdea19]" href="/updates"
							>Updates</a
						>
					</p>
				</div>
			</div>

			<p class="px-10 text-center text-[12px] md:hidden">
				The k.no.b.1 is a low-profile mechanical keyboard with uniquely designed keycaps, two
				programmable knobs, and a feature-filled full-color screen
			</p>

			<div class="md:hidden">
				<div class="">
					<Button
						btn_text="Order Today for $439 USD"
						styles=" bg-[#cdea19] text-black px-16 text-[13px] mt-6 font-extralight"
					/>

					<p class="pt-3 text-center text-[12px]">
						ANSI Shipping Now // ISO Sept 2025 // <a class="text-[#cdea19]" href="/updates"
							>Updates</a
						>
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-black md:pt-64">
		<h3 class="text-white max-w-5xl text-3xl md:text-5xl md:mx-auto md:w-[80%] leading-8 md:leading-12 font-serif not-italic font-extralight">
			The Knob / k•no•b•1 is a low-profile mechanical keyboard designed by 3D Artist and Motion
			Designer Ben Fryc, and developed by Work Louder. Evoking the look of both classic and modern
			technology, the k•no•b•1 is designed to be a beautiful and functional part of your every day
			workflow.
		</h3>
	</div>

</div>
