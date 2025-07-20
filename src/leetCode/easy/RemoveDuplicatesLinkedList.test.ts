import LinkedList from "../../theory/LinkedList"
import { removeDuplicatesLinkedList } from "./RemoveDuplicatesLinkedList"

test("It should remove duplicates from the list", () => {
  const listValues = [2, 2, 2, 3, 3]
  const linkedList = new LinkedList(1)

  for (const value of listValues) {
    linkedList.append(value)
  }

  expect(removeDuplicatesLinkedList(linkedList.getHead())).toEqual({
    value: 1,
    next: { value: 2, next: { value: 3, next: null } },
  })
})
