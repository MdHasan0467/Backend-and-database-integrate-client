/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	themes: [
		{
			mytheme: {
				primary: '#ef1fda',

				secondary: '#50b8c4',

				accent: '#92f48b',

				neutral: '#17151E',

				'base-100': '#462654',

				info: '#87A4E8',

				success: '#3DE1BD',

				warning: '#F7B764',

				error: '#DF4360',
			},
		},
	],
	plugins: [require('daisyui')],
};
