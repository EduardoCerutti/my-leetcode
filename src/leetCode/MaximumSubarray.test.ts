import { maximumSubarray } from "./MaximumSubarray"

test("It should return 6 from array -2, 1, -3, 4, -1, 2, 1, -5, 4", () => {
  expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})
