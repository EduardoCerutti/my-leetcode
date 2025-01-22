// this is part of a Google interview

// find two numbers in the array [1, 2, 4, 4] that summed becomes 8, the array
// is always sorted

// this solution is linear O(n)
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
