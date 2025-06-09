import { summedNumbers } from "./SummedNumbers"

describe("SummedNumbers", () => {
  test("It should return true because 9 is a possible sum inside 5, 2, 6, 4", () => {
    expect(summedNumbers([5, 2, 6, 4], 9)).toBe(true)
  })

  test("It should return false because 11 isn't a possible sum inside 6, 1, 4, 3", () => {
    expect(summedNumbers([6, 1, 4, 3], 11)).toBe(false)
  })
})
