export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Công cụ tính lãi kép",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Nhập số tiền ban đầu, lãi suất hàng năm, số tiền hằng tháng và số năm để biết số tiền nhận được sau khoảng thời gian đó, và số tiền ở mỗi tháng là bao nhiêu."
      },
      {
        name: "keywords",
        content:
          "tính, lãi kép, lãi cộng dồn, lãi suất, tiền vay, online, công cụ, bảng tính, tinh, lai kep, lai cong don, lai suat, tien vay, online, cong cu, bang tinh, compound, interest, compound interest, calculate, calculator, tool, investment"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
        defer: true
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-9SKRVR51R1",
        async: true
      },
      {
        src: "js/ga.js"
      }
    ]
  },

  pwa: {
    manifest: {
      theme_color: "#2C5282"
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "./plugins/usergram", mode: "client" }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-i18n"
  ],

  i18n: {
    locales: ["en", "vn"],
    defaultLocale: "vn",
    vueI18n: {
      fallbackLocale: "vn",
      messages: {
        vn: {
          headerTitle: "Công cụ tính tiền khi đầu tư với lãi kép",
          formInitialAmount: "Số tiền ban đầu",
          formMonthlyAmount: "Số tiền hàng tháng",
          formInterestRate: "Lãi suất năm (đơn vị %)",
          formYears: "Số năm đầu tư",
          formNumberOnly: "Vui lòng chỉ điền số",
          formCalculate: "Tính lãi",
          resultTable: "BẢNG KẾT QUẢ:",
          year: "Năm"
        },
        en: {
          headerTitle: "Compound interest calculator",
          formInitialAmount: "Initial amount",
          formMonthlyAmount: "Monthly amount",
          formInterestRate: "Yearly interest rate (in %)",
          formYears: "Number of years to invest",
          formNumberOnly: "Only numbers are allowed",
          formCalculate: "Calculate",
          resultTable: "RESULT TABLE:",
          year: "Year"
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  fontawesome: {
    icons: {
      solid: ["faChevronUp"]
    }
  }
};
