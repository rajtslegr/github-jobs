module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gh: {
          darkBlue: '#13132D',
          violet: '#7A1FDF',
          brightBlue: '#404DEF',
          softBlue: '#707AFD',
          cyan: '#3CD3F4',
          magenta: '#DC4BDF',
          red: '#f04C6F',
          gray: '#202434',
        },
      },
      fontFamily: {
        mont: ['Montserrat'],
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'], translate: ['motion-safe'] },
  },
  plugins: [],
};
