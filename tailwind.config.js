// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#D3A95E',
      }
    },
    container: {
      padding: '2rem',
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
