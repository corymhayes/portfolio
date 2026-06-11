<script lang="ts">
	import { page } from "$app/state";
	import "../app.css";
	let { children } = $props();
</script>

<div class="w-full flex justify-center font-jetbrains">
	<div class="md:w-sm mb-10">
		<div class="flex mb-10">
			<a
				href="/"
				class="font-bold text-lg p-8 bg-neutral-950 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-950 flex items-center justify-center"
			>
				CORY<br />
				HAYES
			</a>
			<nav class="block w-full">
				<ul class="flex items-center justify-evenly h-full">
					<li>
						<a
							href="projects"
							class={page.route.id === "/projects"
								? "bg-neutral-950 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-950 p-2"
								: "dark:text-neutral-100 hover:bg-neutral-950 hover:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950 p-2"}
							>projects</a
						>
					</li>
					<li>
						<a
							href="mailto:corymhayes@gmail.com"
							class="p-2 dark:text-neutral-100 active:bg-neutral-950 active:text-neutral-100 dark:active:bg-neutral-100 dark:active:text-neutral-950 hover:bg-neutral-950 hover:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950"
							>contact</a
						>
					</li>
				</ul>
			</nav>
		</div>

		{@render children()}
	</div>
</div>
