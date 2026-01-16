/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-dark': '#2A324B', // Azul oscuro (Navbar/Hero)
				'brand-green': '#6EE7B7', // Verde menta (Botones)
				'brand-gray': '#F3F4F6',  // Fondos claros
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'], // Tipografía limpia industrial
			}
		},
	},
	plugins: [],
}