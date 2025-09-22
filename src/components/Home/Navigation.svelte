<script lang="ts">
	import Button from '../Resuable/Button.svelte';
	import knob from '$lib/assets/images/Home/logo_.webp';
	import knob_dark from '$lib/assets/images/Home/logo_dark.webp';

	const urls = ['keyboard', 'keyset', 'numpad', 'lightswitch'];
	const sub_url = ['k·no·b·sans', 'k·no·b·sidians'];
	const path = ['/keyset', '/keyset/dark'];
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';
	let showSubURL = false;

	console.log($page.url.pathname);

	let hoverTimeout: ReturnType<typeof setTimeout>;

	function handleEnter() {
		hoverTimeout = setTimeout(() => {
			showSubURL = true;
		}, 300);
	}

	function handleLeave() {
		clearTimeout(hoverTimeout);
		showSubURL = false;
	}

	function handleClick() {
		showSubURL = !showSubURL;

		console.log('awkjnke');
	}
</script>

<nav class="absolute top-0 flex w-full items-center justify-between p-6 font-sans">
	{#if $page.url.pathname === '/numpad' || $page.url.pathname === '/keyset'}
		<a href="/">
			<img src={knob_dark} alt="logo" class="h-8 w-24" />
		</a>
	{:else}
		<a href="/">
			<img src={knob} alt="logo" class="h-8 w-24" />
		</a>
	{/if}

	<ul class="flex gap-4">
		{#each urls as url}
			{#if url === 'keyset'}
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<li
					class="relative"
					on:mouseenter={handleEnter}
					on:focus={handleEnter}
					on:mouseleave={handleLeave}
					on:blur={handleLeave}
					on:click={handleClick}
				>
					<button
						class={twMerge(`bg cursor-pointer font-sans text-[12px] font-light 
                   text-[#f0ece0] transition-all 
                   delay-300 hover:text-[#cdea19] hover:underline  ${$page.url.pathname === '/numpad' || $page.url.pathname === '/keyset' ? 'text-[#000]   hover:text-[#000] ' : 'text-[#f0ece0] '}`)}
					>
						{url} <span class="font-medium text-[#ff4d00] uppercase">NEW</span>
					</button>

					{#if showSubURL}
						<ul class="absolute -left-6 -mt-2 rounded bg-transparent p-2">
							{#each sub_url as sub}
								<li>
									{#if sub == 'k·no·b·sans'}
										<a
											href={path[0]}
											class={twMerge(`block px-2 py-1 text-[12px] font-light text-[#f0ece0] 
                         hover:text-[#cdea19] hover:underline  ${$page.url.pathname === '/numpad' || $page.url.pathname === '/keyset' ? 'text-[#000]  hover:text-[#000]  ' : 'text-[#f0ece0] '}`)}
										>
											{sub}
										</a>
									{:else}
										<a
											href={path[1]}
											class={twMerge(`flex px-2 py-1 text-[12px] font-light text-[#f0ece0] 
                         hover:text-[#cdea19] hover:underline  ${$page.url.pathname === '/numpad' || $page.url.pathname === '/keyset' ? 'text-[#000]  hover:text-[#000]  ' : 'text-[#f0ece0] '}`)}
										>
											{sub}
											<span class="pl-1 font-sans font-medium text-[#ff4d00] uppercase">NEW</span>
										</a>
									{/if}
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{:else if url == 'keyboard'}
				<li>
					<a
						href={'/'}
						class={twMerge(`bg text-[12px] font-light text-[#f0ece0] !not-italic 
                   hover:text-[#cdea19] hover:underline  ${$page.url.pathname === '/numpad' || $page.url.pathname === '/keyset' ? 'text-[#000]  hover:text-[#000]  ' : 'text-[#f0ece0] '}`)}
					>
						{url}
					</a>
				</li>
			{:else}
				<li>
					<a
						href={'/' + url}
						class={twMerge(`bg text-[12px] font-light text-[#f0ece0] !not-italic 
                   hover:text-[#cdea19] hover:underline  ${$page.url.pathname === '/numpad' || $page.url.pathname === '/keyset' ? 'text-[#000]  hover:text-[#000]  ' : 'text-[#f0ece0] '}`)}
					>
						{url}
					</a>
				</li>
			{/if}
		{/each}
	</ul>

	<form action="" class="hidden gap-4 md:flex">
		<input
			type="email"
			name="email"
			class="flex max-w-48 rounded-4xl border-0 py-1 not-italic
             ring-0 outline-0 placeholder:text-[13px]
             placeholder:tracking-wider focus:border-none active:border-none"
			placeholder="your email address"
		/>
		<Button btn_text={'Get Updates'} styles="" />
	</form>
</nav>
