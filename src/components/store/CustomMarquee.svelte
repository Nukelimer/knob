<script>
	import Marquee from 'svelte-fast-marquee';

	let { contents } = $props();
</script>

{#if contents.length > 0}
	<Marquee class='w-full my-8 flex text-nowrap marquee_font' speed={50} pauseOnHover={true} gradientWidth={"10%"} gradientColor={"#000"} >
		{#each contents as content}
			<div class="text-white w-full text-5xl  px-4">{content}  {" "}</div>
		{/each}
	</Marquee>
{/if}
