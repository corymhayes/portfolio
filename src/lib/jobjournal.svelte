<script lang="ts">
	import ProjectTemplate from "./project-template.svelte";
</script>

<ProjectTemplate
	title="job journal"
	screenshot="/job-journal.jpg"
	demo="https://jobjournal.corymhayes-017.workers.dev/"
	github="https://github.com/corymhayes/job-journal"
	overview={[
		"Multi-stage pipeline to track applications from submission to offer/rejection",
		"Full-text search and multi-field filtering across every entry field",
		"JWT authentication with Neon Auth, role-based access",
		"Responsive dashboard built with TanStack Table, Query, and Router",
		"Server-rendered with Hono and Drizzle ORM on Cloudflare Workers"
	]}
	{stack}
/>

{#snippet stack()}
	<div class="grid grid-cols-2 gap-y-5 gap-x-5">
		<div>
			<span class="font-bold -ml-2">Frontend</span>
			<ul class="list-['-'] space-y-1">
				<li class="pl-1">React 19 & Vite</li>
				<li class="pl-1">shadcn/ui</li>
				<li class="pl-1">Tailwind</li>
				<li class="pl-1">TanStack Form</li>
				<li class="pl-1">TanStack Query</li>
				<li class="pl-1">TanStack Router</li>
				<li class="pl-1">TanStack Table</li>
				<li class="pl-1">Zod</li>
			</ul>
		</div>

		<div>
			<span class="font-bold -ml-2">Backend</span>
			<ul class="list-['-'] space-y-1">
				<li class="pl-1">Hono</li>
				<li class="pl-1">Drizzle ORM</li>
				<li class="pl-1">Postgres</li>
				<li class="pl-1">Zod</li>
				<li class="pl-1">Jose</li>
			</ul>
		</div>

		<div>
			<span class="font-bold -ml-2">Services</span>
			<ul class="list-['-'] space-y-1">
				<li class="pl-1">Cloudflare Workers</li>
				<li class="pl-1">Hyperdrive</li>
				<li class="pl-1">Neon</li>
				<li class="pl-1">Neon Auth</li>
			</ul>
		</div>
	</div>
{/snippet}
