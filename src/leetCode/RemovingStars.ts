// You'll receive a string that has *, when a * is found you should remove it and
// the closest left char, example "leet**cod*e" should return lecoe

// Time complexity: O(n)
export function removingStars(str: string) {
  const newWord = []

  for (let char of str) {
    if (char !== "*") newWord.push(char)
    else newWord.pop()
  }

  return newWord.join("")
}
