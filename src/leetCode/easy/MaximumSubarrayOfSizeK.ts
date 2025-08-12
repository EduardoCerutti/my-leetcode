// Given an array of positive numbers and a positive number ‘k,’ find the
// maximum sum of any contiguous subarray of size ‘k’.
// Example Input: [2, 1, 5, 1, 3, 2], k=3 should return 9 because it's the sum
// of [5, 1, 3]

// Space complexity: O(1)
// Time complexity: O(n)
export function maximumSubarrayOfSizeK(arr: number[], k: number) {
  let j = k

  let maxValue = 0
  let windowValue = 0

  for (let i = 0; i < j; i++) maxValue += arr[i]

  windowValue = maxValue

  for (let i = 1; j < arr.length; i++, j++) {
    windowValue += arr[j]
    windowValue -= arr[i - 1]

    if (windowValue > maxValue) maxValue = windowValue
  }

  return maxValue
}
