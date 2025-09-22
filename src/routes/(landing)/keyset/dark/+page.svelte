<script>
	import hero from '$lib/assets/images/Keysets/Dark/hero.webp';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Cta from '../../../../components/Keysets/CTA.svelte';
	import ImageCards from '../../../../components/Keysets/Dark/ImageCards.svelte';
	import {gsap} from 'gsap';
	import { onMount } from 'svelte';
	import BuyNow from '../../../../components/Resuable/BuyNow.svelte';

      gsap.registerPlugin(ScrollTrigger);


      onMount(() => {
    const buyNowEl = document.getElementById("buy-now");
    const triggerEl = document.querySelector("h4");

    if (buyNowEl && triggerEl) {
      gsap.fromTo(
        buyNowEl,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top center", 
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  });

</script>

<section class="">
	<div class="relative h-screen min-h-screen">
		<img src={hero} alt={'hero image'} class="h-full w-full object-cover" />

		<Cta
			route="keyset/dark"
			header_short_txt_styles="text-center text-sm text-[#fff] "
			header_parent_styles=" text-center max-w-sm mx-auto bottom-16 text-white"
			header_styles=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl "
			header="k•no•b•sidian•sans"
			header_short_txt="A dark mode keyset for low-profile keyboards."
		/>
	</div>
	<div class="bg-black">
		<h4
			class=" mx-auto max-w-3xl px-3 pt-12 pb-32 text-center font-serif text-3xl text-white md:text-4xl lg:max-w-4xl lg:text-5xl xl:text-6xl"
		>
			The hauntingly flexible keyset that is compatible with the k•no•b•1, Nomad-E, and many popular
			low-profile keyboards with MX style switches.
			<span class="mx-auto mt-24 block size-3 rounded-full bg-white text-center"></span>
		</h4>
	</div>

	<div class="bg-black">
		<ImageCards />
	</div>

	<div class="flex w-full bg-black">
		<p class="mx-auto block py-24 text-center font-sans text-white">
			Copyright © 2025 / <a href="https://worklouder.cc/" class="text-[#cdea19]">Work Louder</a>
		</p>
	</div>

         <BuyNow link="/checkout" />
</section>
