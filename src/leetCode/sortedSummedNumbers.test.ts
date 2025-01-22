import { sortedSummedNumbers } from "./sortedSummedNumbers"

test("sortedSummedNumbers should return true", () => {
  expect(sortedSummedNumbers([1, 2, 4, 4], 8)).toBe(true)
})

test("sortedSummedNumbers should return false", () => {
  expect(sortedSummedNumbers([1, 4, 5, 8], 15)).toBe(false)
})
