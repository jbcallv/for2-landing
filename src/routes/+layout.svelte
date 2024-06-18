<script>
	import '../app.css';

	let active = 'home';
</script>

<div class="flex flex-col h-dvh">
	<div class="flex">
		<button class="px-10 py-6" on:click|preventDefault={() => (active = 'home')}>
			<p class={active === 'home' ? 'text-[#FFFAFA]' : 'text-[#BBBABF]'}>for two.</p>
		</button>

		<button class="text-[#BBBABF] px-10 py-6" on:click|preventDefault={() => (active = 'features')}>
			<p class={active === 'features' ? 'text-[#FFFAFA]' : 'text-[#BBBABF]'}>features</p>
		</button>

		<button class="text-[#BBBABF] px-10 py-6" on:click|preventDefault={() => (active = 'about')}>
			<p class={active === 'about' ? 'text-[#FFFAFA]' : 'text-[#BBBABF]'}>about</p>
		</button>
	</div>
	<slot />
</div>
