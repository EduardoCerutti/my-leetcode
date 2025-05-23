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

  prepend(value: allowedValues) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  append(value: allowedValues) {
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this
  }

  insert(position: number, value: allowedValues) {
    if (position === 0) return this.prepend(value)

    if (position >= this.length) return this.append(value)

    let currentNode = this.head

    for (let i = 0; i < position - 1; i++) {
      currentNode = currentNode.next
    }

    const newNode = new Node(value)

    const temp = currentNode.next
    currentNode.next = newNode
    newNode.next = temp

    this.length++

    return this
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }
}

export default LinkedList
