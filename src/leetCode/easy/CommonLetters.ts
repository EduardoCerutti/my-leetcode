// check if both arrays has at least one letter in common
// [g, a, w, j] [b, q, j] should return true

// Space complexity: O(n)
// Time complexity: O(n + m)
export const commonLetters = (arr1: string[], arr2: string[]) => {
  const seen = new Set(arr1) // O(n)
  return arr2.some((element) => seen.has(element)) // O(m)
}
