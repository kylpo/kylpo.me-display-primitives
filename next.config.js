const withLinaria = require('next-linaria')

module.exports = withLinaria({
  reactStrictMode: true,
  linaria: {
    sourceMap: process.env.NODE_ENV !== 'production',
    displayName: process.env.NODE_ENV !== 'production',
    atomize: require('@linaria/atomic').atomize,
  },
})
