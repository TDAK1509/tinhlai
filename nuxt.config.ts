// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Công cụ tính lãi kép",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Nhập số tiền ban đầu, lãi suất hàng năm, số tiền hằng tháng và số năm để biết số tiền nhận được sau khoảng thời gian đó, và số tiền ở mỗi tháng là bao nhiêu.",
        },
        {
          name: "keywords",
          content:
            "tính, lãi kép, lãi cộng dồn, lãi suất, tiền vay, online, công cụ, bảng tính, tinh, lai kep, lai cong don, lai suat, tien vay, online, cong cu, bang tinh, compound, interest, compound interest, calculate, calculator, tool, investment",
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          hid: "usergram",
          innerHTML: `(function(){var a=window,b=document,c=a.usergram=a.usergram||[],d,e;
        c.l||(c.s=(new Date()).getTime(),c.l=!0,d=b.getElementsByTagName('script')[0],
        e=b.createElement('script'),e.type='text/javascript',e.async=true,
        e.src='//code.usergram.info/js/usergram.js',d.parentNode.insertBefore(e,d))})();`,
          type: "text/javascript",
          charset: "utf-8",
          defer: true,
        },
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
