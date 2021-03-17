const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
    darkMode: false,
    theme: {
        extend: {
            margin: {
                '-4': '-1rem',
            },
            fontFamily: {
                sans: ['Catamaran', 'sans-serif'],
            },
            colors: {
                gray: colors.trueGray,
                primary: {
                    DEFAULT: '#F89829',
                    50: '#FEEEDB',
                    100: '#FDE4C7',
                    200: '#FCD1A0',
                    300: '#FBBE78',
                    400: '#F9AB51',
                    500: '#F89829',
                },
            },
        },
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
