// 剑指 Offer 18. 删除链表的节点
// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

// 返回删除后的链表的头节点。

// 注意：此题对比原题有改动

// 示例 1:

// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
// 示例 2:

// 输入: head = [4,5,1,9], val = 1
// 输出: [4,5,9]
// 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

// 解题思路， 需要创建一个额外的节点作为队头，因为可能需要删除队头
// 使用三个指针可以解决此题。时间击败78% 空间击败28%

// 具体解法看注释，


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let p = new ListNode(0)
    // 创建一个额外的队头
    p.next = head
    // 该节点指向原链表的队头
    let p1 = head, p2 = p
    // 设置双指针 p1用于指向原来的队头，p2指向新创建的队头
    while(p1) {
        if (p1.val === val) {
                let temp = p1.next ? p1.next : null
                // 需要兼容删除的是最后一个节点的情况
                p2.next = temp
                p1 = temp
        } else {
            p2 = p1
            p1 = p1.next
            // 不是要删除的节点的话则都后移
        }
    }
