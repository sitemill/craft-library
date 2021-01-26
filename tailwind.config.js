module.exports = {
    purge: false,
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                'sidebar': '275px',
                'dialog': '500px',
            },
            maxWidth: {
                'brand': '230px',
                'action-page-card': '350px'
            },
            colors: {
                primary: '#6816D0',
            }
        },
        container: {
            center: true,
            maxWidth: '100%',
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
