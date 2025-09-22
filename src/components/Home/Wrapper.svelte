<script>
	import Spec from "./Spec.svelte";

</script>




<div class=" bg-black pt-14 w-full">

<div class="md:w-[80%] lg:max-w-5xl mx-auto lg:flex md:gap-6 text-sm ">

        <Spec route
		header="Materials"
		data={[
			{ name: 'Top Enclosure', info: 'CNC Alum / Anodized Silver' },
			{ name: 'Bottom Enclosure', info: 'CNC Alum / Anodized Gun Metal' },
			{ name: 'Switch Plate', info: 'Stamped Alum / Anodized Black' },
			{ name: 'Tilt Risers', info: 'Rubberized Plastic' },
			{ name: 'Keycaps', info: 'Dye Sub PC' },
			{ name: 'Knobs', info: 'ABS Plastic' },
			{ name: 'Screen Glass', info: 'CNC Glass w/ adhesive black film' },
			{ name: 'Screen', info: '100x310 px full-color LCD screen' }
		]}
	/>

	<Spec route
		header="Connectivity and Power"
		data={[
			{ name: 'USB-C Connection', info: 'Cable Included' },
			{ name: 'Bluetooth', info: 'Up to 3 saved connections' },
			{ name: 'Battery', info: '3000mAh Li-ion Battery' }
		]}
	/>

        </div>
</div>