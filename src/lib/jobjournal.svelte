<script lang="ts">
	import ProjectTemplate from "./project-template.svelte";
</script>

<ProjectTemplate
	title="job journal"
	screenshot="job-journal.jpg"
	demo="https://jobjournal.corymhayes-017.workers.dev/"
	github="https://github.com/corymhayes/job-journal"
	overview={[
		"Multi-stage pipeline to track applications from submission to offer/rejection",
		"Full-text search and multi-field filtering across every entry field",
		"JWT authentication with Neon Auth, role-based access",
		"Responsive dashboard built with TanStack Table, Query, and Router",
		"Server-rendered with Hone (Go) + Drizzle ORM on Cloudflare Workers"
	]}
	{stack}
/>

{#snippet stack()}
	<div class="grid grid-cols-2 gap-y-2">
		<div>
			<span class="font-bold">Frontend</span>
			<ul>
				<li>React 19 & Vite</li>
				<li>shadcn/ui</li>
				<li>Tailwind</li>
				<li>TanStack Form</li>
				<li>TanStack Query</li>
				<li>TanStack Router</li>
				<li>TanStack Table</li>
				<li>Zod</li>
			</ul>
		</div>

		<div>
			<span class="font-bold">Backend</span>
			<ul>
				<li>Hone</li>
				<li>Drizzle ORM</li>
				<li>Postgres</li>
				<li>Zod</li>
				<li>Jose</li>
			</ul>
		</div>

		<div>
			<span class="font-bold">Services</span>
			<ul>
				<li>Cloudflare Workers</li>
				<li>Hyperdrive</li>
				<li>Neon</li>
				<li>Neon Auth</li>
			</ul>
		</div>
	</div>
{/snippet}

<!-- overview="Full-Stack application that can track, organize, and manage job applications through every stage of the hiring pipeline—all in one searchable, filterable dashboard." -->

<style>
	ul {
		list-style-type: "-";
		margin-left: 10px;
	}

	li {
		padding-left: 5px;
	}
</style>
