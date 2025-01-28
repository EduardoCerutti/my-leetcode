// I needs to replace chars </> form html tags

// This have a time complexity of O(n)
export function replaceTags(string: string) {
  return string.substring(2, string.length - 1)
}
