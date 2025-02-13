// Time complexity: O(n)
export function reverseWord(string: string) {
  let newWord = ""

  for (let i = string.length; i > 0; i--) {
    newWord += string[i - 1]
  }

  return newWord
}

export function reverseWord2(string: string) {
  return string.split("").reverse().join("")
}

export const reverseWord3 = (string: string) => [...string].reverse().join("")
