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
    daisyui: {
        themes: [
            "light",
            "night",
            // {
            //     mytheme: {
            //         primary: "#e11d48",
            //         secondary: "#fecdd3",
            //         accent: "#6b7280",
            //         neutral: "#1f2937",
            //         "base-100": "#FFF",
            //         info: "#0CA5E9",
            //         success: "#2DD4BF",
            //         warning: "#F4BF50",
            //         error: "#FB7085",
            //     },
            // },
        ],
    },
};
