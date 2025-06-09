// Make a function that receives a string to be manitupated and an array of strings
// that will manipulate the first string, example:
// string: "help"
// array: ["I 0 J", "D 2", "R 1 A"]
// The first letter in the array is the instruction, the number is the position and
// the last letter is to use in the instruction
// I = insert, D = delete, R = replace

export function changeString(str: string, instrictions: [string]) {
  let newString = str.split("")

  for (const instruction of instrictions) {
    const actionInfo = instruction.split(" ")

    const action = actionInfo[0]
    const position = Number(actionInfo[1])
    const char = actionInfo?.[2]

    if (action === "I") newString.splice(position, 0, char)
    if (action === "R") newString.splice(position, 1, char)
    if (action === "D") newString.splice(position, 1)
  }

  return newString.join("")
}
