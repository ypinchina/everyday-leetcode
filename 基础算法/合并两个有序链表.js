// 21. 合并两个有序链表 https://leetcode-cn.com/problems/merge-two-sorted-lists/
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
// 解题思路：就是比较传统的一次遍历就能完成
// 具体看下面代码注释

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let p1 = list1
    // 定义p1指针指向第一个链表头
    let p2 = list2
    // 定义p2指针指向第二个链表头
    let res = new ListNode(0)
    let p3 = res
    // 定义p3指针指向创建的新的一个以0为头结点的链表
    while (p1 && p2) {
        // 只单次遍历，合理利用两个链表都是有序的特性
        if (p1.val > p2.val) {
            p3.next = new ListNode(p2.val)
            p2 = p2.next
        } else {
            p3.next = new ListNode(p1.val)
            p1 = p1.next
        }
        p3 = p3.next
    }
    if (p1) {
        // 如果 p1链表仍有未添加到p3新链表中去的元素，则直接让p3接上p1
        p3.next = p1
    }
    if (p2) {// 同理
        p3.next = p2
    }
    return res.next
};

// 时间复杂度O(m+n) ,m 和n是两个链表的节点数
// 空间复杂度为O(1),仅仅使用了几个指针，常量级