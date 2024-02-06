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
        "5Xl": "24px",
        "6xl":"48px",
        "17xl": "36px",
        "18xl":"44px",
        inherit: "inherit",
      },
      fontFamily: {
        "source-sans-pro": "'Source Sans Pro'",
        "inter": ['Inter','sans-serif'],
        "font-awesome-5-free": "'Font Awesome 5 Free'",
      },
      colors: {
        'custom-purple': '#6020BD',
        'light-pUrple':'#8000FF',
        'berserk':'#F4E4FF',
        'leam-purple':'#8000FF',
        'gm-purple':'rgba(185,167,255,0.65)',
        'gmm-purple':'rgba(185,167,255,0.47)',
        'gmd-purple':'rgba(185,167,255,0.93)',
        blueviolet: "#8d17e9",
        thistle: "rgba(236, 211, 255, 0.93)",
        gray: "#040404",
        "lightskyblue": "rgba(154, 190, 254, 0.5)",
        "lp-purple":'#E0D8FF',
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
      backgroundColor: {
        'purPle': '#F6F1FF',
        'lightGrey':'#F7F7F7',
        'leam-purp':'#F3EFFE',
        'terror':'rgb(248, 249, 255)',
        'metrics':'rgba(185, 167, 255,0.12)',
      },
     

    },
  },
  plugins: [],
}
export default config
