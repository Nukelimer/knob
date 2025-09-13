<script>
	import Button from '../Resuable/Button.svelte';
</script>

<footer class="bg-black">
	<div class="bg-[#ff4d00] py-18 rounded-full px-12 ">
		<h4 class=" text-center text-4xl md:text-7xl pb-6 font-serif  max-w-4xl mx-auto ">No, not that kind of knob. Order now.</h4>

		<div class="flex flex-col md:flex-row items-center  md:items-start justify-between px-16 ">
			<div class="">



                                <Button
				btn_text="Order Today for $439 USD"
				styles=" font-sans bg-[#cdea19] text-black px-16 text-[13px] mb-4 md:mb-0   font-extralight text-nowrap"
			/>
                        <p class="font-sans pt-5 hidden md:block">Copyright © 2025 / <a href="https://worklouder.cc/">Work Louder</a></p>
                        </div>

			<form action="" class=" flex flex-col gap-3 mt-6 md:mt-0 md:gap-0 md:flex-row text-nowrap">
				<input
					type="email"
					name="email"
					class="h-10 md:max-w-64 rounded-4xl not-italic ring-0 outline-0
             placeholder:text-[13px] placeholder:tracking-wider
             focus:border-none active:border-none placeholder:font-sans"
					placeholder="your email address"
				/>
				<Button btn_text={'Get Updates'} styles='bg-[#000] w-full  ' />
			</form>
		</div>
	</div>

        <div class="">


<p class="pb-[30rem] text-white text-center mt-16 font-sans">
  Press Inquiries —
  <a href="mailto:ben@knob.design" class="">
    ben@knob.design
  </a>
</p>



        </div>
</footer>
