// Time complexity: O(n)
export function reverseWord(string: string) {
  let newWord = ""

  for (let i = string.length; i > 0; i--) {
    newWord += string[i - 1]
  }

  return newWord
}
