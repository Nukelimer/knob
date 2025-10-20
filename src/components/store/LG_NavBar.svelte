<script>
	import { ChevronDown, ChevronUp } from 'lucide-svelte';

	let isActiveKeyboards = false;
	let isActiveAccessories = false;
	let isActiveSupport = false;
</script>

<div
	class={'min-h -[56px] isolate mx-auto my-1 flex w-full max-w-[450px]  items-center justify-between  rounded-4xl rounded-t-4xl   bg-white/50 px-1 font-sans  backdrop-blur-2xl'}
>
	<li class={`my-1 h-full cursor-pointer list-none rounded-3xl bg-[#edff00] px-4 py-2 text-sm`}>
		Home
	</li>
	<li
		class={`${isActiveKeyboards ? 'bg-[#f0f0eb] transition-colors delay-200' : ''} item-center my-1  flex h-full cursor-pointer  list-none justify-center gap-1  rounded-3xl px-4 py-2 text-sm`}
		onmouseenter={() => {
			isActiveKeyboards = true;
		}}
		onmouseleave={() => {
			isActiveKeyboards = false;
		}}
	>
		Keyboards {#if isActiveKeyboards}
			<ChevronDown size={18} class="mt-[2px] transition-transform delay-150" />
		{:else}
			<ChevronUp size={18} class="mt-[2px] transition-transform delay-150" />
		{/if}
	</li>
	<li
		class={`my-1 h-full  cursor-pointer list-none rounded-3xl px-4 py-2 text-sm ${isActiveAccessories ? 'bg-[#f0f0eb] transition-colors delay-200' : ''}  item-center flex justify-center gap-1`}
		onmouseenter={() => {
			isActiveAccessories = true;
		}}
		onmouseleave={() => {
			isActiveAccessories = false;
		}}
	>
		Accessories {#if isActiveAccessories}
			<ChevronDown size={18} class="mt-[2px] transition-transform delay-150" />
		{:else}
			<ChevronUp size={18} class="mt-[2px] transition-transform delay-150" />
		{/if}
	</li>

	<li
		class={`my-1 h-full  cursor-pointer list-none rounded-3xl px-4 py-2 text-sm ${isActiveSupport ? 'bg-[#f0f0eb] transition-colors delay-200' : ''} item-center flex justify-center gap-1 `}
		onmouseenter={() => {
			isActiveSupport = true;
		}}
		onmouseleave={() => {
			isActiveSupport = false;
		}}
	>
		Support
    
    {#if isActiveSupport}
			<ChevronDown size={18} class="mt-[2px] transition-transform delay-150" />
		{:else}
			<ChevronUp size={18} class="mt-[2px] transition-transform delay-150" />
		{/if}
	</li>
</div>
