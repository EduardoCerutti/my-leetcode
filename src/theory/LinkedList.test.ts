import LinkedList from "./LinkedList"

describe("LinkedList", () => {
  let linkedList: LinkedList

  beforeEach(() => {
    linkedList = new LinkedList(5)
    linkedList.append(10)
    linkedList.append(15)
  })

  test("It should preppend a new node to the beginning of the list", () => {
    linkedList.prepend(0)
    expect(linkedList.getHead()).toEqual({
      value: 0,
      next: { value: 5, next: { value: 10, next: { value: 15, next: null } } },
    })
  })

  test("It should append a new node to the end of the list", () => {
    linkedList.append(20)
    expect(linkedList.getTail()).toEqual({ value: 20, next: null })
  })

  test("It should insert a new node at the position 2 of the list", () => {
    linkedList.insert(2, 12)
    expect(linkedList.getHead()).toEqual({
      value: 5,
      next: { value: 10, next: { value: 12, next: { value: 15, next: null } } },
    })
  })

  test("It should remove a node at the position 1 of the list", () => {
    linkedList.remove(1)
    expect(linkedList.getHead()).toEqual({
      value: 5,
      next: { value: 15, next: null },
    })
  })

  test("It should revert the list", () => {
    linkedList.reverse()
    expect(linkedList.getHead()).toEqual({
      value: 15,
      next: { value: 10, next: { value: 5, next: null } },
    })
  })
})
