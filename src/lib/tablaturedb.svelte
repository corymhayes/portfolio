<script lang="ts">
	import ProjectTemplate from "./project-template.svelte";
</script>

<ProjectTemplate
	title="tablaturedb"
	screenshot="/tablaturedb.jpg"
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
