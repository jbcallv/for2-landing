<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div class="flex h-full justify-center items-center space-x-60">
	<div class="flex justify-center items-center h-[450px] w-[450px] rounded-[20px] bg-[#211F29]">
		<div class="flex -space-x-20 space-y-16">
			<div class="h-[150px] w-[150px] rounded-full bg-[#E26D5C] z-0"></div>
			<div class="h-[150px] w-[150px] rounded-full bg-[#768844] z-10"></div>
		</div>
	</div>

	<div class="max-w-[350px] space-y-12">
		<div class="leading-[80px]">
			<p class="text-[80px] text-[#FFFAFA] text-center">for two.</p>
			<p class="text-[80px] text-[#bbbabfc5] text-center">coming soon.</p>
		</div>

		<form method="POST" class="space-y-4">
			<input
				name="email"
				class="bg-[#211F29] rounded-[20px] h-[45px] pl-6 w-full outline-none text-[#FFFAFA]"
				placeholder="email"
			/>
			<button type="submit" class="bg-[#FABC2A] rounded-[20px] h-[45px] w-full">
				receive news
			</button>

			{#if form}
				<p class="absolute text-center text-[#bbbabfc5] w-[350px]">{form?.message}</p>
			{/if}
		</form>
	</div>
</div>
