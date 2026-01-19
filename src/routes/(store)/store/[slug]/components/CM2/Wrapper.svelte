<script>
	import { cn } from '$lib/utils';

	let { className, children } = $props();
</script>

<div class={cn('bg-[#EBEBEB]', className)}>{@render children?.()}</div>
