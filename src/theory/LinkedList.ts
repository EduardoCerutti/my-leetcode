import { allowedValues } from "../models/AllowedValues"
import { listNode } from "../models/ListNode"

export class Node implements listNode {
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
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  // Space complexity: O(1)
  // Time complexity: O(1)
  prepend(value: allowedValues) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  // Space complexity: O(1)
  // Time complexity: O(1)
  append(value: allowedValues) {
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this
  }

  // Space complexity: O(1)
  // Time complexity: O(n)
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

  // Space complexity: O(1)
  // Time complexity: O(n)
  remove(index: number) {
    if (index === 0) {
      this.head = this.head.next
      this.length--
      return this
    }

    const previousNode = this.getNode(index - 1)

    if (!previousNode || !previousNode.next) {
      throw new Error("Invalid index")
    }

    previousNode.next = previousNode.next.next

    this.length--

    return this
  }

  // Space complexity: O(1)
  // Time complexity: O(n)
  reverse() {
    let prev: listNode | null = null
    let current: listNode | null = this.head
    let next: listNode | null = null

    this.tail = this.head

    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }

    this.head = prev

    return this
  }

  // Space complexity: O(1)
  // Time complexity: O(n)
  getNode(index: number) {
    if (index < 0 || index >= this.length)
      throw new Error("Index out of bounds")

    let currentNode = this.head

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  // Space complexity: O(1)
  // Time complexity: O(1)
  getHead() {
    return this.head
  }

  // Space complexity: O(1)
  // Time complexity: O(1)
  getTail() {
    return this.tail
  }
}

export default LinkedList
