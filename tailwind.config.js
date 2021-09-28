module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        accent: {
          '100': '#e6c96',
          '400': '#e6cb76'
        },
        // pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['avenir', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        'none': 'none',
        'md': '8px',
        'lg': '24px'
      },
      gridTemplateRows: {
        'landing': 'auto auto 100px'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
