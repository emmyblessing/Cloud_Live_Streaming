/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
      'RoundWebCam': "url('./assets/img/RoundWebCam.png')"
    })},
  },
  plugins: [],
}
