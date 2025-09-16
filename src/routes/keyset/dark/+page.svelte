


<script>

        	import hero from '$lib/assets/images/Keysets/Dark/hero.webp';
	import Cta from '../../../components/Keysets/CTA.svelte';
	import ImageCards from '../../../components/Keysets/Dark/ImageCards.svelte';
</script>


<section class="">


<div class="min-h-screen h-screen relative">
        <img src={hero} alt={"hero image"} class="h-full object-cover">

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


        <h4 class=" mx-auto max-w-3xl lg:max-w-4xl   text-white pt-12 pb-32 font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-3 text-center ">
             The hauntingly flexible keyset that is compatible with the k•no•b•1, Nomad-E, and many popular low-profile keyboards with MX style switches.
             <span class="size-3 bg-white block text-center mx-auto  rounded-full mt-24 "></span>
        </h4>

</div>

<div class="bg-black">


        <ImageCards/>



</div>



          <div class="w-full flex bg-black">

		 <p class="font-sans py-24  block text-white text-center mx-auto ">Copyright © 2025 / <a href="https://worklouder.cc/" class="text-[#cdea19]">Work Louder</a></p>
	  </div>


</section>