import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nukaizen-purple': '#c05aff',
        'nukaizen-blue': '#4d73f8',
        'nukaizen-purple-dark': '#950aff',
        'nukaizen-bg': '#dcf1fd',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      backdropBlur: {
        '32': '32px',
      },
    },
  },
  plugins: [],
}

export default config
