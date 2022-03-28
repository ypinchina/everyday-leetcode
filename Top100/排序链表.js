// 148. 链表排序 https://leetcode-cn.com/problems/sort-list/
// 解题思路
// 定义一个空间复杂度为n的数组，遍历链表，将链表的元素的值push到数组里，这是第一次循环，时间复杂度为n
// 然后对数组使用api排序，chrome是快排 ，时间复杂度为O(nlogn)
// 最后再循环一次，将数组的元素重新赋值到原来的链表中，时间复杂度为n

// 代码

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
var sortList = function (head) {
    let p = head
    const arr = []
    while (p) {
        arr.push(p.val)
        p = p.next
    }
    arr.sort((a, b) => a - b)
    p = head
    let i = 0
    while(p) {
        p.val = arr[i]
        p = p.next
        i++
    }
    return head
};
// 时间击败88%,空间击败63%