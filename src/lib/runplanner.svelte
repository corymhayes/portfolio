<script lang="ts">
	import ProjectTemplate from "./project-template.svelte";
</script>

<ProjectTemplate
	title="run planner"
	screenshot="running-planner.jpg"
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
	<div class="grid grid-cols-2">
		<div>
			<span class="font-bold">Frontend</span>
			<ul>
				<li>Svelte</li>
				<li>Tailwind</li>
				<li>shadcn-svelte</li>
			</ul>
		</div>

		<div>
			<span class="font-bold">Backend</span>
			<ul>
				<li>Dexie.js</li>
			</ul>
		</div>
	</div>
{/snippet}

<style>
	ul {
		list-style-type: "-";
		margin-left: 10px;
	}

	li {
		padding-left: 5px;
	}
</style>
