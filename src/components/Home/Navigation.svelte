<script lang="ts">
  import Button from '../Resuable/Button.svelte';
  import knob from '$lib/assets/images/Home/logo_.webp';

  const urls = ['keyboard', 'keysets', 'numpad', 'lightswitch'];
  const sub_url = ['k·no·b·sans', 'k·no·b·sidians'];

  let showSubURL = false;
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
</script>

<nav class="absolute top-0 flex w-full items-center justify-between p-6">
  <img src={knob} alt="logo" class="h-8 w-24" />

  <ul class="flex gap-4">
    {#each urls as url}
      {#if url === 'keysets'}
        <li
          class="relative"
          on:mouseenter={handleEnter}
          on:focus={handleEnter}
          on:mouseleave={handleLeave}
          on:blur={handleLeave}
        >
          <button
            class="bg text-[12px] font-light text-[#f0ece0] !not-italic 
                   hover:text-[#cdea19] hover:underline 
                   cursor-pointer transition-all delay-300"
          >
            {url}
          </button>

          {#if showSubURL}
            <ul class="absolute -left-6 -mt-2 bg-transparent p-2 rounded shadow">
              {#each sub_url as sub}
                <li>
                  <a
                    href={"/" + encodeURIComponent(sub)}
                    class="block px-2 py-1 text-[12px] font-light text-[#f0ece0] 
                           hover:text-[#cdea19] hover:underline"
                  >
                    {sub}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {:else}
        <li>
          <a
            href={"/" + url}
            class="bg text-[12px] font-light text-[#f0ece0] !not-italic 
                   hover:text-[#cdea19] hover:underline"
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
      class="h-10 max-w-48 rounded-4xl not-italic ring-0 outline-0 
             placeholder:text-[13px] placeholder:tracking-wider 
             focus:border-none active:border-none"
      placeholder="your email address"
    />
    <Button btn_text={'Get Updates'} />
  </form>
</nav>
