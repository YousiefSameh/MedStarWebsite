/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/ui/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#1a7bd1',
        'light-blue-hover': '#135fa1',
        'light-gray': '#757575',
        'dark-gray': '#2c2d3f',
        'dark-gray-hover': '#4c4f6e',
        'bg-white': '#f1f1f1',
        'bg-newsletter': '#edf2ff',
      },
      spacing: {
        'width-section': '1200px',
      },
      transitionDuration: {
        'speed': '300ms',
      },
    },
  },
  plugins: [],
}

