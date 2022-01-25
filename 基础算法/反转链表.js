206. 反转链表 https://leetcode-cn.com/problems/reverse-linked-list/
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表

老熟人题目了

迭代
这种方法最好在纸上画出链表图进行模拟，需要使用双指针模拟


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null
    // pre为前置指针 模拟链表尾部节点的next，指向为空
    let cur = head
    // 当前指针，模拟链表反转后的尾部节点
    while (cur) {
        let temp = cur.next
        // 临时存储指针 temp 保存当前节点的下一个节点
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};