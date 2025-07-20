// You are given the pointer to the head node of a sorted linked list, where the
// data in the nodes is in ascending order. Delete nodes and return a sorted
// list with each distinct value in the original list. The given head pointer
// may be null indicating that the list is empty.
// Example: head = 1 -> 2 -> 2 -> 2 -> 3 -> 3 -> null
// It should return the head of the fixed list 1 -> 2 -> 3 -> null
// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem?isFullScreen=true

// Space complexity: O(1)
// Time complexity: O(n)
import { listNode } from "../../models/ListNode"

export function removeDuplicatesLinkedList(listHead: listNode) {
  let current = listHead
  const head = current

  while (current) {
    if (current.value === current.next?.value) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}
