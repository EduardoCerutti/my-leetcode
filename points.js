// quando for numero adicionar no array
// quando for + somar os 2 ultimos numeros no array
// quando for D multiplicar o ultimo numero por 2
// quando for C remover o ultimo item do array

var callPoints = function (ops) {
  var result = []

  ops.map((operation) => {
    switch (operation) {
      case "+":
        result.push(result.at(-1) + result.at(-2))
        break
      case "D":
        result.push(result.at(-1) * 2)
        break
      case "C":
        result.pop()
        break
      default:
        result.push(operation)
    }
  })

  return result
}

console.log(callPoints([5, 2, "C", "D", "+"]))
