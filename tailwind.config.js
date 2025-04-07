/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}', // Include everything inside src
    './app/**/*.{ts,tsx}', // Include app folder
    './node_modules/nativewind/**/*.ts',
  ],
  presets: [require('nativewind/preset')], // Ensure NativeWind preset is included
  theme: {
    extend: {},
  },
  plugins: [],
}
