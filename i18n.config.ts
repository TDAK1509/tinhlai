export default defineI18nConfig(() => ({
  legacy: false,
  locales: ["en", "vn"],
  defaultLocale: "vn",
  messages: {
    vn: {
      headerTitle: "Công cụ tính tiền khi đầu tư với lãi kép",
    },
    en: {
      headerTitle: "Compound interest calculator",
    },
  },
}));
