<script>
	import { Check, Instagram } from 'lucide-svelte';

	import Input from './Input.svelte';
	import { twMerge } from 'tailwind-merge';
	import Button from '../Resuable/Button.svelte';
	import bitmoji from '../../lib/assets/images/Store/bitmoji.webp';
	import cofounder from '../../lib/assets/images/Store/footer_founder.webp';

	import { XSolid, DiscordSolid, InstagramSolid } from 'flowbite-svelte-icons';

	let toggle = false;
</script>

<footer class="mx-4 rounded-3xl border border-white/20 bg-[#121212] px-4 py-6  mb-8">
	<div class="">
		
		
		<div class="flex flex-col gap-y-2 md:flex-row-reverse md:gap-x-4">
			<div class="md:w-2/3 py-6">
				<h4 class="text-xl text-white md:mb-4">
				Hey! Interested in staying in the loop, sign-up for our updates. We won't spam you, pinky
				promise 🤙
			</h4>
			<div class="flex gap-2 mb-5">
				<Input
					placeholder="Name"
					styles="bg-transparent border-0 border-b border-white/30 placeholder:text-sm placeholder:text-white/30 w-full placeholder:text-start pl-0 ring-0 active:ring-b-yellow-300 text-white focus:border-b-[#edff00]"
					type="text"
				/>
				<Input
					placeholder="Last Name"
					styles="bg-transparent border-0 border-b border-white/30 placeholder:text-sm placeholder:text-white/30 w-full placeholder:text-start pl-0 ring-0 active:ring-b-yellow-300 text-white focus:border-b-[#edff00]"
					type="text"
				/>
			</div>
			<div class="flex gap-2">
				<Input
					placeholder="Email"
					styles="bg-transparent border-0 border-b border-white/30 placeholder:text-sm placeholder:text-white/30 w-full placeholder:text-start pl-0 ring-0 active:ring-b-yellow-300 text-white focus:border-b-[#edff00]"
					type="email"
				/>
				<Input
					placeholder="Phone"
					styles="bg-transparent border-0 border-b border-white/30 placeholder:text-sm placeholder:text-white/30 w-full placeholder:text-start pl-0 ring-0 active:ring-b-yellow-300 text-white focus:border-b-[#edff00]"
					type="number"
				/>
			</div>

			<div
				role="button"
				tabindex="0"
				onkeyup={() => {}}
				aria-roledescription="btn"
				class=" mt-6 flex gap-2"
				onclick={() => (toggle = !toggle)}
			>
				<span
					id="agree"
					class={twMerge(
						` flex h-4 w-6 md:w-4  items-center justify-center rounded border-1 bg-black ${toggle ? 'bg-[#edff00] transition-colors delay-150' : ''}`
					)}
				>
					<Check size={13} color="black" />
				</span>
				<label for="agree" class="text-xs text-white/30 select-none"
					>I'd like to receive drop notifications and offers from Work Louder Inc. via email and/or
					occasional sms & consent to the privacy policy</label
				>
			</div>
			<Button btn_text="Submit" styles="bg-[#edff00] text-black w-full mt-4 md:w-fit md:px-8" />

			</div>
			<img src={cofounder} alt="cofounder" class="hidden md:flex w-1/3  object-cover">



			</div>

			<div class="my-10">
				<img src={bitmoji} alt="bitmoji" class="m-auto w-24 pb-8" />

				<div class="mx-auto max-w-52">
					<svg id="svg-726592165_1802" data-name="Livello 1" viewBox="0 0 200 26"
						><defs
							><style>
								.cls-1 {
									fill: #fff;
								}
							</style></defs
						><path
							d="M60 8.93a7.46 7.46 0 0 1 3.71-1.13v4.48a7 7 0 0 0-4.32 1.14 4.35 4.35 0 0 0-1.48 3.66v8.34h-4.69V8h4.48v3.34A7.1 7.1 0 0 1 60 8.93m18.86 16.49-7.27-8.24v8.24H66.9V.11h4.69v15.21L78.2 8h5.68l-7.59 8.17 8.53 9.28ZM97.13.11h4.7v25.31h-4.7Zm34.07 24.82a6.13 6.13 0 0 1-2.76-2.34 6.7 6.7 0 0 1-1-3.62V8h4.68v10.68a2.78 2.78 0 0 0 .92 2.28 3.66 3.66 0 0 0 2.42.77A3.74 3.74 0 0 0 138 21a2.78 2.78 0 0 0 .93-2.28V8h4.7v11a6.55 6.55 0 0 1-1 3.62 6.15 6.15 0 0 1-2.77 2.34 10.4 10.4 0 0 1-4.34.82 10.3 10.3 0 0 1-4.32-.85m20.01-.34a8.64 8.64 0 0 1-3.09-3.28 9.45 9.45 0 0 1-1.12-4.66 9.44 9.44 0 0 1 1.12-4.65 8.73 8.73 0 0 1 3.09-3.26 7.9 7.9 0 0 1 4.21-1.18 7.7 7.7 0 0 1 3.34.69 6.6 6.6 0 0 1 2.44 1.93V.11h4.7v25.31h-4.7v-2.23a6.8 6.8 0 0 1-2.44 1.91 7.9 7.9 0 0 1-3.34.68 7.8 7.8 0 0 1-4.21-1.19m8-3.46a4.77 4.77 0 0 0 1.8-1.82 5.3 5.3 0 0 0 .66-2.66 5.23 5.23 0 0 0-.66-2.64 4.67 4.67 0 0 0-1.8-1.81 5.1 5.1 0 0 0-2.55-.64 5.14 5.14 0 0 0-2.55.64 4.66 4.66 0 0 0-1.78 1.8 5.13 5.13 0 0 0-.67 2.64 5.2 5.2 0 0 0 .67 2.66 4.75 4.75 0 0 0 1.82 1.82 5.14 5.14 0 0 0 2.55.65 5.1 5.1 0 0 0 2.55-.64Zm37.12-12.2A7.4 7.4 0 0 1 200 7.8v4.48a7 7 0 0 0-4.33 1.14 4.34 4.34 0 0 0-1.47 3.66v8.34h-4.7V8h4.5v3.34a6.9 6.9 0 0 1 2.33-2.41M105.562 16.702l9.094-9.094 9.093 9.094-9.093 9.093zM49.48 14.45h-6.74V7.7h-4.7v6.75h-6.75v4.69h6.75v6.75h4.7v-6.75h6.74zm130.26-6.37a10.1 10.1 0 0 0-7.14 17.24L186.88 11a10 10 0 0 0-7.14-2.92M28.67 8l-6.14 17.43h-4.06l-4.13-11.71-4.17 11.71H6.08L0 8h4.93l3.54 11.54L12.67 8H16l4.15 11.5L23.71 8Z"
							class="cls-1"
						/></svg
					>
				</div>
			</div>
		
 
		<div class="space-y-10 bg-transparent py -6 text-center text-white/60 mt-12">
			<div class="flex flex-wrap justify-center gap-4 text-sm">
				<a href="/terms-of-services" class=" hover:text-white hover:underline">Terms of services</a>
				<a href="/return-policy" class=" hover:text-white hover:underline">Return policy</a>
				<a href="/terms-and-conditions" class=" hover:text-white hover:underline">Terms and conditions</a>
				<a href="/privacy-policy" class=" hover:text-white hover:underline">Privacy policy</a>
				<a href="/gpsr-compliance" class=" hover:text-white hover:underline">GPSR Compliance</a>
				<a href="/press-kit" class=" hover:text-white hover:underline">Press-Kit</a>
				<a href="/cookie-settings" class=" hover:text-white hover:underline">Cookie Settings</a>
			</div>

			<div class="flex justify-center gap-6 text-xl">
				<a
					href="https://discord.com"
					target="_blank"
					aria-label="Discord"
					rel="noopener noreferrer"
					class="flex cursor-pointer items-center hover:brightness-75"
				>
					<DiscordSolid class="h-6 w-6 shrink-0" />
				</a>
				<a
					href="https://x.com"
					target="_blank"
					aria-label="X (Twitter)"
					rel="noopener noreferrer"
					class="flex cursor-pointer items-center hover:brightness-75"
				>
					<XSolid class="h-4 w-4 shrink-0" />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					aria-label="Instagram"
					rel="noopener noreferrer"
					class="flex cursor-pointer items-center hover:brightness-75"
				>
					<InstagramSolid class="h-6 w-6 shrink-0 " />
				</a>
				<a
					href="https://tiktok.com"
					target="_blank"
					aria-label="TikTok"
					rel="noopener noreferrer"
					class="flex cursor-pointer items-center hover:brightness-75"
				>
					<svg class="h-4 w-4" fill="#fff" viewBox="0 0 24 24"
						><path
							d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07"
						/></svg
					>
				</a>
				<!-- svelte-ignore a11y_invalid_attribute -->
				<a href="#" aria-label="Language selector">
					<button
						class="flex cursor-pointer items-center gap-1 rounded-full bg-white px-3 py-1 text-sm text-black"
					>
						🌐 English
					</button>
				</a>
			</div>

			<p class="text-sm text-white/70">© 2025 Work Louder Inc.</p>
		</div>
	</div>
</footer>
