<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { keyboards } from '../../routes/(store)/store/data/products';
	import { support as Supports } from '../../routes/(store)/store/data/support';
	import SupportDetail from './SupportDetail.svelte';
	import { writable } from 'svelte/store';

	type MenuType = 'keyboards' | 'accessories' | 'support' | '';

	let activeMenu: MenuType = '';
	let hoverTimeout: ReturnType<typeof setTimeout> | undefined;

	function showMenu(type: Exclude<MenuType, ''>) {
		clearTimeout(hoverTimeout);
		activeMenu = type;
	}

	function hideMenu(type: Exclude<MenuType, ''>) {
		hoverTimeout = setTimeout(() => {
			if (activeMenu === type) activeMenu = '';
		}, 250);
	}

	function handleLinkClick() {
		activeMenu = ''; // close modal when navigating
	}

 let value = writable('hello world');

 const trimmed = (node, value) => {
  $effect(() => {
    value.subscribe(v => {
      if (node.value.trim() !== v) {
        node.value = v
      }
    })
    
    function input(event) {
      const v = event.currentTarget.value
      value.set(v.trim())
    }
    node.addEventListener('input', input)
    return () => {
      node.removeEventListener('input', input)
    }
  });
}
</script>

<div
	class="relative mx-auto my-1 flex w-full max-w-[450px] items-center justify-between rounded-4xl bg-white/50 px-1 font-sans backdrop-blur-2xl"
>
	<!-- Home -->
	<li
		class="my-1 cursor-pointer list-none rounded-3xl bg-[#edff00] px-4 py-2 text-base font-medium"
	>
		Home
	</li>

	<!-- Keyboards -->
	<div class="relative" role="menu">
		<li
			role="menuitem"
			tabindex="0"
			aria-haspopup="true"
			aria-expanded={activeMenu === 'keyboards'}
			class="my-1 flex cursor-pointer list-none items-center justify-center gap-1 rounded-3xl px-2 py-2 text-base font-medium"
			class:bg-[#f0f0eb]={activeMenu === 'keyboards'}
			on:mouseenter={() => showMenu('keyboards')}
			on:mouseleave={() => hideMenu('keyboards')}
		>
			Keyboards
			<span
				class="mt-[2px] transition-transform duration-300 ease-in-out"
				class:rotate-180={activeMenu === 'keyboards'}
			>
				<ChevronDown size={18} />
			</span>
		</li>

		{#if activeMenu === 'keyboards'}
			<!-- svelte-ignore a11y_interactive_supports_focus -->
			<div
				role="menu"
				aria-label="Keyboards submenu"
				class="absolute top-full left-0 z-10 mt-2 w-56 rounded-xl bg-white p-6 "
				on:mouseenter={() => showMenu('keyboards')}
				on:mouseleave={() => hideMenu('keyboards')}
			>
				<ul class=" text-base">
					{#each keyboards as product}
						<li class="">
							<a
								href={`/store/${product.slug}`}
								on:click={handleLinkClick}
								class={`block hover:bg-gray-50 p-2 text-nowrap rounded-2xl`}
							>
								{product.name}
							</a>
							{#if product.slug == "framer-creator-micro" || product.slug == "xyz-work-board-2" || product.slug == "knob1"}
							
								<span class="border flex mx-2"></span>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>

	<!-- Accessories -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
	class="relative"
	on:mouseenter={() => showMenu('accessories')}
	on:mouseleave={() => hideMenu('accessories')}
>
	<button
		class="flex items-center gap-1 font-medium"
		aria-haspopup="true"
		aria-expanded={activeMenu === 'accessories'}
	>
		Accessories <span
				class="mt-[2px] transition-transform duration-300 ease-in-out"
				class:rotate-180={activeMenu === 'support'}
			>
				<ChevronDown size={18} />
			</span>
	</button>

	{#if activeMenu === 'accessories'}
	
	<SupportDetail />
	{/if}
</div>

	<!-- Support -->
	<div class="relative" role="menu">
		<li
			role="menuitem"
			tabindex="0"
			aria-haspopup="true"
			aria-expanded={activeMenu === 'support'}
			class="my-1 flex cursor-pointer list-none items-center justify-center gap-1 rounded-3xl px-2 py-2 text-base font-medium"
			class:bg-[#f0f0eb]={activeMenu === 'support'}
			on:mouseenter={() => showMenu('support')}
			on:mouseleave={() => hideMenu('support')}
		>
			Support
			<span
				class="mt-[2px] transition-transform duration-300 ease-in-out"
				class:rotate-180={activeMenu === 'support'}
			>
				<ChevronDown size={18} />
			</span>
		</li>


		
		{#if activeMenu === 'support'}
			<!-- svelte-ignore a11y_interactive_supports_focus -->
			<div
				role="menu"
				aria-label="Keyboards submenu"
				class="absolute top-full left-0 z-10 mt-2 w-56 rounded-xl bg-white p-6 "
				on:mouseenter={() => showMenu('support')}
				on:mouseleave={() => hideMenu('support')}
			>
				<ul class=" text-base">
					{#each Supports as  support}
						<li class="">
							<a
								href={`/store/${ support.slug}`}
								on:click={handleLinkClick}
								class={`block hover:bg-gray-50 p-2 text-nowrap rounded-2xl`}
							>
								{ support.name}
							</a>
							{#if  support.slug == "framer-creator-micro" || support.slug == "xyz-work-board-2" ||  support.slug == "knob1"}
							
								<span class="border flex mx-2"></span>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</div>



<input use:trimmed={value} />
