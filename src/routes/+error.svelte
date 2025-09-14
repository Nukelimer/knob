
<script>


        import error from '$lib/assets/images/Error/error.webp';
	import Button from '../components/Resuable/Button.svelte';
        
</script>



	<div
  class="relative flex flex-col items-center justify-end overflow-y-hidden  h-screen w-screen"
>

  <img
    src="{error}?width=1920&height=1080"
    alt="image_3"
    class="absolute inset-0 h-full w-full  object-fill md:object-cover"
  />


  <a
    href="/"
    class=" z-10 
         cursor-pointer  -translate-y-36
"
  >
    <Button 
      btn_text="Not the Knob you are looking for?" 
      styles="cursor-pointer px-4 py-2 text-black text-[10px] bg-[#ff4d00] py-3" 
    />
  </a>
</div>

