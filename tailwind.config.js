module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'rockstar-yellow': 'var(--rockstar-yellow)',
        'rockstar-grey': 'var(--rockstar-grey)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
      },
      boxShadow: {
        'outline-yellow': '0 0 0 2px var(--rockstar-yellow)',
        'outline-grey': '0 0 0 2px var(--rockstar-grey)',
      },
      screens: {
        'desktop': '900px',
        'tablet': '600px',
        'mobile': '480px',
        'xs': '320px',
      },
      width: {
        '49/100': '49%',
      }
    },
  },
  variants: {
    extend: {
      width: ['last'],
    },
  },
  plugins: [],
}
