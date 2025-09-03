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
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '../components/Home/Navigation.svelte';

	let { children } = $props();




	


	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Hello</title>
</svelte:head>

{@render children?.()}


<Navigation/>
