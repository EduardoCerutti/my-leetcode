// Given two sorted arrays you need to merge them and keep them sorted
// Example [1, 5, 8, 9], [3, 6, 7] should return [2, 4, 5, 6, 7, 8, 9]

// Spacel complexity: O(n + m)
// Time complexity: O(n + m)
export function mergeSortedArrays(arr1: number[], arr2: number[]) {
  const finalArr: number[] = []

  let i = 1
  let j = 1

  let arr1Item: number | null = arr1[0]
  let arr2Item: number | null = arr2[0]

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      finalArr.push(arr1Item)
      arr1Item = arr1[i]
      i++
    } else {
      finalArr.push(arr2Item)
      arr2Item = arr2[j]
      j++
    }
  }

  return finalArr
}
