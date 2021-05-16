module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#200c35',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
    extend: {
      backgroundImage: {
      'pear': "url('/src/images/cool-background.png')",
      'photo': "url('/src/images/IMG-2636.JPG')",
     }},
     backgroundPosition: {
      top: 'top',
      'top-1': ' 50% 20%',
     'top-4': 'center top 1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
