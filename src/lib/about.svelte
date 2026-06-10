<script lang="ts">
	import { fly } from "svelte/transition";
</script>

<div in:fly={{ y: 20, duration: 300 }}>
	<div class="font-jetbrains flex flex-col md:w-sm gap-2">
		<div class="bg-neutral-950 p-8 text-neutral-50 flex items-center w-fit">
			<h1 class="text-3xl">Hi,<br />I’m <span class="font-bold">Cory Hayes</span></h1>
		</div>
		<div class="px-8 sm:px-4">
			<ul class="flex gap-4 my-4">
				<li class="underline underline-offset-4">
					<a href="/Hayes.Cory.Resume.2026.pdf" download>resume</a>
				</li>
				<li class="underline underline-offset-4">
					<a href="https://github.com/corymhayes">github</a>
				</li>
				<li class="underline underline-offset-4">
					<a href="https://www.linkedin.com/in/corymhayes/">linkedin</a>
				</li>
			</ul>
			<p>
				I'm a developer who enjoys building web applications that are both functional and easy to
				use. I enjoy working across both frontend and backend development, turning a struggle in
				life into a tool that solves the problem. My experience includes building projects with
				modern web technologies such as TypeScript/JavaScript, Svelte, React, Tailwind, and
				SQL-based databases.
			</p>
			<br />
			<p>
				Recently, I’ve been focused on building personal projects that strengthen my skills in
				modern web development, database design, and UI development. I’m currently looking for
				opportunities where I can continue learning, collaborate with other developers, and
				contribute to meaningful software projects.
			</p>
		</div>
	</div>
</div>
