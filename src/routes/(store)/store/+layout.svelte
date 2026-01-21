<script lang="ts">
	import Header from '../../../components/store/Header.svelte';

	let { children } = $props();

	import favicon from '$lib/assets/store.png';
	import Footer from '../../../components/store/Footer.svelte';

	  import { page } from '$app/stores';


	
	  
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>WORK LOUDER</title>
</svelte:head>

<div class="relative mx-auto flex h-full min-h-screen w-full flex-col items-center bg-black">
	<Header />
	{@render children?.()}

	<Footer />
</div>
