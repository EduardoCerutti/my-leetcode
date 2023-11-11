// Have the function StringChallenge(str) read the str parameter being
// passed which will be a string of HTML DOM elements and plain text.
// The elements that will be used are: b, i, em, div, p. For example:
// if str is "<div><b><p>hello world</p></b></div>" then this string
// of DOM elements is nested correctly so your program should return
// the string true.

// If a string is not nested correctly, return the first element encountered
// where, if changed into a different element, would result in a properly
// formatted string. If the string is not formatted properly, then it will
// only be one element that needs to be changed. For example: if str is
// "<div><i>hello</i>world</b>" then your program should return the string
// div because if the first <div> element were changed into a <b>, the
// string would be properly formatted.
// Once your function is working, take the final output string and
// intersperse it character-by-character with your ChallengeToken.

// Your ChallengeToken: igh5czfue2

function checkTags(str) {
  const openingTags = ["<b>", "<i>", "<em>", "<div>", "<p>"]
  const closingTags = ["</b>", "</i>", "</em>", "</div>", "</p>"]

  let stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      let tag = ""

      while (str[i] !== ">") {
        tag += str[i]
        i++
      }
      tag += str[i]

      if (openingTags.includes(tag)) stack.push(tag)

      if (closingTags.includes(tag)) {
        if (stack.length === 0) return tag

        const lastItem = stack[stack.length - 1]
        if (
          tag.substring(2, tag.length - 1) !==
          lastItem.substring(1, lastItem.length - 1)
        )
          return stack[stack.length - 1]

        stack.pop()
      }
    }
  }

  if (stack.length > 0) return stack[stack.length - 1]

  return "true"
}

function intersperse(str) {
  const token = "igh5czfue2"
  let interspersedString = []

  const biggestWordSize = token.length > str.length ? token.length : str.length

  for (let i = 0; i < biggestWordSize; i++) {
    if (str[i]) interspersedString.push(str[i])
    if (token[i]) interspersedString.push(token[i])
  }

  return interspersedString.join("")
}

function StringChallenge(str) {
  let checkedString = checkTags(str)

  if (checkedString !== "true")
    checkedString = checkedString.substring(1, checkedString.length - 1)

  return intersperse(checkedString)
}

// keep this function call here
console.log(StringChallenge("<div><i>hello</i>world</b>"))
