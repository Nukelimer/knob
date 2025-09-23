
<script lang="ts">
  import { slide } from 'svelte/transition';
  import { ShoppingCart, X } from 'lucide-svelte';
  import * as NavigationMenu from '../../lib/components/ui/navigation-menu/index';
   import * as Accordion from "../../lib/components/ui/accordion/index";
	import { twMerge } from 'tailwind-merge';

  let open = false;
  let cartCount = 0;

  function toggleMenu(event: MouseEvent): void {
    event.preventDefault();
    open = !open;
  }
</script>

<nav class=" z-10 flex flex-col items-center max-w-[450px] mx-auto fixed top-5 w-full">
  <div
    class={` ${open ? "py-4 isolate mx-auto flex w-full max-w-[450px] items-center justify-between min-h-[56px] rounded-t-4xl bg-white px-2 ": "py-2 isolate mx-auto flex w-full max-w-[450px] items-center justify-between min-h-[56px] rounded-4xl bg-white/50 backdrop-blur-2xl px-2 "} `}
  >
   
    <a href="/store" aria-label="Store Logo" class="w-36 pl-3">
      <svg viewBox="0 0 260.5 33.59">
        <path
          d="M78.2 11.49c1.36-.88 2.95-1.37 4.79-1.47v5.84c-2.48 0-4.35.49-5.63 1.48s-1.92 2.58-1.92 4.76v10.86h-6.12V10.24h5.84v4.36c.67-1.19 1.69-2.22 3.05-3.1Zm24.51 21.48-9.47-10.73v10.73h-6.12V0h6.12v19.81l8.61-9.57h7.4l-9.89 10.65 11.12 12.08zM126.52 0h6.12v32.97h-6.12zm44.37 32.33c-1.57-.71-2.77-1.72-3.6-3.05s-1.24-2.89-1.24-4.71V10.23h6.1v13.95q0 1.98 1.2 2.97c1.2.99 1.85 1 3.16 1s2.38-.33 3.19-1 1.21-1.66 1.21-2.97V10.23h6.12v14.34q0 2.73-1.26 4.71c-.84 1.32-2.04 2.34-3.62 3.05s-3.46 1.06-5.64 1.06-4.05-.35-5.61-1.06Zm26.06-.44c-1.68-1.03-3.02-2.45-4.02-4.27s-1.5-3.84-1.5-6.07.5-4.25 1.5-6.05 2.34-3.22 4.02-4.25 3.51-1.55 5.48-1.55c1.63 0 3.08.3 4.36.9 1.27.6 2.33 1.44 3.18 2.51L209.99 0h6.12v32.97h-6.14v-2.9c-.86 1.06-1.92 1.89-3.19 2.48s-2.72.89-4.35.89c-1.97 0-3.8-.52-5.48-1.55m10.47-4.51c.99-.57 1.78-1.35 2.35-2.36s.86-2.16.86-3.47-.29-2.44-.86-3.44-1.36-1.79-2.35-2.35-2.1-.84-3.32-.84-2.33.28-3.33.84-1.79 1.34-2.37 2.35-.87 2.16-.87 3.44.29 2.46.87 3.47 1.37 1.8 2.37 2.36 2.11.85 3.33.85 2.32-.28 3.32-.85m48.29-15.89c1.36-.88 2.95-1.37 4.79-1.47v5.84c-2.48 0-4.35.49-5.63 1.48s-1.92 2.58-1.92 4.76v10.86h-6.12V10.24h5.84v4.36c.67-1.19 1.69-2.22 3.05-3.1ZM137.496 21.618l11.851-11.85 11.851 11.85-11.851 11.851zM64.45 18.68h-8.78V9.89h-6.12v8.79h-8.79v6.12h8.79v8.79h6.12V24.8h8.78zm169.66-8.29c-7.26 0-13.15 5.89-13.15 13.15 0 3.63 1.47 6.92 3.85 9.3l18.6-18.6a13.11 13.11 0 0 0-9.3-3.85m-196.76-.15-8.01 22.75h-5.28l-5.39-15.26-5.43 15.26H7.92L0 10.24h6.42l4.61 15.07 5.47-15.07h4.31l5.43 15.02 4.64-15.02h6.46Z"
        />
      </svg>
    </a>

    <!-- Hamburger Menu and Cart -->
  <div class="flex items-center justify-center h-full gap-2 relative">
  <button
    type="button"
    class={twMerge(`hamburger-menu absolute flex flex-col items-end transition-all duration-300 hover:cursor-pointer ${open ? 'right-2' : 'right-22'}`)}
    class:open={open}
    on:click|preventDefault={toggleMenu}
    aria-label="Toggle menu"
    aria-expanded={open}
  >
    {#if open }
      <X size={28} />

    {:else}
      <span class="menu-item block h-0.5 w-6 bg-black mb-1.5 rounded-md transition-all duration-300"></span>
    <span class="menu-item block h-0.5 w-4 bg-black mb-1.5 rounded-md transition-all duration-300"></span>
    <span class="menu-item block h-0.5 w-6 bg-black rounded-md transition-all duration-300"></span> 
    {/if}
  </button>

  <div
    class={`flex cursor-pointer items-center justify-center gap-1 rounded-full bg-[#edff00] px-3 py-2 ${open ? "hidden" : "flex"}`}
  >
    <ShoppingCart size={18} />
    <span
      class="flex h-6 w-6 items-center justify-center rounded-full bg-black px-1 text-center font-mono text-xs text-white"
    >
      {cartCount}
    </span>
  </div>
</div>
  </div>

 
  {#if open}
<ul
  class="absolute top-14 w-[450px] list-none  min-h-[70vh]  overflow-clip bg-white rounded-b-4xl"
  transition:slide={{ duration: 300 }}
>
  

 


  <a href="/" class="bg-white flex w-full pt-10 text-xl font-sans  px-4">Home</a>

  <Accordion.Root type="single">
  <Accordion.Item value="item-1" class="bg-white w-[450px]  max-w-[450px]  border-none font-sans px-4  ">
    <Accordion.Trigger class='text-xl font-normal  cursor-pointer border-0 no-underline hover:no-underline'>Keyboards</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>


  <Accordion.Item value="item-2" class="bg-white w-[450px]  max-w-[450px]  border-none font-sans px-4">
    <Accordion.Trigger class='text-xl font-normal  cursor-pointer border-0 no-underline hover:no-underline'>Accessories</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>





<Accordion.Item value="item-3" class="bg-white w-[450px]  max-w-[450px] border-none  font-sans px-4">
    <Accordion.Trigger class='text-xl font-normal  cursor-pointer border-0 no-underline hover:no-underline'>Support</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>




</Accordion.Root>






</ul>

  {/if}
</nav>

