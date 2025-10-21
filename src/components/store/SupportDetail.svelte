<script lang="ts">
	import { onMount } from 'svelte';
	import { accessories as allAccessories, type AccessoryItem } from '../../routes/(store)/store/data/accessories';

	let groupedAccessories: Record<string, AccessoryItem[]> = {};

	onMount(() => {
		groupedAccessories = allAccessories.reduce((acc, item) => {
			if (!acc[item.category]) acc[item.category] = [];
			acc[item.category].push(item);
			return acc;
		}, {} as Record<string, AccessoryItem[]>);
	});
</script>

<div
	class="absolute left-0 top-full z-10 mt-2 w-56 rounded-xl bg-white p-4 shadow-lg"
	role="menu"
	aria-label="Accessories submenu"
>
	<ul class="space-y-2">
		{#each Object.keys(groupedAccessories) as category}
			<li class="relative group">
				<div class="flex items-center justify-between rounded-lg  py-2 hover:bg-gray-100 cursor-pointer">
					{category}
					<span>›</span>
				</div>

				<!-- Nested submenu -->
				<div
					class="absolute left-[95%] top-0 ml-2 hidden group-hover:block w-fit max-w-64 text-nowrap rounded-xl bg-white shadow-lg hover:rounded-2xl"
				>
					<ul class="py-2">
						{#each groupedAccessories[category] as item}
							<li>
								<a
									href={`/store/${item.slug}`}
									class="block px-4 py-2 hover:bg-gray-100"
								>
									{item.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</li>
		{/each}
	</ul>
</div>
