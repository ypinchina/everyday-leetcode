// 82. 删除排序链表中的重复元素 II https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

// 示例 1：

// 输入：head = [1,2,3,3,4,4,5]
// 输出：[1,2,5]
// 解题思路：使用字典记录每个节点出现的次数，然后变成数组，过滤超过1次的项，然后遍历生成新的链表，
// 怎么样，够暴力吧。时间复杂度不算高，但是空间复杂度稍微有点惊人，所以需要继续优化，先做个题解在这

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
var deleteDuplicates = function (head) {
    let p = head
    let map = new Map()
        // 生成字典
    while (p) {
        const val = p.val
        if (map.has(val)) {
            map.set(val, map.get(val) + 1)
        } else {
            map.set(val, 1)
        }
        p = p.next
    }
    const arr = Array.from(map).filter(item => item[1]==1)
    // 过滤字典里的统计超过1次的项并变为数组
    let res = new ListNode(0)
    let p1 = res
    for (item of arr) {
        // 由数组变为链表
        p1.next = new ListNode(item[0])
        p1 = p1.next    
    }
    return res.next
};

// 时间复杂度都是单次循环 认为是线性的O（n）
// 空间复杂度也认为是线性的O（n） ，这里不太确定