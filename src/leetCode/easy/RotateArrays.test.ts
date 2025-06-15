import { rotateLeft } from "./RotateArrays"

test("It should rotate the array to the left 3 times", () => {
  expect(rotateLeft([1, 2, 3, 4, 5], 3)).toEqual([4, 5, 1, 2, 3])
})
