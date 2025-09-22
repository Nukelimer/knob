<script lang="ts">
	import Button from '../Resuable/Button.svelte';
</script>


	<section class="relative flex w-full flex-col items-center">
		<video
			src="video/hero_video.mp4"
			autoplay
			muted
			class="aspect-video min-h-[500px] object-cover md:object-fill lg:min-h-screen"
			><track kind="captions" /></video
		>

		<div
			class=" -bottom-40 flex flex-col items-center justify-center bg-black px-20 pb-24 text-white select-none md:absolute md:w-[80%] md:max-w-5xl md:flex-row md:bg-transparent md:px-0 md:pb-0"
		>
			<div class=" flex flex-col gap-6">
				<div class="flex w-full items-center justify-between">
					<h2
						class="mx-auto mb-8 w-full text-center font-serif text-[36px] leading-9 sm:max-w-4/6 md:mb-0 md:max-w-full md:text-start lg:mx-0 lg:max-w-96"
					>
						The low-profile mechanical keyboard of your dreams.
					</h2>

					<p
						class=" font-sans hidden w-full px-10 text-center text-[12px] sm:max-w-4/6 md:flex md:max-w-full md:text-start lg:max-w-1/3"
					>
						The k.no.b.1 is a low-profile mechanical keyboard with uniquely designed keycaps, two
						programmable knobs, and a feature-filled full-color screen
					</p>
				</div>
				<div class="hidden gap-8 md:flex">
					<a href="/store" class=" block  cursor-pointer">
					
						<Button
						
							btn_text="Order Today for $439 USD"
							styles="font-sans bg-[#cdea19] text-black font-extralight px-6 text-sm cursor-pointer"
						/>
					
					</a>
					<p class="font-sans pt-3 text-[12px] ">
						ANSI Shipping Now // ISO Sept 2025 // <a class="text-[#cdea19]" href="/updates"
							>Updates</a
						>
					</p>
				</div>
			</div>

			<p class="font-sans px-10 text-center text-[12px] md:hidden">
				The k.no.b.1 is a low-profile mechanical keyboard with uniquely designed keycaps, two
				programmable knobs, and a feature-filled full-color screen
			</p>

			<div class="md:hidden">
				<div class="">
					<a href="/store" class="mt-6 block cursor-pointer">
						<Button
						btn_text="Order Today for $439 USD"
						styles=" font-sans bg-[#cdea19] text-black px-16 text-[13px] font-extralight cursor-pointer"
					/>
					</a>

					<p class=" font-sans pt-3 text-center text-[12px]">
						ANSI Shipping Now // ISO Sept 2025 // <a class="text-[#cdea19]" href="/updates"
							>Updates</a
						>
					</p>
				</div>
			</div>
		</div>
	</section>
	

