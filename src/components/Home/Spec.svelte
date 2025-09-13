<script>
	let { data, header } = $props();
</script>

<section class="bg-black px-6 text-white  font-sans pb-12   w-full ">
	{#if header}
		<h4 class="text-2xl mb-4">{header}</h4>
	{/if}

	<div class="first-of-type:border-t  ">
		{#each data as oneRow}
			<div class=" flex justify-between border-b py-2 border-white last-of-type:border-b-0">
				<span>{oneRow.name}</span>
				<span>{oneRow.info}</span>
			</div>
		{/each}
	</div>
</section>
