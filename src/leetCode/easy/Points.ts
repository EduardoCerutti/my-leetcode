// when it's a number, add it to the array
// when it's +, sum the last two numbers in the array
// when it's D, multiply the last number by 2
// when it's C, remove the last item from the array

// Space complexity: O(n)
// Time complexity: O(n)
export function points(ops: Array<number | string>) {
  const result: number[] = []

  ops.map((operation: string | number) => {
    switch (operation) {
      case "+":
        result.length >= 2 && result.push(result.at(-1)! + result.at(-2)!)
        break
      case "D":
        result.length >= 1 && result.push(result.at(-1)! * 2)
        break
      case "C":
        result.pop()
        break
      default:
        typeof operation === "number" && result.push(operation)
    }
  })

  return result
}
