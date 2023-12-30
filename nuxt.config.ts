// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  i18n: {
    locales: ["en", "vn"],
    defaultLocale: "vn",
    vueI18n: "./i18n.config.ts",
  },
});