const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./**/*.html', './**/*.jsx', './**/*.tsx'],
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
                    600: '#E67F08',
                    700: '#B56406',
                    800: '#844904',
                    900: '#522D03',
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
