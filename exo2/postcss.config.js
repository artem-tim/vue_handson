// eslint-disable-next-line no-unused-vars
module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-cssnext': {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-simple-vars': {},
    cssnano: env === 'production' ? {} : false,
  },
});
