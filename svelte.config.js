/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */

import adapter from "@sveltejs/adapter-auto";

const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
