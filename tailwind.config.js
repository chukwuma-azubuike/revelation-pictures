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
        'tablet': '577px',
        'phonemax': { 'max': '280px' },
        'tabletmax': { 'max': '577px' },
        '2xlmax': { 'max': '1535px' },
        'xlmax': { 'max': '1279px' },
        'lgmax': { 'max': '1023px' },
        'mdmax': { 'max': '767px' },
        'smmax': { 'max': '639px' }
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
