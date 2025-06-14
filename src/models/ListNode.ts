import { allowedValues } from "./AllowedValues"

export type listNode = {
  value: allowedValues
  next: listNode | null
}
