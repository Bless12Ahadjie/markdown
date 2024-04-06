import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'black-600':'#151619',
      'black-500':'#1D1F22',
      'black-400':'#2B2D31',
      'black-300':'#35393F',
      'black-200':'#5A6069',
      'black-100':'#7C8187',
      'gray-600':'#C1C4CB',
      'gray-500':'#E4E4E4',
      'gray-200':'#F5F5F5',
      'white':'#ffffff',
      'orange-600':'#E46643',
      'orange-400':'#F39765'
    }
    ,
    fontSize: {
      'xxl':'32px',
      'xl':'28px',
      'l':'24px',
      'md':'20px',
      'sm':'16px',
      'xsm':'14px',
      'xxsm':'13px'
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      width:{
        '0.1':'1.5px',
        '72': '72px',
        '30': '30px',
        '13': '13.71px',
        '152': '156px',
        '16': '16px',
        '18': '18px',
      },
      height: {
        '72': '72px',
        '18': '18px',
        '16': '16px',
        '45': '45px',
        '40': '40px',
        '20': '20px'

      }
      ,
      gap:{
        '25':'25px',
      }
 

    },
  
  },
  plugins: [],
};
export default config;
