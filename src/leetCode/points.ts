// quando for numero adicionar no array
// quando for + somar os 2 ultimos numeros no array
// quando for D multiplicar o ultimo numero por 2
// quando for C remover o ultimo item do array

// The time complexity: O(n)
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
