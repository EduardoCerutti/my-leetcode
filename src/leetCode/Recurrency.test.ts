import { recurrency } from "./Recurrency"

test("It should return 4 from array 8, 4, 1, 2, 4, 5", () => {
  expect(recurrency([8, 4, 1, 2, 4, 5])).toBe(4)
})
