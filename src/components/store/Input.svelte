<script lang="ts">
  let { placeholder, type, styles } = $props();
</script>

{#if type === "number"}
 <input
  type="number"
  placeholder={placeholder}
  class={`${styles} [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
  onwheel={(e) => e.preventDefault()}
/>

{:else}
  <input type={type} placeholder={placeholder} class={styles} />
{/if}

