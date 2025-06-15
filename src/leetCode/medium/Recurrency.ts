// Google interview question
// Given an array of integers, return the first number thar repeats

// Space complexity: O(n)
// Time complexity: O(n)
export function recurrency(arr: number[]) {
  let hashTable = new Map()

  for (let num of arr) {
    if (hashTable.has(num)) return num

    hashTable.set(num, true)
  }

  return undefined
}
