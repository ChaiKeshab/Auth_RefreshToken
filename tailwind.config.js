/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#242526',
        secondary: '#3A3B3C',
        input: '#525354',
        button: "#0084FF",
        hover: "#1195FF",
        hover_gray: "#4B4C4D"
      },
      textColor: {
        primary: '#E4E6EB',
        secondary: '#B0B3B8',
        hover: "#1195FF"
      },
      borderColor: {
        primary: '#2F3031',
        secondary: '#242526',
        hover: "#1195FF"
      },
      gradientColorStops: {
        customBlack: 'rgba(0, 0, 0, 0.8)',
      },
      transitionproperty: {
        height: 'height'
      }
    },
  },
  plugins: [],
}