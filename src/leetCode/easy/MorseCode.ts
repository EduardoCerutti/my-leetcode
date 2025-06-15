// Every time two consecutive dots are found, they should be replaced with two
// dashes. Example: "...." should return ["--..", ".--.", "..--"].

// Space complexity: O(n²)
// Time complexity: O(n²)
export function morseCode(str: string) {
  const res = []
  const strArray = str.split("")

  for (let i = 0; i < strArray.length; i++) {
    if (str[i] === "." && str[i + 1] === ".") {
      strArray[i] = "-"
      strArray[i + 1] = "-"

      res.push(strArray.join(""))

      strArray[i] = "."
      strArray[i + 1] = "."
    }
  }

  return res
}
