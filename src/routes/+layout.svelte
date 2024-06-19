<script>
	import '../app.css';

	let active = 'home';
</script>

<div class="flex flex-col h-dvh">
	<div class="flex">
		<a
			href="/"
			class="{active === 'home' ? 'text-[#FFFAFA]' : 'text-[#BBBABF]'} px-10 py-6"
			on:click={() => (active = 'home')}
		>
			for two.
		</a>

		<a
			href="/about"
			class="{active === 'about' ? 'text-[#FFFAFA]' : 'text-[#BBBABF]'} px-10 py-6"
			on:click={() => (active = 'about')}
		>
			about
		</a>

		<a
			href="/contact"
			class="{active === 'contact' ? 'text-[#FFFAFA]' : 'text-[#BBBABF]'} px-10 py-6"
			on:click={() => (active = 'contact')}
		>
			contact
		</a>
	</div>
	<slot />
</div>
