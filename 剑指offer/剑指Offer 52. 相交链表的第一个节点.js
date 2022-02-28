/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 等距离法

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  // 设置双指针
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    // 直到相遇位置， 即使不相遇 都是指向null也可以跳出返回null
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pB;
  // 返回pA或pB都可以
};

