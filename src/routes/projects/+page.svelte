<script lang="ts">
	import Jobjournal from "$lib/jobjournal.svelte";
	import Runplanner from "$lib/runplanner.svelte";
	import Tablaturedb from "$lib/tablaturedb.svelte";
	import { fly } from "svelte/transition";
</script>

<div in:fly={{ y: 20, duration: 300 }}>
	<div class="flex flex-col gap-6">
		<Jobjournal />
		<Tablaturedb />
		<Runplanner />
	</div>
</div>
