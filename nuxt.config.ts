// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "tính, lãi kép, lãi cộng dồn, lãi suất, tiền vay, online, công cụ, bảng tính, tinh, lai kep, lai cong don, lai suat, tien vay, online, cong cu, bang tinh, compound, interest, compound interest, calculate, calculator, tool, investment",
        },
        {
          name: "theme-color",
          content: "#2C5282",
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-9SKRVR51R1",
          async: true,
        },
        {
          src: "js/ga.js",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-snackbar",
    "@vueuse/nuxt",
    "@vite-pwa/nuxt",
    "@nuxt/test-utils/module",
  ],
  pwa: {
    manifest: {
      name: "tinhlai",
      description: "Compound interest calculator",
      short_name: "tinhlai",
      theme_color: "#2C5282",
      icons: [
        {
          src: "/icon.png",
          sizes: "72x72 96x96 128x128 144x144 192x192 256x256 512x512",
        },
        {
          src: "icon.png",
          sizes: "196x196",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },
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
    duration: 3000,
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
