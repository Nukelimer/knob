<script lang="ts">
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

  $: data = $page.data;
  $: product = data.product;
  $: supports = data.supports;

  // Correctly typed glob – this is the key part
  const imageModules = import.meta.glob('$lib/assets/images/Store/items/creator-micro-2/*.webp', {
    eager: true,
    import: 'default'
  }) as Record<string, string>;

  // Map filename → resolved URL (runs once)
  const imageMap = Object.fromEntries(
    Object.entries(imageModules).map(([key, value]) => {
      const filename = key.split('/').pop()!; // "hero.webp"
      return [filename, value];
    })
  );

  // Super simple lookup
  function getImage(filename: string): string {
    const url = imageMap[filename];
    if (!url) {
      console.warn(`Image not found: ${filename}`);
      return '/fallback.webp'; 
    }
    return url;
  }
</script>

<main class="p-8 text-white" in:fade out:fade>
  {#if product}
    <section>
      <h1 class="text-3xl font-bold mb-4">{product.name}</h1>
      <p class="mb-4 text-lg">{product.description}</p>
      <p class="mb-6 text-xl font-semibold">${product.price}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each product.images as filename}
          {@const src = getImage(filename)}
          <img
            {src}
            alt={product.name}
            class="rounded-xl shadow-md w-full object-cover hover:scale-105 transition-transform"
            loading="lazy"
          />
        {/each}
      </div>
    </section>
  {/if}

  {#if supports}
    <section class="mt-12">
      <h2 class="text-2xl font-semibold mb-4">Support Information</h2>
      <p class="text-lg">Missing</p>
    </section>
  {/if}

  {#if !product && !supports}
    <p class="text-red-400 text-lg mt-8">No product or support found for this slug.</p>
  {/if}
</main>