// There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of
// input strings. Return an array of the results.
// Example: Inputs: stringList = [ab, ab, abc], queries = [ab, abc, bc]
// Output: [2, 1, 0]

//Space complexity: O(n + m)
//Time complexity: O(n + m)
export function arraysCount(stringList: string[], queries: string[]) {
  const freqMap: Record<string, number> = {}

  for (const str of stringList) {
    freqMap[str] = (freqMap[str] || 0) + 1
  }

  const result = queries.map((query) => freqMap[query] || 0)

  return result
}
