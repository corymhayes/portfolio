<script lang="ts">
	import { page } from "$app/state";
	import "../app.css";
	let { children } = $props();
</script>

<div class="w-full flex justify-center font-jetbrains">
	<div class="md:w-sm mb-10 bg-neutral-50">
		<div class="flex mb-10">
			<a
				href="/"
				class="font-bold text-lg bg-neutral-950 p-8 text-neutral-50 flex items-center justify-center"
			>
				CORY<br />
				HAYES
			</a>
			<nav class="block w-full">
				<ul class="flex items-center justify-evenly h-full">
					<!-- <li>
						<a
							href="/"
							class={page.route.id === "/" ? "bg-neutral-950 text-neutral-50 p-2" : "bg-neutral-50"}
						>
							about
						</a>
					</li> -->
					<li>
						<a
							href="projects"
							class={page.route.id === "/projects"
								? "bg-neutral-950 text-neutral-50 p-2"
								: "bg-neutral-50"}>projects</a
						>
					</li>
					<li>
						<a
							href="mailto:corymhayes@gmail.com"
							class="p-2 active:bg-neutral-950 active:text-neutral-50 hover:bg-neutral-950 hover:text-neutral-50"
							>contact</a
						>
					</li>
				</ul>
			</nav>
		</div>

		{@render children()}
	</div>
</div>
