module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: 'minmax(100px, 175px) 1fr',
      },
      minWidth: {
        small: '175px',
        big: '350px',
      },
    },
  },
  variants: {
    fontStyle: ['responsive', 'hover', 'active', 'focus'],
  },
  plugins: [],
}
