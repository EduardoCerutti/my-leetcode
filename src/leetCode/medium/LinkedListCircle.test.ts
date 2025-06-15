import { allowedValues } from "../../models/AllowedValues"
import { Node } from "../../theory/LinkedList"
import { detectCycle } from "./LinkedListCircle"

test("It should detect a cycle at index 9 in linked list", () => {
  const values = [-1, -7, 7, -4, 19, 6, -9, -5, -2, -5]
  const pos = 9

  const head = createCyclicList(values, pos)
  const cycleNode = detectCycle(head)

  let current = head
  for (let i = 0; i < pos; i++) {
    current = current.next
  }

  expect(cycleNode).toBe(current)
})

function createCyclicList(values: allowedValues[], pos: number) {
  let dummy = new Node(0)
  let current = dummy
  let cycleStart = null

  values.forEach((val, index) => {
    const newNode = new Node(val)
    current.next = newNode
    current = newNode
    if (index === pos) cycleStart = newNode
  })

  if (pos !== -1) {
    current.next = cycleStart
  }

  return dummy.next
}
