import { mergeSortedArrays } from "./mergeSortedArrays"

test("It should merge the arrays and keep it sorted returning [ 1, 3, 5, 6, 7, 8, 9]", () => {
  expect(mergeSortedArrays([1, 5, 8, 9], [3, 6, 7])).toEqual([
    1, 3, 5, 6, 7, 8, 9,
  ])
})

test("It should merge the arrays and keep it sorted returning [2, 4, 5, 6, 7, 8, 9]", () => {
  expect(mergeSortedArrays([2, 6, 8], [4, 5, 7, 9])).toEqual([
    2, 4, 5, 6, 7, 8, 9,
  ])
})
