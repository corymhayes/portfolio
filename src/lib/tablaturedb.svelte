<script lang="ts">
	import ProjectTemplate from "./project-template.svelte";
</script>

<ProjectTemplate
	title="tablaturedb"
	screenshot="tablaturedb.jpg"
	demo="https://tablaturedb.com"
	github="https://github.com/corymhayes/tablaturedb"
	overview={[
		"Local-first CRUD with full offline support and instant load times",
		"Search, filter, and organize guitar tabs by custom categories",
		"Clean minimal UI built with Svelte, Tailwind, and shadcn-svelte",
		"All data persisted client-side via IndexedDB (Dexie.js)"
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
