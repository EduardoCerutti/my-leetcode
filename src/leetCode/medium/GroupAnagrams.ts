// Given an array of strings strs, group the anagrams together. You can return
// the answer in any order.
// Example: Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// In this case the words that are anagrams (have the same letters) are grouped
// and than returned
// https://leetcode.com/problems/group-anagrams/description/

// Space complexity: O(1)
// Time complexity: O(n)

export function groupAnagrams(array: string[]) {
  if (array.length === 0) return [[""]]

  const result = {}
  for (let str of array) {
    const indexStr = str.split("").sort().join("")
    if (result[indexStr] === undefined) result[indexStr] = []

    result[indexStr].push(str)
  }

  return Object.values(result)
}
