
<header class="relative h-24 shadow-lg">
	<nav class="w-full border-4 ">
		{#if open}
			<ul
				class="absolute top-24 right-0 m-0 w-full list-none bg-gray-900 p-0 border-4"
				transition:slide={{ duration: 300 }}
			>
				<NavigationMenu.Root class='overflow-clip'>
					<NavigationMenu.List class="w-full ">
						<NavigationMenu.Item class=" w-screen" openOnHover={false}>
							<NavigationMenu.Trigger class="w-full cursor-pointer">Item One</NavigationMenu.Trigger
							>
							<NavigationMenu.Content interactOutsideBehavior="ignore">
								<p class="w-64 bg-red-400 py-5">Remilekun</p>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</ul>
		{/if}
	</nav>

	<button
		aria-labelledby="wdd"
		class="mobile-menu-toggle hamburger-menu inline-block h-24 p-8 transition-all duration-300 hover:cursor-pointer"
		class:open
		on:click|preventDefault={toggleMenu}
	>
		<span class="menu-item mb-2.5 block h-0.5 w-10 bg-black transition-all duration-300"></span>
		<span class="menu-item mb-2.5 block h-0.5 w-10 bg-black transition-all duration-300"></span>
		<span class="menu-item mb-2.5 block h-0.5 w-10 bg-black transition-all duration-300"></span>
	</button>
</header>

<style>
	.hamburger-menu.open .menu-item:nth-child(1) {
		transform: rotate(45deg);
		transform-origin: 10px 1.5px;
	}

	.hamburger-menu.open .menu-item:nth-child(2) {
		opacity: 0;
	}

	.hamburger-menu.open .menu-item:nth-child(3) {
		transform: rotate(-45deg);
		transform-origin: 10px 1.5px;
	}

	@media (min-width: 768px) {
		.mobile-nav-wrap {
			/* display: none; */
		}
	}
</style>
