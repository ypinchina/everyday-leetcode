// 344. 反转字符串  https://leetcode-cn.com/problems/reverse-string/
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

 

// 因为是原地解决 所以使用双指针，不使用额外的数组占用内存空间，
// 左指针指向数组头，右指针指向数组尾部


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // 使用双指针
    let left = 0
    let right = s.length - 1
    while(right > left) {
        // 交换左右指针的数值，直到不满足循环条件
        const temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
};
// 时间复杂度是线性级O(n), 空间复杂度是原地O(1)
