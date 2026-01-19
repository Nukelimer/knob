<script lang="ts">
	interface ButtonProps {
		btn_text: string;
		styles?: string;
		onclick?: ()=>void
	}
	import { twMerge } from 'tailwind-merge';
	let { btn_text = 'add text', styles, onclick }: ButtonProps = $props();
</script>

<div class="">
	<button {onclick}
		class={twMerge(
			` rounded-4xl bg-neutral-500 px-2 py-2 text-center text-sm font-medium text-nowrap  text-[#f0ece0]   ${styles}`
		)}>{@html btn_text}</button
	>
</div>
