function reverseWord(string) {
  var newWord = ""

  for (i = string.length; i > 0; i--) {
    newWord += string[i - 1]
  }

  return newWord
}

console.log(reverseWord("Awsome"))
