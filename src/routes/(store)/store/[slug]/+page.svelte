<script lang="ts">
  import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
  import type { PageData } from './$types';

  // This store updates automatically when the slug changes
  $: data = $page.data as PageData;

  // Derive reactive values
  $: product = data.product;
  $: supports = data.supports;
</script>

<main class="p-8 text-white" in:fade out:fade>
  {#if product}
    <section>
      <h1 class="text-3xl font-bold mb-4">{product.name}</h1>
      <p class="mb-4 text-lg">{product.description}</p>
      <p class="mb-6 text-xl font-semibold">${product.price}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each product.images as img}
          <img src={img} alt={product.name} class="rounded-xl shadow-md" />
        {/each}
      </div>
    </section>
  {/if}

  {#if supports}
    <section class="mt-12">
      <h2 class="text-2xl font-semibold mb-4">Support Information</h2>
      <p class="text-lg">{ "Mising"}</p>
    </section>
  {/if}

  {#if !product && !supports}
    <p class="text-red-400 text-lg mt-8">No product or support found for this slug.</p>
  {/if}
</main>
