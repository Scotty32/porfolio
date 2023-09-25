/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./renderer/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'caveat': ['caveat', 'sans-serif']
            },
            colors: {
                'secondary': '#153E6A'
            }
        },
    },
    plugins: [require("daisyui")],
}