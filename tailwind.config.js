const { keyframes } = require('@emotion/react');
const { Hidden } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'box':'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      },
      fontSize: {
        'header': '8px'
      },
      fontFamily: {
        'dashboard': 'Roboto, sans-serif',
      },
      animation: {
        'open': 'open 0.4s 1 linear',
        'close': 'close 0.4s 1 linear',
        'viewmore':'viewmore 5s ease-in-out forward'
      },
      keyframes: {
        open: {
          '0%': {
            'width': '30%'
          },
          '50%': {
            'width': "70%"
          },
          '100%': {
            'width': '100%',
          }
        },
        close: {
          '0%': {
            'width': '100%'
          },
          '50%': {
            'width': '40%'
          },
          '100%': {
            'width': '0%',
          }
        },
        viewmore:{
            '0%':{
              'height':'0px'
            },
            '100%':{
              'height':'auto'
            }
        }
      },
    },
  },
  plugins: [],
};
