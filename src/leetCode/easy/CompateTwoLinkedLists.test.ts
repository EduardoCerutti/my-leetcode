import LinkedList from "../../theory/LinkedList"
import { compareTwoLinkedLists } from "./CompateTwoLinkedLists"

describe("CompareTwoLinkedLists", () => {
  let list1: LinkedList
  let list2: LinkedList

  beforeEach(() => {
    list1 = new LinkedList(1)
    list1.append(2)
    list1.append(3)

    list2 = new LinkedList(1)
    list2.append(2)
    list2.append(3)
  })

  test("It should return true because the lists are equal", () => {
    expect(compareTwoLinkedLists(list1.getHead(), list2.getHead())).toBe(true)
  })

  test("It should return false because the lists are not equal", () => {
    list2.append(4)
    expect(compareTwoLinkedLists(list1.getHead(), list2.getHead())).toBe(false)
  })
})
