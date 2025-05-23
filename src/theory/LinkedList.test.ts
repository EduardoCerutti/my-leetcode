import LinkedList from "./LinkedList"

describe("LinkedList", () => {
  let linkedList: LinkedList

  beforeEach(() => {
    linkedList = new LinkedList(5)
    linkedList.append(10)
  })

  test("It should preppend a new node to the beginning of the list", () => {
    linkedList.prepend(0)
    expect(linkedList.getHead()).toEqual({
      value: 0,
      next: { value: 5, next: { value: 10, next: null } },
    })
  })

  test("It should append a new node to the end of the list", () => {
    linkedList.append(15)
    expect(linkedList.getTail()).toEqual({ value: 15, next: null })
  })

  test("It should insert a new node at the position 1 of the list", () => {
    linkedList.insert(1, 7)
    expect(linkedList.getHead()).toEqual({
      value: 5,
      next: { value: 7, next: { value: 10, next: null } },
    })
  })
})
