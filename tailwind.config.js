/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      neutral: {
        white: 'rgb(255, 255, 255)',
        light: 'rgb(247, 248, 253)',
        silver: 'rgb(242, 244, 255)',
        pinky: 'rgb(245,243,255)',
        grey: 'rgb(100, 113, 150)',
        slate: 'rgb(100,116,139)',
      },
      blue: {
        DEFAULT: 'rgb(70, 97, 230)',
        indigo: 'rgb(129,140,248)',
        midnight: 'rgb(58, 67, 116)',
        dark: 'rgb(55, 63, 104)',
        light: 'rgb(98, 188, 250)',
        periwinkle: 'rgb(199,210,254)',
      },
      purple: {
        DEFAULT: 'rgb(173, 31, 234)',
        light: 'rgb(217,70,239)',
      },
      red: {
        DEFAULT: 'rgb(220,38,38)',
        light: 'rgb(251,113,133)',
      },
      orange: 'rgb(244, 159, 133)',
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        mobile: "url('/src/assets/mobile/background-header.png')",
        tablet: "url('/src/assets/tablet/background-header.png')",
        desktop: "url('/src/assets/desktop/background-header.png')",
      },
      screens: {
        lg: '1222px',
      },
    },
  },
  plugins: [],
};
