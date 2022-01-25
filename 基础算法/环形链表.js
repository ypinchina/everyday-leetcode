141. 环形链表 https://leetcode-cn.com/problems/linked-list-cycle/
给你一个链表的头节点 head ，判断链表中是否有环。


思路
定义一快一慢双指针， 慢指针每次走一步，快指针每次走两步，如果存在环形链表，则快指针（跑得快的兔子），会进入第二圈，超越还在第一圈的慢指针（乌龟）


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head
    // 定义慢指针
    let fast = head
    // 定义快指针
    while (slow && fast && fast.next) {
        slow = slow.next
        // 每次走一步
        fast = fast.next.next
        // 每次走两步
        if (slow === fast) return true
    }
    return false
};
空间复杂度为O(1)

