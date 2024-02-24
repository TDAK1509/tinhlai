import { test, expect } from "vitest";
import CompoundInterest from "@/models/compound-interest";

test("given: initialAmount 0, monthlyAmount: 100, interestRate: 10%, years: 2; output correct last value", () => {
  const initialAmount = 0;
  const monthlyAmount = 100;
  const interestRatePerYear = 0.1;
  const years = 5;

  const realResult = CompoundInterest.calculate(
    initialAmount,
    monthlyAmount,
    interestRatePerYear,
    years
  );

  const finalValueOfRealResult = realResult[years - 1][11];

  // Get final value from other source of calculating compound interest
  expect(Math.floor(finalValueOfRealResult)).toEqual(7808);
});
