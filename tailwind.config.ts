import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.69rem', 
        'xl':  '1.25rem',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-purple': '#6020BD',
        'light-pUrple':'#8000FF',
        'berserk':'#F4E4FF',
        'leam-purple':'#8000FF',
        'gm-purple':'rgba(185,167,255,0.45)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '96': '24rem',
        '150': '40rem',
      },
      borderRadius: {
        'lg': '2rem',
      },
      boxShadow: {
        '3xl': '0px 0px 60px -3px rgba(0,0,0, 0.9)',
      }

    },
  },
  plugins: [],
}
export default config
