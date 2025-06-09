import { sortedSummedNumbers } from "./SortedSummedNumbers"

describe("SortedSummedNumbers", () => {
  test("It should return true because 8 is a possible sum inside 1, 2, 4, 4", () => {
    expect(sortedSummedNumbers([1, 2, 4, 4], 8)).toBe(true)
  })

  test("It should return false because 15 isn't a possible sum inside 1, 4, 5, 8", () => {
    expect(sortedSummedNumbers([1, 4, 5, 8], 15)).toBe(false)
  })
})
