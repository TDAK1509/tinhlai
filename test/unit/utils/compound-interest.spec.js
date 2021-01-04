import CompoundInterest from "@/utils/compound-interest";

describe("utils/compound-interest", () => {
  it("given: initialAmount 0, monthlyAmount: 100, interestRate: 10%, years: 2; output correct last value", () => {
    const compoundInterestInfo = {
      initialAmount: 0,
      monthlyAmount: 100,
      interestRate: 0.1 / 12,
      years: 5
    };

    const realResult = CompoundInterest.calculate(compoundInterestInfo);

    const finalValueOfRealResult =
      realResult[compoundInterestInfo.years - 1][11];

    // Get final value from other source of calculating compound interest
    expect(Math.floor(finalValueOfRealResult)).toEqual(7808);
  });
});
