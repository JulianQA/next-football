/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-color-container": "#161616",
        "dark-borders": "#292929",
        "light-bg-color": "#f8f8f8",
        "light-borders": "#e7e6ea",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      maxHeight: {
        400: "50rem",
      },
    },
  },
  plugins: [],
};
