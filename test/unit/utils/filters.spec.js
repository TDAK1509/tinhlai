import * as filters from "@/utils/filters";

describe("utils/filters", () => {
  describe("addCommaSeparatorsToNumber()", () => {
    it("inputs 50000, outputs 50,000", () => {
      expect(filters.addCommaSeparatorsToNumber(50000)).toBe("50,000");
    });

    it("inputs 50000000, outputs 50,000,000", () => {
      expect(filters.addCommaSeparatorsToNumber(50000000)).toBe("50,000,000");
    });

    it("inputs 1234.12, outputs 1,234.12", () => {
      expect(filters.addCommaSeparatorsToNumber(1234.12)).toBe("1,234.12");
    });
  });
});
