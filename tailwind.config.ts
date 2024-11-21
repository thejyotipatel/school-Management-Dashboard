import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueDark: '#667BC6',
        yellowDark: '#FFD966',
        pinkDark: '#FFB4C2',

        blueLight: '#D1D9F4',
        yellowLight: '#FEFFE7',
        pinkLight: '#FFD6E2',
      },
    },
  },
  plugins: [],
} satisfies Config
