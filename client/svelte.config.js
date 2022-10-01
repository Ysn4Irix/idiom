import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			edge: false,
			external: [],
			split: false
		})
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
