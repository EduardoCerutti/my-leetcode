// You’re given the pointer to the head nodes of two linked lists. Compare the
// data in the nodes of the linked lists to check if they are equal. If all
// data attributes are equal and the lists are the same length, return true.
// Otherwise, return false.
// Example: list1 = 1 -> 2 -> 3 -> null, list2 = 1 -> 2 -> 3 -> null
// It should return true because the two lists are the same
// https://www.hackerrank.com/challenges/compare-two-linked-lists/problem?isFullScreen=true

// Space complexity: O(1)
// Time complexity: O(n)
import { listNode } from "../../models/ListNode"

export function compareTwoLinkedLists(list1: listNode, list2: listNode) {
  let current1 = list1
  let current2 = list2

  while (current1 && current2) {
    if (current1.value !== current2.value) return false

    current1 = current1.next
    current2 = current2.next
  }

  if (current1 || current2) return false

  return true
}
