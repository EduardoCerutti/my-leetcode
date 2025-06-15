// Make a function that receives a string to be manitupated and an array of strings
// that will manipulate the first string, example:
// string: "help"
// array: ["I 0 J", "D 2", "R 1 A"]
// The first letter in the array is the instruction, the number is the position and
// the last letter is to use in the instruction
// I = insert, D = delete, R = replace

// Space complexity: O(n + m)
// Time complexity: O(n + m²)
export function changeString(str: string, instrictions: [string]) {
  let newString = str.split("")

  for (const instruction of instrictions) {
    const [action, position, char] = instruction.split(" ")

    if (action === "I") newString.splice(Number(position), 0, char)
    if (action === "R") newString.splice(Number(position), 1, char)
    if (action === "D") newString.splice(Number(position), 1)
  }

  return newString.join("")
}
