type allowedValues = number | string | boolean

type listNode = {
  value: allowedValues
  next: listNode | null
}

class Node implements listNode {
  value: allowedValues
  next: listNode | null

  constructor(value: allowedValues) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  protected head: listNode
  protected tail: listNode
  protected length: number

  constructor(value: allowedValues) {
    this.head = { value, next: null }
    this.tail = this.head
    this.length = 1
  }

  //Time complexity: O(1)
  prepend(value: allowedValues) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  //Time complexity: O(1)
  append(value: allowedValues) {
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this
  }

  //Time complexity: O(n)
  insert(index: number, value: allowedValues) {
    if (index === 0) return this.prepend(value)

    if (index >= this.length) return this.append(value)

    const previousNode = this.getNode(index - 1)

    const newNode = new Node(value)

    const nextNode = previousNode.next
    previousNode.next = newNode
    newNode.next = nextNode

    this.length++

    return this
  }

  //Time complexity: O(n)
  remove(index: number) {
    if (index === 0) {
      this.head = this.head.next
      this.length--
      return this
    }

    const previousNode = this.getNode(index - 1)
    previousNode.next = previousNode.next.next

    this.length--

    return this
  }

  //Time complexity: O(n)
  getNode(index: number) {
    let currentNode = this.head

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }
}

export default LinkedList
