export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    vn: {
      meta: {
        title: "Công cụ tính lãi kép",
        description:
          "Nhập số tiền ban đầu, lãi suất hàng năm, số tiền hằng tháng và số năm để biết số tiền nhận được sau khoảng thời gian đó, và số tiền ở mỗi tháng là bao nhiêu.",
      },
      headerTitle: "Công cụ tính tiền khi đầu tư với lãi kép",
      formInitialAmount: "Số tiền ban đầu",
      formMonthlyAmount: "Số tiền hàng tháng",
      formInterestRate: "Lãi suất năm (đơn vị %)",
      formYears: "Số năm đầu tư",
      formNumberOnly: "Vui lòng chỉ điền số",
      formCalculate: "Tính lãi",
      resultTable: "BẢNG KẾT QUẢ:",
      year: "Năm",
      month: "Tháng",
      amount: "Số tiền",
      urlCopiedToClipboard: "Liên kết đã được sao chép để chia sẻ",
    },
    en: {
      meta: {
        title: "Compound interest calculator",
        description:
          "Enter interest rate, monthly invest, how many years to know how much you get by months and years.",
      },
      headerTitle: "Compound interest calculator",
      formInitialAmount: "Initial amount",
      formMonthlyAmount: "Monthly amount",
      formInterestRate: "Yearly interest rate (in %)",
      formYears: "Number of years to invest",
      formNumberOnly: "Only numbers are allowed",
      formCalculate: "Calculate",
      resultTable: "RESULT TABLE:",
      year: "Year",
      month: "Month",
      amount: "Amount",
      urlCopiedToClipboard: "URL is copied to clipboard",
    },
  },
}));
