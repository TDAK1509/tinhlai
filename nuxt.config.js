export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "tinhlai.com",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      {
        name: "description",
        content:
          "Nhập số tiền ban đầu, lãi suất hàng năm, số tiền hằng tháng và số năm để biết số tiền nhận được sau khoảng thời gian đó, và số tiền ở mỗi tháng là bao nhiêu."
      },
      {
        name: "keywords",
        content:
          "tính, lãi kép, lãi cộng dồn, lãi suất, tiền vay, online, công cụ, bảng tính, tinh, lai kep, lai cong don, lai suat, tien vay, online, cong cu, bang tinh"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
