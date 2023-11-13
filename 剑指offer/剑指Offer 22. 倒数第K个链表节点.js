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

// 2023.11.13日 发现一道辩题的题目
// 面试题 02.02. 返回倒数第 k 个节点 链接 https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/description/

// 题目描述：实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。 
// 我的解法如下：

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
  const arr = []
  while(head) {
      arr.push(head.val)
      head = head.next
  }
  return arr[arr.length - k]
};