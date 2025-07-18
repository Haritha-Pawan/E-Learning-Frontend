/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary:"#ffcf3a",
      secondary:"#0063ff",
    },
    container:{
         center:"true",
         padding:{
                DEAFAULT:"1rem",
                 sm:"2rem",
                 lg:"4rem",
                 xl:"5rem",
                 "2xl":"6rem",
         },
    },
  },
  plugins: [],
}

