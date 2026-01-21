<script lang="ts">

	import '@fontsource/inter/100-italic.css';
import '@fontsource/inter/200-italic.css';
import '@fontsource/inter/300-italic.css';
import '@fontsource/inter/400-italic.css';
import '@fontsource/inter/500-italic.css';
import '@fontsource/inter/600-italic.css';
import '@fontsource/inter/700-italic.css';
import '@fontsource/inter/800-italic.css';
import '@fontsource/inter/900-italic.css';
	
	import favicon from '$lib/assets/favicon.png';
	import Navigation from '../../components/Home/Navigation.svelte';

	let { children } = $props();


  import { page } from '$app/stores';


	

	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Knob.Design</title>
</svelte:head>


<div class=" overflow-hidden ">
{@render children?.()}

{#if !$page.status || ( $page.status !== 404 && $page.status !== 500) &&  !$page.url.pathname.includes("/store") }

  <Navigation/>

 
{/if}
</div>