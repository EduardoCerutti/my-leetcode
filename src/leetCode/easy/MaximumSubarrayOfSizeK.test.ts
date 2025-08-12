import { maximumSubarrayOfSizeK } from "./MaximumSubarrayOfSizeK"

test("it should return 9 from array 2, 1, 5, 1, 3, 2", () => {
  expect(maximumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3)).toBe(9)
})
