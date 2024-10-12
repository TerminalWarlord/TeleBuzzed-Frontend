import daisyui from "daisyui"
import typography from '@tailwindcss/typography';


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    typography,
  ],
  daisyui: {
    themes: ["light", "dark"], // Add the themes you want to use
  },
}