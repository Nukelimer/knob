
<script lang="ts">
	import Header from '../../../components/store/Header.svelte';
        import '../../../app.css';
	let { children } = $props();

import favicon from '$lib/assets/store.png';
	import Footer from '../../../components/store/Footer.svelte';




</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>WORK LOUDER</title>
</svelte:head>











<div class="relative  flex flex-col  items-center mx-auto w-full bg-black h-full  min-h-screen">




	<Header/>
		{@render children?.()}


	<Footer/>
</div>
