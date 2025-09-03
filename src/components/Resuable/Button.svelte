<script lang="ts">


	interface ButtonProps {
		btn_text: string;
		styles?: string;
	}
import { twMerge } from 'tailwind-merge'
	let { btn_text = 'add text', styles }: ButtonProps = $props();
</script>

<div class="">
	<button
		class={twMerge(`rounded-4xl bg-neutral-500 px-2 py-2 text-center text-[15px] font-medium  text-[#f0ece0]   ${styles}`)}
		>{btn_text}</button
	>
</div>
