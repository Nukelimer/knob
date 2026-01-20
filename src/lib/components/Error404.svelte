<script>
	import error from '$lib/assets/images/Error/error.webp';
	import "../../app.css"
</script>

<div
	class="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black"
>
	<img src={error} alt="Error background" class="absolute top-0 h-full w-full object-cover" />

	<div class="relative z-10 max-w-2xl px-6 py-10 text-center">

		<p class="text-white text-2xl mb-4">Wrong route :)</p>
		<a href="/store">
			<button
				class="
          cursor-pointer
          rounded-lg bg-[#ff4d00]
          px-6
          py-2 text-sm
          font-medium
          text-white
          shadow-lg
          transition-all
          duration-200
          hover:bg-[#ff6a33]
          active:scale-95
          md:text-xl
        "
			>
			 Go back home
			</button>
		</a>
	</div>

	<!-- Optional debug / placeholder content -->
	<!-- <div class="absolute bottom-4 left-4 z-10 bg-pink-600/80 text-white p-4 rounded">
    This is just placeholder text — remove me later
  </div> -->
</div>

<style>
	/* Optional: darken the background image a bit so text is more readable */
	img {
		filter: brightness(0.65);
	}
</style>
