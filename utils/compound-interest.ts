export interface CompoundInterestInfo {
  initialAmount: number;
  monthlyAmount: number;
  interestRatePerYear: number;
  years: number;
}

export default class CompoundInterest {
  public static calculate(
    compoundInterestInfo: CompoundInterestInfo
  ): number[][] {
    const {
      initialAmount,
      monthlyAmount,
      interestRatePerYear,
      years
    } = compoundInterestInfo;

    const result: number[][] = [];
    let currentAmount = initialAmount;
    const interestRatePerMonth = interestRatePerYear / 12;

    for (let year = 1; year <= years; year++) {
      result.push([] as number[]);
      const currentResultIndex = year - 1;

      for (let month = 1; month <= 12; month++) {
        currentAmount = CompoundInterest.round2Decimals(
          (currentAmount + monthlyAmount) * (1 + interestRatePerMonth)
        );
        result[currentResultIndex].push(currentAmount);
      }
    }

    return result;
  }

  private static round2Decimals(num: number): number {
    return Math.round(num * 100) / 100;
  }
}
