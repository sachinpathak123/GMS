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
        "29xl": "48px",
        "4xl": "23px",
        "5xl": "24px",
        "17xl": "36px",
        inherit: "inherit",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        "source-sans-pro": "'Source Sans Pro'",
        "red-hat-display": "'Red Hat Display'",
        manrope: "Manrope",
      },
      colors: {
        'custom-purple': '#6020BD',
        'light-pUrple':'#8000FF',
        'berserk':'#F4E4FF',
        'leam-purple':'#8000FF',
        'gm-purple':'rgba(185,167,255,0.45)',
        blueviolet: "#8d17e9",
        thistle: "rgba(236, 211, 255, 0.93)",
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
        "3xs": "10px",
      },
      boxShadow: {
        '3xl': '0px 0px 60px -3px rgba(0,0,0, 0.9)',
      },
      spacing: {},
     

    },
  },
  plugins: [],
}
export default config
