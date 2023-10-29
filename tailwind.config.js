// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans],
        montserrat: ['Montserrat'],
      // sans: ['Open Sans', '-apple-system', 'sans-serif'],
      // serif: ['Merriweather', '-apple-system', 'serif'],

      },
      colors: {
        primary: colors.indigo,
        gray: colors.gray,
        dark: '#22272e',
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
        // primary: colors.pink,
        // gray: colors.gray,
      },
      animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "100%",
					},
				},
			},
      typography: ({ theme }) => ({
        extend: {
          fontSize: {
            xs: '.75rem', // 12px
            sm: '.875rem', // 14px
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem', // 20px
            '2xl': '1.5rem', // 24px
            '3xl': '1.875rem', // 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem', // 48px
            '6xl': '4rem', // 64px
          },
        },
        DEFAULT: {
          css: {
            html: {
              'scroll-behavior': 'smooth',
            },
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.pink.500'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require("flowbite/plugin")],
}
