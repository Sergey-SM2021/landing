/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/Components/**/*.{scss,tsx}"],
    theme: {
        backgroundImage: theme => ({
            'intro': "url(/src/assets/placeholder.png)",
        }),
        colors: {
            "primary": "#34C759",
            "secondary": "#FFF",
            "black": "#1A1A1A",
            "dark-gray": "#252525",
            "light-gray": "#737373",
            "black-transparent":"rgba(5,5,5,0.4)",
            "black-origin":"#000"
        }
    },
    plugins: [],
}