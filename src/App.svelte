<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import About from "./lib/about.svelte";
	import Jobjournal from "./lib/jobjournal.svelte";
	import Runplanner from "./lib/runplanner.svelte";
	import Tablaturedb from "./lib/tablaturedb.svelte";

	let navigation = $state("about");
</script>

<div class="w-full flex justify-center font-jetbrains">
	<div class="md:w-sm mb-10 bg-neutral-50">
		<div class="flex mb-10">
			<div
				class="font-bold text-lg bg-neutral-950 p-8 text-neutral-50 flex items-center justify-center"
			>
				CORY<br />
				HAYES
			</div>
			<nav class="block w-full">
				<ul class="flex items-center justify-evenly h-full">
					<li>
						<a href="#about" onclick={() => (navigation = "about")}>about</a>
					</li>
					<li>
						<a href="#projects" onclick={() => (navigation = "projects")}>projects</a>
					</li>
					<li>
						<a href="mailto:corymhayes@gmail.com">contact</a>
					</li>
				</ul>
			</nav>
		</div>

		{#if navigation === "about"}
			<div in:fly={{ y: 20, duration: 300 }}>
				<About />
			</div>
		{/if}

		{#if navigation === "projects"}
			<div in:fly={{ y: 20, duration: 300 }}>
				<div class="flex flex-col gap-6">
					<Jobjournal />
					<Tablaturedb />
					<Runplanner />
				</div>
			</div>
		{/if}
	</div>
</div>
