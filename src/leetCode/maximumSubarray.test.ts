import { maximumSubarray } from "./maximumSubarray"

test("maximumSubarray should return 25", () => {
  expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})
