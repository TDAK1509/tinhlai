// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-snackbar",
  ],
  i18n: {
    locales: ["en", "vn"],
    defaultLocale: "vn",
    vueI18n: "./i18n.config.ts",
  },
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  googleFonts: {
    "Open+Sans": {
      wght: "400..700",
      ital: "400..700",
    },
  },
  snackbar: {
    bottom: true,
    center: true,
    duration: 3000,
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
