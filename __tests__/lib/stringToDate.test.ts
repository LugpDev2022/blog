import { expect, describe, it } from "vitest";
import { stringToDate } from "../../src/lib/stringToDate";

describe("stringToDate", () => {
  it("should convert a valid date string to a Date object", () => {
    const date = stringToDate("01/10/2023");
    expect(date).toEqual(new Date(2023, 9, 1));
  });

  it("should throw an error for an invalid date format", () => {
    expect(() => stringToDate("2023-10-01")).toThrow("Invalid date format");
  });

  it("should throw an error for an invalid date", () => {
    expect(() => stringToDate("32/10/2023")).toThrow("Invalid date");
  });

  it("should throw an error for a non-numeric date", () => {
    expect(() => stringToDate("aa/bb/cccc")).toThrow("Invalid date format");
  });
});
