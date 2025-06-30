// You are given an integer array height of length n
// Find two lines that together with the x-axis form a container, such that the
// container contains the most water.
// Return the maximum amount of water a container can store.
// Example: Input: [1,8,6,2,5,4,8,3,7] Output: 49
// In this case the max area will be 49 because if we select position 1 and 8
// we will have 7 containers that has 7 max capacity in the middle

// Space complexity: O(1)
// Time complexity: O(n)
export function containerWithMostWater(height: number[]) {
  let i = 0
  let j = height.length - 1

  let result = 0

  while (i < j) {
    const minHeight = Math.min(height[i], height[j])
    const area = (j - i) * minHeight
    result = Math.max(result, area)

    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }

  return result
}
