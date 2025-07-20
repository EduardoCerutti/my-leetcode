import LinkedList from "../../theory/LinkedList"
import { mergeSortedLinkedLists } from "./MergeSortedLinkedLists"

test("It should return one list with the two ordered lists merged", () => {
  const list1 = new LinkedList(0)
  list1.append(3)

  const list2 = new LinkedList(2)
  list2.append(10)

  expect(mergeSortedLinkedLists(list1.getHead(), list2.getHead())).toEqual({
    value: 0,
    next: { value: 2, next: { value: 3, next: { value: 10, next: null } } },
  })
})
