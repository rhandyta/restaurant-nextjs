/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: "0px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
        extend: {},
    },

    plugins: [require("daisyui")],
};
