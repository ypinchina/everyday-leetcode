// 234. 回文链表 https://leetcode-cn.com/problems/palindrome-linked-list/
// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

// 示例 1：


// 输入：head = [1,2,2,1]
// 输出：true
// 示例 2：


// 输入：head = [1,2]
// 输出：false

// 解题思路：
// 1. 先建立空的数组
// 2. while循环遍历链表，将链表的每一个值推进数组里
// 3. 新增一左一右两个指针指向数组首尾
// 4. 遍历数组，当左指针不等于有指针时，返回false,每轮循环两指针都往中间进一位

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let p = head
  let arr = []
  while (p) {
    arr.push(p.val)
    p = p.next
  }
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false
    }
    left++
    right--
  }
  return true
};

// 时间复杂度O(n)，两个线性的循环 n + n/2
// 空间复杂度O(n)，n为新增数组的长度

// 目前只用了这种方法。空间复杂度为1的算法有空再补充
