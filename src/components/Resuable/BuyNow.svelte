<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  export let link: string = '/checkout';
  export let routes: string[] = [];

  let buyNowEl: HTMLDivElement;
  gsap.registerPlugin(ScrollTrigger);

  function setupAnimation() {
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Set initial state off-screen left
    gsap.set(buyNowEl, { x: '-120%', opacity: 0 });

    ScrollTrigger.create({
      trigger: document.body,
      start: '50% center',        // halfway down page
      end: '+=400',               // smoother 400px fade range
      scrub: true,
      onUpdate: self => {
        const p = self.progress;  // 0 → 1 over 400px scroll
        // Slide from left (-120%) to fully visible (0%)
        // Ease movement a bit by multiplying progress
        const slide = -120 + (120 * p);
        gsap.set(buyNowEl, {
          x: `${slide}%`,
          opacity: 0.2 + 0.8 * p // start slightly visible as it slides
        });
      }
    });
  }

  onMount(() => {
    const path = window.location.pathname;
    if (routes.length && !routes.includes(path)) return;
    setupAnimation();
  });

  onDestroy(() => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  });
</script>

<div
  bind:this={buyNowEl}
  class="fixed bottom-10 left-0 z-50 bg-[#cdea19] px-6 py-3 font-bold text-black rounded-r-full shadow-lg cursor-pointer"
>
  <a href={link} class="block">Buy Now</a>
</div>
