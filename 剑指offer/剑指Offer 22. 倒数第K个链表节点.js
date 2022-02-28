/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**  方法一 差值法 */
// 时间击败85% 空间击败17%
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let Llen = 0
  let p = head
  while (p) {
    p = p.next
    Llen++
  }
  let step = Llen - k
  p = head
  while (step) {
    p = p.next
    step--
  }
  return p
};

// 方法二 快慢指针

var getKthFromEnd = function (head, k) {
  let fast = head
  while(k) {
    fast = fast.next
    k--
  }
  let slow = head
  while(fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
};