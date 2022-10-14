/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			green: {
				DEFAULT: '#42B883',
				'50': '#C7EBDB',
				'100': '#B8E5D1',
				'200': '#9ADBBE',
				'300': '#7CD0AA',
				'400': '#5EC597',
				'500': '#42B883',
				'600': '#338F66',
				'700': '#246548',
				'800': '#163C2B',
				'900': '#07130D'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#42B883'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#42B883'
        }
      }
    ]
  }
}
