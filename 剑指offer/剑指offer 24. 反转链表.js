/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let p1 = null,
    p2 = head;
  while (p2) {
    let temp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = temp;
  }
  return p1;
};
