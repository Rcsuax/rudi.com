/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // h1
        "h1-sm": ["28px", "38px"],
        "h1-md": ["32px", "42px"],
        "h1-lg": ["40px", "50px"],
        // h2
        "h2-sm": ["25px", "35px"],
        "h2-md": ["35px", "45px"],
        "h2-lg": ["35px", "45px"],
        // h3
        "h3-sm": ["22px", "34px"],
        "h3-md": ["26px", "36px"],
        "h3-lg": ["32px", "42px"],
        // h4
        "h4-sm": ["20px", "30px"],
        "h4-md": ["24px", "34px"],
        "h4-lg": ["28px", "38px"],
        // h5
        "h5-sm": ["18px", "28px"],
        "h5-md": ["22px", "32px"],
        "h5-lg": ["24px", "34px"],
        // h6
        "h6-sm": ["14px", "26px"],
        "h6-md": ["18px", "28px"],
        "h6-lg": ["20px", "30px"],
        // p
        "p-sm": ["16px", "26px"],
        "p-md": ["18px", "28px"],
        "p-lg": ["18px", "28px"],
      }
    },
  },
  plugins: [],
};