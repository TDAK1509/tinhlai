module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
    "plugin:nuxt/recommended"
  ],
  // add your custom rules here
  rules: {
    semi: [2, "always"],
    "comma-dangle": ["error", "never"]
  },
  ignorePatterns: "js/ga.js"
};
