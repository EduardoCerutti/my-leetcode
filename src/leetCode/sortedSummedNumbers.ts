// This is part of a Google interview

// Find two numbers in the array [1, 2, 4, 4] that summed becomes 8, the array
// is always sorted

// Time complexity: O(n)
export const sortedSummedNumbers = (array: number[], sum: number) => {
  let low = 0
  let high = array.length - 1

  while (low < high) {
    const summed = array[low] + array[high]

    if (summed === sum) return true

    if (summed > sum) high--

    if (summed < sum) low++
  }

  return false
}
