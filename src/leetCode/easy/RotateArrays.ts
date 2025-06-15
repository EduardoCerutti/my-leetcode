// A operation on a circular array shifts each of the array's elements unit to
// the left. The elements that fall off the left end reappear at the right end.
// Given an integer , rotate the array that many steps to the left and return
// the result.
// Example: input: [1, 2, 3, 4], 2
// Output: [3, 4, 1, 2]

export function rotateLeft(arr: number[], positions: number) {
  const newArr = []
  let offset = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + positions]) {
      newArr[i] = arr[i + positions]
    } else {
      newArr[i] = arr[offset]
      offset++
    }
  }

  return newArr
}
