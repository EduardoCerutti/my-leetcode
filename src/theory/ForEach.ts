import { allowedValues } from "../models/AllowedValues"

export function forEach(array: allowedValues[]) {
  array.forEach((element: allowedValues) => {
    console.log(element)
  })
}
