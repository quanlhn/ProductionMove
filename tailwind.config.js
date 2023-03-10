/** @type {import('tailwindcss').Config} */

module.exports = {
    important: true, // to generate utilities as !important
    content: [
        // add the paths to all of your template files
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                // add new font family
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: 'Poppins'
            },
            backgroundImage: {
                signIn: "url('../public/images/background-signin.jpg')",
            },
            width: {
                '500': '500px',
                '720': '720px'
            },
            height: {
                '680': '680px',
            }
        },
        screens: {
            'phone': '500px'
        },
        colors: {
            // custom color palette
            primary: '#441151',
            secondary: '#EE85B5',
            violet: '#883677',
            congo: '##FF958C',
            success: '#5FC790',
            warning: '#FFA600',
            danger: '#FF5630',
            dark: '#2E3A44',
            info: '#1CA7EC',
            black: '#2E3A44',
            grey1: '#A0AABF',
            grey2: '#C0C6D4',
            grey3: '#E3E8F1',
            grey4: '#e8e1d1',
            grey5: '#EAEAEA',
            light: '#F9FBFC',
            white: '#FFF',
            color4: '#222831',
            color3: '#393E46',
            color2: '#00ADB5',
            color1: '#EEEEEE',
            custom1: '#8693AB',
            custom2: '#BDD4E7',
            red1: '#f14b2f',
            transparent: 'transparent'
    },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
