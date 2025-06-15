// I needs to replace chars </> form html tags

// Space complexity: O(n)
// Time complexity: O(n)
export function replaceTags(string: string) {
  return string.substring(2, string.length - 1)
}
