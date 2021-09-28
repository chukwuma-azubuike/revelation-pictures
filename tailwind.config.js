module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        accent: {
          '100': '#ffdac0',
          '200': '#ff6b00',
          '300': '#ff3c01'
        },
        // pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
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
      },
      screens: {
        'phone': '280px',
        'tablet': '577px'
      },
      transitionProperty: {
        'smooth': '0.3s ease all'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
