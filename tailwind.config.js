/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{ts,tsx}', // Include App.tsx at the root
    './src/**/*.{ts,tsx}', // Include everything inside src
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

