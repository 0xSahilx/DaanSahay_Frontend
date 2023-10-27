const colors = require('tailwindcss/colors'); // Import the colors object from Tailwind CSS

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': 'url(./assets/image/gallery/13344.jpg)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans'], // 'Poppins' is the font name
        'darker-grotesque': ['Darker Grotesque', 'sans'], // 'Darker Grotesque' is the font name
      },
      colors: {
        'cyan': colors.cyan,
        'teal': colors.teal,
      },
    },
  },
  plugins: [],
};
