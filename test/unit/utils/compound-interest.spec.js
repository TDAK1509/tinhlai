import CompoundInterest from "@/utils/compound-interest";

describe("utils/compound-interest", () => {
  it("given: initialAmount 0, monthlyAmount: 100, interestRate: 10%, years: 2; output correct array of values", () => {
    const compoundInterestInfo = {
      initialAmount: 0,
      monthlyAmount: 100,
      interestRate: 0.1 / 12,
      years: 2,
    };

    const realResult = CompoundInterest.calculate(compoundInterestInfo);
    const expectedResult = calculateCompoundInterest(compoundInterestInfo);

    const finalValueOfRealResult =
      realResult[compoundInterestInfo.years - 1][11];
    const finalValueOfExpectedResult =
      expectedResult[compoundInterestInfo.years - 1][11];

    expect(finalValueOfRealResult).toEqual(finalValueOfExpectedResult);
  });
});

function calculateCompoundInterest(compoundInterestInfo) {
  const {
    initialAmount,
    monthlyAmount,
    interestRate,
    years,
  } = compoundInterestInfo;

  const result = [];
  let currentAmount = initialAmount;

  for (let year = 1; year <= years; year++) {
    result.push([]);
    const currentResultIndex = year - 1;

    for (let month = 1; month <= 12; month++) {
      currentAmount = round2Decimals(
        (currentAmount + monthlyAmount) * (1 + interestRate),
      );
      result[currentResultIndex].push(currentAmount);
    }
  }

  return result;
}

function round2Decimals(num) {
  return Math.round(num * 100) / 100;
}
