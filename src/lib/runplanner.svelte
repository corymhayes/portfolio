<script lang="ts">
	import ProjectTemplate from "./project-template.svelte";
</script>

<ProjectTemplate
	title="run planner"
	screenshot="/running-planner.jpg"
	demo="https://running-planner.corymhayes.com/"
	github="https://github.com/corymhayes/running-planner"
	overview={[
		"Define custom workout types (easy run, intervals, tempo, rest, etc.)",
		"Build multi-week training plans with flexible scheduling",
		"Offline-capable with local-first IndexedDB storage",
		"Clean, distraction-free UI for quick daily use"
	]}
	{stack}
/>

{#snippet stack()}
	<div class="grid grid-cols-2 gap-y-5 gap-x-5">
		<div>
			<span class="font-bold -ml-2">Frontend</span>
			<ul class="list-['-'] space-y-1">
				<li class="pl-1">Svelte</li>
				<li class="pl-1">Tailwind</li>
				<li class="pl-1">shadcn-svelte</li>
			</ul>
		</div>

		<div>
			<span class="font-bold -ml-2">Backend</span>
			<ul class="list-['-'] space-y-1">
				<li class="pl-1">Dexie.js</li>
			</ul>
		</div>
	</div>
{/snippet}
