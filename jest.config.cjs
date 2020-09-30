module.exports = {
    "verbose": true,
    "testRegex": "((\\.|/*.)(spec))\\.js?$",
    "transformIgnorePatterns": [
      "./node_modules/(?!lodash-es)"
    ],
    "moduleNameMapper": {
      "^lodash-es$": "lodash"
  }
}