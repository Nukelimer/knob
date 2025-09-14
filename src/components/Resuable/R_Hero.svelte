<script>
	import { twMerge } from 'tailwind-merge';

	let {
		img_src,
		header,
		header_styles,
		header_short_txt,
		header_parent_styles,
                header_short_txt_styles,
		paragraph_array,
		last_about,
                last_section_styles,
		route
	} = $props();
</script>

<div class=" flex min-h-screen flex-col">
	{#if route == 'numpad'}
		<div
			class=" relative flex h-[56vh] flex-col items-center justify-center bg-[#D9DAD9] md:h-[63vh]"
		>
			<img
				src={img_src}
				alt="hero"
				class=" size-[400px] object-fill md:size-[570px] md:object-cover"
			/>

			<div class={twMerge(` -translate-y-8 font-serif font-extralight ${header_parent_styles}`)}>
				<h3 class={twMerge(` text-5xl md:text-6xl lg:text-7xl ${header_styles}`)}>{header}</h3>

				<p class="pt-3 text-center text-neutral-400">{header_short_txt}</p>
			</div>
		</div>
	{:else}
		<div
			class="   relative  flex h-[66vh]  flex-col items-center justify-center md:h-[69vh] lg:h-[72vh] w-full"
		>
			<img src={img_src} alt="hero" class=" h-full object-cover w-full md:object-cover" />

			<div class={twMerge(` -translate-y-8 !absolute -bottom-16  font-serif font-extralight ${header_parent_styles}`)}>
				<h3 class={twMerge(` text-5xl md:text-6xl lg:text-7xl ${header_styles}`)}>{header}</h3>

				<p class={twMerge(`pt-3 text-center text-neutral-400 ${header_short_txt_styles} `)}>{header_short_txt}</p>
			</div>
		</div>
	{/if}


        <div class={`${last_section_styles}`}>


                <div class={twMerge(`flex flex-1 flex-col justify-between px-6 md:mx-auto md:max-w-2xl lg:max-w-4xl `)}>
                        <div class=" flex w-full flex-col gap-8 py-16 md:flex-row">
                                {#each paragraph_array as list}
                                        <p class="font-sans text-[15px] md:w-[33%] last:md:text-nowrap">{@html list}</p>
                                {/each}
                        </div>
        
                        <h4 class="my-thin-text font-serif text-4xl">{last_about}</h4>
        
                        <p class="mt-16 pb-16 font-sans text-black">
                                Press Inquiries —
                                <a href="mailto:ben@knob.design" class=""> ben@knob.design </a>
                        </p>
        
                        <p class="py-4 text-center text-sm">
                                Copyright © 2025 / <a
                                        href="https://worklouder.cc/"
                                        rel="_blank"
                                        class=" w-full hover:text-amber-100"
                                >
                                        Work Louder
                                </a>
                        </p>
                </div>


        </div>

</div>
