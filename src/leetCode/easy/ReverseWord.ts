// Space complexity: O(n)
// Time complexity: O(n)
export function reverseWord(string: string) {
  let newWord: string[] = []

  for (let i = string.length; i > 0; i--) {
    newWord.push(string[i - 1])
  }

  return newWord.join("")
}

// Space complexity: O(n)
// Time complexity: O(n)
export function reverseWord2(string: string) {
  return string.split("").reverse().join("")
}

// Space complexity: O(n)
// Time complexity: O(n)
export const reverseWord3 = (string: string) => [...string].reverse().join("")
