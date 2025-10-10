<script>
	import Button from "../Resuable/Button.svelte";
	import store_hero from '$lib/assets/images/Store/store_hero.webp';
	import { ArrowRight,  } from 'lucide-svelte';
	
</script>
<div
		class="m-h-screen relative mx-auto mt-3 flex h-screen w-full max-w-[470px] flex-col items-center justify-center overflow-clip rounded-4xl bg-white font-sans"
	>
		<img
			src={store_hero}
			alt="hero img"
			class="pointer-events-none absolute top-0 translate-x-80 scale-150 -rotate-[150deg] select-none"
		/>
		<img
			src={store_hero}
			alt="hero img"
			class="pointer-events-none absolute bottom-0 -translate-x-22 -translate-y-6 scale-[170%] rotate-[25deg] object-fill select-none"
		/>

		<div class="z-[1] mb-16">
			<h1
				class="flex flex-col bg-gradient-to-tl from-black via-0% to-black/45 bg-clip-text text-center !text-6xl font-medium text-transparent"
			>
				Form & <span>Function</span>
			</h1>
			<p class=" mx-auto mt-2 flex w-fit gap-2 text-center">
				for <span
					class="round-md block animate-wiggle cursor-help bg-[#edff00] px-2 py-1 font-mono text-black"
					>$359</span
				>
			</p>
		</div>

		<div
			class="to-white/ absolute bottom-0 mx-auto flex h-[300px] w-full flex-col items-center justify-end gap-4 bg-gradient-to-t from-white from-10% via-0% py-6"
		>
			<a href="fix-me" class="flex w-fit rounded-4xl items-center bg-[#EDFF00] px-4 cursor-pointer">
				<Button btn_text="Discover Nomad v2" styles="bg-transparent text-black text-lg cursor-pointer" />
				<ArrowRight size={17} />
			</a>
			<p class="text-sm">*Our tools help you focus in ways you’ve only dreamt of.</p>
		</div>
	</div>