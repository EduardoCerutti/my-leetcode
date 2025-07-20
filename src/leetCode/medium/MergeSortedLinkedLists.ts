// Given pointers to the heads of two sorted linked lists, merge them into a
// single, sorted linked list. Either head pointer may be null meaning that
// the corresponding list is empty.
// Example: List1 = 0 -> 3 -> null, List2 = 2 -> 10 -> null
// It should return 0 -> 2 -> 3 -> 10 -> null
// https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem?isFullScreen=true

// Space complexity: O(1)
// Time complexity: O(n + m)
import { listNode } from "../../models/ListNode"

export function mergeSortedLinkedLists(
  listHead1: listNode,
  listHead2: listNode
) {
  let current1 = listHead1
  let current2 = listHead2

  let newList = { value: 0, next: null } as listNode
  const newListHead = newList

  while (current1 && current2) {
    if (current1.value <= current2.value) {
      newList.next = current1
      current1 = current1.next
    } else {
      newList.next = current2
      current2 = current2.next
    }

    newList = newList.next
  }

  newList.next = current1 || current2

  return newListHead.next
}
