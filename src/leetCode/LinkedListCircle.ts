// Given the head of a linked list, return the node where the cycle begins.
// If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can
// be reached again by continuously following the next pointer. Internally, pos
// is used to denote the index of the node that tail's next pointer is connected
// to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed
// as a parameter.
// Example: Input: head = [3,2,0,-4] but the .next of position 3 is position 1
// So it should return position 1 listNode

// Space complexity: O(n)
// Time complexity: O(n)
import { listNode } from "../models/ListNode"

export function detectCycle(head: listNode) {
  let current = head
  const seen = new Set()

  while (current) {
    if (seen.has(current)) return current
    seen.add(current)
    current = current.next
  }

  return null
}
