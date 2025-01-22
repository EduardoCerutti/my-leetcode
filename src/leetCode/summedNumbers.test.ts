import { summedNumbers } from "./summedNumbers"

test("summedNumbers should return true", () => {
  expect(summedNumbers([5, 2, 6, 4], 9)).toBe(true)
})

test("summedNumbers should return false", () => {
  expect(summedNumbers([6, 1, 4, 3], 11)).toBe(false)
})
