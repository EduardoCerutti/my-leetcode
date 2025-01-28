// But what if the array isn't sorted ?

// Time complexity: O(n)
export const summedNumbers = (array: number[], sum: number) => {
  const seen = new Set<number>()

  // I used for of here because foreach doesn't stop when return
  for (const element of array) {
    const neededValue = sum - element

    if (seen.has(neededValue)) return true
    seen.add(element)
  }

  return false
}
