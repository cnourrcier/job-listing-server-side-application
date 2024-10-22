import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                "black": "#060606"
            },
            fontFamily: {
                "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                "2xs": ".625rem" // 10px
            }
        },
    },
    plugins: [],
};