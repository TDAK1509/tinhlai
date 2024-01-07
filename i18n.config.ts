export default defineI18nConfig(() => ({
  legacy: false,
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
      year: "Năm",
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
      year: "Year",
    },
  },
}));
