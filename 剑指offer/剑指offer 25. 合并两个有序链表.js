/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let p = new ListNode(0)
  let p0 = p
  let p1 = l1, p2 = l2
  while (p1 && p2) {
    if (p1.val >= p2.val) {
      p0.next = new ListNode(p2.val)
      p0 = p0.next
      p2 = p2.next
    } else {
      p0.next = new ListNode(p1.val)
      p0 = p0.next
      p1 = p1.next
    }
  }
  if (p1) {
    p0.next = p1
  }
  if (p2) {
    p0.next = p2
  }
  return p.next
};