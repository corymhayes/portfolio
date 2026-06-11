<script lang="ts">
	let { title, screenshot, demo, github, overview, stack } = $props();
</script>

<div class="flex items-center md:w-sm">
	<div class="flex flex-col gap-8">
		<div class="flex items-end justify-between mr-4">
			<span
				class="font-bold text-lg bg-neutral-950 w-full text-neutral-50 px-2 h-8 flex gap-2 items-center mr-4 pl-8"
			>
				{title.toUpperCase()}
			</span>
			<div class="flex gap-4">
				<a href={demo} target="_blank" class="-mb-px underline underline-offset-4">demo</a>
				<a href={github} target="_blank" class="-mb-px underline underline-offset-4">github</a>
			</div>
		</div>

		<img src={screenshot} alt="screenshot of {title}" class="mx-4 sm:mx-0" />

		<div class="px-4 sm:px-0 space-y-4">
			<div class="space-y-2">
				<span class="bg-neutral-950 w-fit text-neutral-50 px-4 py-1 block">overview</span>
				<ul class="space-y-3 border-4 -mt-2 p-6 list-['-']">
					{#each overview as item}
						<li class="pl-1">{item}</li>
					{/each}
				</ul>
			</div>

			<div class="space-y-2">
				<span class="bg-neutral-950 w-fit text-neutral-50 px-4 py-1 block">stack</span>
				<div class="space-y-3 border-4 -mt-2 p-6">
					{@render stack()}
				</div>
			</div>
		</div>
	</div>
</div>
