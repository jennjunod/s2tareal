/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundSize: {
			'gradient-dashed': '20px 2px, 100% 2px',
		},
		extend: {
			boxShadow: {
				'pacamara-shadow': '0px 25px 50px -12px rgba(0, 0, 0, 0.3)',
			},
			fontFamily: {
				'pacamara-inter': ['"Inter"', 'sans-serif'],
				'pacamara-space': ['"Space Grotesk"', 'sans-serif'],
			},
			colors: {
				'pacamara-primary': '#7f2fa3',
				'pacamara-secondary': '#ba2bba',
				'pacamara-accent': '#03b9a8',
				'pacamara-dark': '#000000',
				'pacamara-white': '#f7f5eb'
			  },
			aspectRatio: {
				'9/10': '9 / 16',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
