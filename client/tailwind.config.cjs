/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				fresca: ['Fresca', 'sans-serif']
			}
		},
		screens: {
			sm: '640px',
			md: '768px'
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'night']
	}
}
