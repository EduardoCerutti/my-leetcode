// this is part of a Google interview

// find two numbers in the array [1, 2, 4, 4] that summed becomes 8, the array
// is always sorted

// this solution is linear O(n)
const sumOfSortedArray = (array: number[], sum: number) => {
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

console.log(sumOfSortedArray([1, 2, 4, 4], 8))

// but what if the array isn't sorted ?

// I think it's O(n²) because I have a find (O(n)) inside forEach (O(n))
const sumOfNotSortedArray = (array: number[], sum: number) => {
  array.forEach((element) => {
    const neededValue = element - sum

    if (array.find((value) => value === neededValue)) return true
  })

  return false
}

console.log(sumOfNotSortedArray([5, 2, 6, 4], 9))
