const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
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
                    // 600: '#F78A0B',
                    // 700: '#DD7A07',
                    // 800: '#BF6906',
                    // 900: '#A15905',
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
